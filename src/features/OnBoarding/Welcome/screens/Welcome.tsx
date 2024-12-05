import { ImageBackground, SafeAreaView, Text, View } from 'react-native';
import React from 'react';
import { styles } from './welcomeStyles';
import CustomButton from '../../../../components/Button/CustomButton';
import images from '../../../../config/images';
import { strings } from '../../../../locales/i18n';
import { WelcomeScreenProps } from '../utils/types';

const WelcomeScreen = ({ goToLogin, goToRegister }: WelcomeScreenProps) => {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          style={styles.backgroundImage}
          resizeMode="contain"
          source={images.welcomeImage}
        />
        <View style={styles.container}>
          <Text style={styles.title}>{strings('welcome.title')}</Text>
          <Text style={styles.paragraph}>{strings('welcome.paragraph')}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title={strings('actions.login')}
            ButtonProps={styles.loginButton}
            textStyle={styles.loginText}
            handlePress={goToLogin}
          />
          <CustomButton
            title={strings('actions.register')}
            ButtonProps={styles.registerButton}
            textStyle={styles.regiterText}
            handlePress={goToRegister}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
