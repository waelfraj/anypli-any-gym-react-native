import React from 'react';
import { View } from 'react-native';
import styles from './changeLanguageStyles';
import CustomButton from '../Button/CustomButton';
import { useTranslation } from 'react-i18next';
interface ChangeLanguageProps {}

const ChangeLanguage: React.FC<ChangeLanguageProps> = ({}) => {
  const { t, i18n } = useTranslation();

  const changeCurrentLanguage = (language: 'fr' | 'en') => {
    i18n.changeLanguage(language);
  };

  return (
    <View style={styles.container}>
      <CustomButton
        title={'Français'}
        ButtonProps={i18n.language == 'fr' ? styles.active : styles.inactive}
        textStyle={
          i18n.language == 'fr' ? styles.activeText : styles.inactiveText
        }
        handlePress={() => {
          changeCurrentLanguage('fr');
        }}
      />
      <CustomButton
        title={'English'}
        ButtonProps={i18n.language == 'en' ? styles.active : styles.inactive}
        textStyle={
          i18n.language == 'en' ? styles.activeText : styles.inactiveText
        }
        handlePress={() => {
          changeCurrentLanguage('en');
        }}
      />
    </View>
  );
};

export default ChangeLanguage;
