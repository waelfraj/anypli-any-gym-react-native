import React from 'react';
import { GestureResponderEvent, ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomListItems from '../../../../../components/CustomListItems/CustomListItems';
import { strings } from '../../../../../locales/i18n';
import styles from './profilCoachStyles';
import { PROFIL_ICON } from '../../../../../utils/constants/icons';
interface ProfilCoachProps {
  listItems: {
    id?: string;
    name: string;
    icon?: string;
    onPress: (event: GestureResponderEvent) => void;
    customColor?: string;
  }[];
}

const ProfilCoach = ({ listItems }: ProfilCoachProps) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon name={PROFIL_ICON} style={styles.icon} />
          <Text style={styles.textHeader}>{strings('bottomTab.setting')}</Text>
        </View>
        <View style={styles.listItemContainer}>
          <CustomListItems listItems={listItems} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfilCoach;
