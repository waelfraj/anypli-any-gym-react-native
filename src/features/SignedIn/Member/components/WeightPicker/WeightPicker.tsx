import React from 'react';
import { View } from 'react-native';
import { RulerPicker } from 'react-native-ruler-picker';
import styles from './weightPickerStyles';
import { WINDOW_WIDTH } from '../../../../../utils/constants/layout';
import { Controller } from 'react-hook-form';
import { strings } from '../../../../../locales/i18n';

export default function WeightPicker({ control }: any) {
  const WIDTH = WINDOW_WIDTH / 1.5;
  const MIN = 20;
  const MAX = 200;
  const STEP = 1;
  const FRACTIION_DIGITS = 0;
  const NAME = 'weight';

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name={NAME}
        render={({ field: { onChange } }) => {
          return (
            <RulerPicker
              width={WIDTH}
              min={MIN}
              unit={strings('labels.unit')}
              max={MAX}
              step={STEP}
              fractionDigits={FRACTIION_DIGITS}
              valueTextStyle={styles.text}
              unitTextStyle={styles.text}
              onValueChangeEnd={onChange}
            />
          );
        }}
      />
    </View>
  );
}
