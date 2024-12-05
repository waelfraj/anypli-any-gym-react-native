import React, { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './customTimePickerStyles';

interface CustomTimePickerProps {
  title: string;
  handleTimeChange: (time: { hour: number; minute: number }) => void;
}

const CustomTimePicker: React.FC<CustomTimePickerProps> = ({
  title,
  handleTimeChange
}) => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);

  useEffect(() => {
    handleTimeChange({ hour, minute });
  }, [hour, minute]);

  const handleHourChange = (text: string) => {
    let num = parseInt(text, 10);
    if (!isNaN(num) && num >= 0 && num < 24) {
      setHour(num);
    } else if (text === '') {
      setHour(0);
    }
  };

  const handleMinuteChange = (text: string) => {
    let num = parseInt(text, 10);
    if (!isNaN(num) && num >= 0 && num < 60) {
      setMinute(num);
    } else if (text === '') {
      setMinute(0);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.timePicker}>
        <Text>{title}</Text>
        <View style={styles.timeInputs}>
          <View style={styles.timeInputWrapper}>
            <TextInput
              style={styles.timeInput}
              placeholder="00"
              onChangeText={handleHourChange}
              value={hour === 0 ? '' : hour.toString()}
              keyboardType="numeric"
              maxLength={2}
            />
          </View>
          <Text style={styles.timeSeparator}>:</Text>
          <View style={styles.timeInputWrapper}>
            <TextInput
              style={styles.timeInput}
              placeholder="00"
              onChangeText={handleMinuteChange}
              value={minute === 0 ? '' : minute.toString()}
              keyboardType="numeric"
              maxLength={2}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CustomTimePicker;
