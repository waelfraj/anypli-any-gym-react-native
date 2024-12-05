import React from 'react';
import CompleteProfilItems from '../CompleteProfilItems/CompleteProfilItems';
import { Controller } from 'react-hook-form';
import { Text, View } from 'react-native';
import styles from './goalStyles';
import { objectifData } from '../../../../../../utils/constants/objectifs';
import { strings } from '../../../../../../locales/i18n';
interface GoalProps {
  control: any;
}

const Goal: React.FC<GoalProps> = ({ control }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{strings('completeProfile.goal')}</Text>
      <View style={styles.topSpacing}>
        <Controller
          control={control}
          name={'objective'}
          render={({ field: { onChange, value = '1' } }) => {
            return (
              <CompleteProfilItems
                selected={value}
                setSelected={onChange}
                data={objectifData}
              />
            );
          }}
        />
      </View>
    </View>
  );
};
export default Goal;
