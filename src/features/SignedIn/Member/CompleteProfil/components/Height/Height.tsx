import React from 'react';
import { View, Text } from 'react-native';
import { RulerPicker } from 'react-native-ruler-picker';
import {
  WINDOW_WIDTH,
  WINDOW_HEIGHT
} from '../../../../../../utils/constants/layout';
import styles from './heightStyles';
import { Controller } from 'react-hook-form';
import { strings } from '../../../../../../locales/i18n';
interface HeightProps {
  control: any;
}

const Height: React.FC<HeightProps> = ({ control }) => {
  const WIDTH = WINDOW_WIDTH / 1.5;
  const HEIGHT = WINDOW_HEIGHT / 5;
  const MIN = 140;
  const MAX = 230;
  const STEP = 1;
  const FRACTION_DIGITS = 0;
  const UNIT = 'Cm';
  const NAME = 'height';
  const INITIAL_VALUE = 170;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{strings('completeProfile.height')}</Text>
      <View style={styles.topSpacing}>
        <Controller
          control={control}
          name={NAME}
          render={({ field: { onChange, value = 170 } }) => {
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
export default Height;
