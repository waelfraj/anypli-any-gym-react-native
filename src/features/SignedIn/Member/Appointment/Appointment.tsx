import React from 'react';
import { View } from 'react-native';
import {
  CalendarProvider,
  ExpandableCalendar,
  TimelineEventProps,
  TimelineList,
  TimelineProps
} from 'react-native-calendars';
import styles from './appointmentStyles';

interface AppointmentProps {
  currentDate: Date;
  marked: { [date: string]: { marked: boolean } };
  eventsByDate: { [date: string]: TimelineEventProps[] };
  initialTime: { hour: number; minutes: number };
  timelineProps: Partial<TimelineProps>;
  selectedDate: Date;
  setSelectedDate: any;
  visible: boolean;
  setVisible: any;
}

const Appointment: React.FC<AppointmentProps> = ({
  currentDate,
  marked,
  eventsByDate,
  initialTime,
  timelineProps,
  selectedDate,
  setSelectedDate,
  visible,
  setVisible
}) => {
  return (
    <View style={styles.container}>
      <CalendarProvider
        date={currentDate.toString()}
        showTodayButton
        disabledOpacity={0.6}
        onDateChanged={(e) => setSelectedDate(e)}>
        <ExpandableCalendar firstDay={1} markedDates={marked} />
        <View style={styles.timelineContainer}>
          <TimelineList
            events={eventsByDate}
            showNowIndicator
            timelineProps={timelineProps}
            scrollToNow
            scrollToFirst
            initialTime={initialTime}
          />
        </View>
      </CalendarProvider>
    </View>
  );
};

export default Appointment;
