import React from 'react';
import { View, Text } from 'react-native';
import { MARGING_SPACING } from '../../../../../../utils/constants/spacing';
import { RulerPicker } from 'react-native-ruler-picker';
import {
  WINDOW_HEIGHT,
  WINDOW_WIDTH
} from '../../../../../../utils/constants/layout';
import styles from './ageStyles';
import { Controller } from 'react-hook-form';
import { strings } from '../../../../../../locales/i18n';

interface AgeProps {
  control: any;
}

const Age: React.FC<AgeProps> = ({ control }) => {
  const WIDTH = WINDOW_WIDTH / 1.5;
  const HEIGHT = WINDOW_HEIGHT / 5;
  const MIN = 10;
  const MAX = 100;
  const STEP = 1;
  const FRACTION_DIGITS = 0;
  const UNIT = '';
  const INITIAL_VALUE = 25;
  const NAME = 'age';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{strings('completeProfile.age')}</Text>
      <View style={{ marginTop: MARGING_SPACING }}>
        <Controller
          control={control}
          name={NAME}
          render={({ field: { onChange, value = 25 } }) => {
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

export default Age;
