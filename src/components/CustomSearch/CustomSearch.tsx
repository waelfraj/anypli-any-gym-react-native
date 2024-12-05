import React, { useEffect, useState } from 'react';
import CustomTextInput from '../TextInput/CustomTextInput';
import { strings } from '../../locales/i18n';
import styles from './customSearchStyles';
interface CustomSearchProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const CustomSearch: React.FC<CustomSearchProps> = ({ setValue }) => {
  const [input, setInput] = useState('');
  const handleOnChangeText = (text: string) => {
    setInput(text);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (input.length !== 0) {
        setValue(input);
      } else if (input.length === 0) {
        setValue('');
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [input]);

  return (
    <CustomTextInput
      autoCapitalize="none"
      style={styles.textInput}
      placeholder={strings('actions.search')}
      onChangeText={handleOnChangeText}
    />
  );
};

export default CustomSearch;
