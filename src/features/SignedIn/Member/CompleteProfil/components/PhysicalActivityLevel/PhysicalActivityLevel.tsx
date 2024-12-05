import React from 'react';
import CompleteProfilItems from '../CompleteProfilItems/CompleteProfilItems';
import { Controller } from 'react-hook-form';
import { View, Text } from 'react-native';
import styles from './physicalActivityLevelStyles';
import { PhysicalActivityLevelData } from '../../../../../../utils/constants/physicalActivityLevel';
import { strings } from '../../../../../../locales/i18n';

interface PhysicalActiviityLevelProps {
  control: any;
}

const PhysicalActivityLevel: React.FC<PhysicalActiviityLevelProps> = ({
  control
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {strings('completeProfile.physicalActivityLevel')}
      </Text>
      <View style={styles.topSpacing}>
        <Controller
          control={control}
          name={'physicalActivityLevel'}
          render={({ field: { onChange, value = 'beginner' } }) => {
            return (
              <CompleteProfilItems
                selected={value}
                setSelected={onChange}
                data={PhysicalActivityLevelData}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default PhysicalActivityLevel;
