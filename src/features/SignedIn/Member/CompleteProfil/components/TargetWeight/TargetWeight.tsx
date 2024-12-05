import React from 'react';
import { View, Text } from 'react-native';
import { RulerPicker } from 'react-native-ruler-picker';
import {
  WINDOW_HEIGHT,
  WINDOW_WIDTH
} from '../../../../../../utils/constants/layout';
import styles from './targetWeightStyles';
import { Controller } from 'react-hook-form';
import { strings } from '../../../../../../locales/i18n';

interface TargetWeightProps {
  control: any;
}

const TargetWeight: React.FC<TargetWeightProps> = ({ control }) => {
  const WIDTH = WINDOW_WIDTH / 1.5;
  const HEIGHT = WINDOW_HEIGHT / 5;
  const MIN = 20;
  const MAX = 200;
  const STEP = 0.1;
  const FRACTION_DIGITS = 1;
  const UNIT = 'Kg';
  const NAME = 'targetWeight';
  const INITIAL_VALUE = 70;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {strings('completeProfile.targetWeight')}
      </Text>
      <View style={styles.topSpacing}>
        <Controller
          control={control}
          name={NAME}
          render={({ field: { onChange, value = 70 } }) => {
            return (
              <RulerPicker
                initialValue={INITIAL_VALUE}
                height={HEIGHT}
                width={WIDTH}
                min={MIN}
                unit={UNIT}
                max={MAX}
                step={STEP}
                fractionDigits={FRACTION_DIGITS}
                valueTextStyle={styles.valueTextStyle}
                unitTextStyle={styles.valueTextStyle}
                onValueChangeEnd={onChange}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default TargetWeight;
