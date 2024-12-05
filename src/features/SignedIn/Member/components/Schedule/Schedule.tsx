import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Agenda, LocaleConfig } from 'react-native-calendars';
import i18n, { strings } from '../../../../../locales/i18n';
import colors from '../../../../../utils/constants/colors';
import ListEmpty from '../../../Coach/Training/components/ListEmpty/ListEmpty';
import styles from './scheduleStyles';

interface ScheduleProps {
  goToTrainingDetail: any;
  items: any;
}

LocaleConfig.locales['en'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  today: 'Today'
};

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
  ],
  monthNamesShort: [
    'Janv.',
    'Févr.',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juil.',
    'Août',
    'Sept.',
    'Oct.',
    'Nov.',
    'Déc.'
  ],
  dayNames: [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi'
  ],
  dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
  today: "Aujourd'hui"
};

const Schedule: React.FC<ScheduleProps> = ({ items, goToTrainingDetail }) => {
  LocaleConfig.defaultLocale = i18n.language;

  const renderItem = (item: any) => {
    return (
      <TouchableOpacity
        style={styles.item}
        key={item.title}
        onPress={() => goToTrainingDetail(item.id)}>
        <Text style={styles.itemText}>{item.title}</Text>
        <Text style={styles.itemText}>
          {strings('labels.coach')} : {item.coach}
        </Text>
        <View style={styles.row}>
          <Text style={styles.itemText}>
            {strings('labels.level')} : {strings(`level.${item.difficulty}`)}
          </Text>
          <Text style={styles.itemText}>
            {strings('labels.calories')} : {item.total_calories}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderEmptyDate = () => {
    return <ListEmpty />;
  };

  return (
    <View style={styles.container}>
      <Agenda
        theme={{
          selectedDayBackgroundColor: colors['teal-800'],
          dotColor: colors['teal-800'],
          selectedDayTextColor: colors.white,
          todayTextColor: colors['teal-800']
        }}
        showClosingKnob={true}
        items={items}
        showOnlySelectedDayItems
        renderItem={(item) => renderItem(item)}
        renderEmptyData={renderEmptyDate}
      />
    </View>
  );
};

export default Schedule;
