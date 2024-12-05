import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import moment from 'moment'; // Import de moment pour la manipulation des dates
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { TimelineEventProps, TimelineProps } from 'react-native-calendars';
import Loading from '../../../../components/Loading/Loading';
import { useAppSelector } from '../../../../hooks/hooks';
import { MemberStackParamList } from '../../../../navigations/Member/MemberStackParamList';
import { useLazyGetAppointmentQuery } from '../../../../store/api/appointmentApi';
import colors from '../../../../utils/constants/colors';
import { APPOINTMENT_STACK_SCREEN_NAME } from '../../../../utils/constants/screenName';
import { Appointment as AppointmentModel } from './../../../../models/Appointment';
import Appointment from './Appointment';
import styles from './appointmentStyles';
import DetailsAppointment from './components/DetailsAppointment/DetailsAppointment';

interface AppointmentContainerProps
  extends NativeStackScreenProps<
    MemberStackParamList,
    typeof APPOINTMENT_STACK_SCREEN_NAME
  > {}

const AppointmentContainer: React.FC<AppointmentContainerProps> = ({
  navigation
}): JSX.Element => {
  const OTHER_APPOINTMENT_COLOR = colors['red-300'];
  const OWN_APPOINTMENT_COLOR = colors['green-300'];

  const [trigger, { data, error, isLoading }] = useLazyGetAppointmentQuery();
  useEffect(() => {
    trigger({});
  }, []);

  const [visible, setVisible] = useState(false);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(moment().toDate());
  const INITIAL_TIME = { hour: 9, minutes: 0 };
  const userId = useAppSelector((state) => state.auth.user.id);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEventProps | null>(
    null
  );

  const renderEvent = (event: TimelineEventProps) => (
    <TouchableOpacity
      onPress={() => {
        setSelectedEvent(event);
        setDetailsVisible(true);
      }}
      style={[styles.event, { backgroundColor: event.color }]}>
      <Text style={styles.eventTitle}>{event.title}</Text>
      {event.summary && (
        <Text style={styles.eventSummary}>{event.summary}</Text>
      )}
    </TouchableOpacity>
  );

  const timelineProps: Partial<TimelineProps> = {
    format24h: true,
    unavailableHours: [
      { start: 0, end: 6 },
      { start: 22, end: 24 }
    ],
    overlapEventsSpacing: 8,
    rightEdgeSpacing: 24,
    renderEvent
  };

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  const currentDate = selectedDate;
  const marked: { [key: string]: { marked: boolean } } = {};
  const eventsByDate: { [key: string]: TimelineEventProps[] } = {};
  if (data) {
    data.forEach((appointment: AppointmentModel) => {
      const start = moment(appointment.startDate).toDate();
      const end = moment(appointment.endDate).toDate();
      marked[moment(start).format('YYYY-MM-DD')] = { marked: true };
      marked[moment(end).format('YYYY-MM-DD')] = { marked: true };

      const event: TimelineEventProps = {
        start,
        end,
        title: appointment.title || '',
        summary: appointment.category || '',
        id: appointment.id?.toString() || '',
        room: appointment.room || '',
        member: appointment.members || [],
        coach: (appointment.coach && appointment.coach.user.username) || '',
        color:
          appointment.coach && appointment.coach.user.id === userId
            ? OWN_APPOINTMENT_COLOR
            : OTHER_APPOINTMENT_COLOR,
        nbrP: appointment.numberParticipation || 0
      };

      if (eventsByDate[moment(start).format('YYYY-MM-DD')]) {
        eventsByDate[moment(start).format('YYYY-MM-DD')].push(event);
      } else {
        eventsByDate[moment(start).format('YYYY-MM-DD')] = [event];
      }
    });
  }

  if (error) {
    return <Text>Error</Text>;
  }

  return (
    <>
      <Appointment
        currentDate={currentDate}
        marked={marked}
        eventsByDate={eventsByDate}
        initialTime={INITIAL_TIME}
        timelineProps={timelineProps}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        visible={visible}
        setVisible={setVisible}
      />
      <DetailsAppointment
        isVisible={detailsVisible}
        setVisible={setDetailsVisible}
        event={selectedEvent}
      />
    </>
  );
};

export default AppointmentContainer;
