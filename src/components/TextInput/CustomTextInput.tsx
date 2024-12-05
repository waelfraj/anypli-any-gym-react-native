import { TextInput, TextInputProps } from 'react-native';
import React, { useState } from 'react';
import colors from '../../utils/constants/colors';
import { styles } from './customTextInputStyle';
interface CustomTextInputProps extends TextInputProps {
  error?: boolean;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  error,
  ...otherProps
}) => {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={colors['gray-500']}
      style={[
        styles.input,
        focused && styles.inputFocused,
        error && styles.inputError
      ]}
      {...otherProps}
    />
  );
};

export default CustomTextInput;
