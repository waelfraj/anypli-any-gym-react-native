import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native';
import React from 'react';
import OtpInputs from 'react-native-otp-inputs';
import { Controller } from 'react-hook-form';
import { OTP_FIELD_NAME, LENGTH_OTP } from '../utils/constants';
import { strings } from '../../../../locales/i18n';
import CustomButton from '../../../../components/Button/CustomButton';
import { styles } from './mailValidationStyles';
import images from '../../../../config/images';
import { MailValidationScreenProps } from '../utils/types';

const MailValidation = ({
  control,
  handleSubmit,
  errors,
  onSubmit,
  isSubmitted,
  handleForward,
  handleLogin
}: MailValidationScreenProps) => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={[styles.centerAlign]}>
            <Image
              source={images.MailValidationImage}
              style={styles.mailValidationImage}
              resizeMode="contain"
            />
            <Text style={styles.OtpTitle}>
              {strings('mailValidation.otpTitle')}
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Controller
                control={control}
                name={OTP_FIELD_NAME}
                render={({ field: { onChange, value } }) => (
                  <OtpInputs
                    inputStyles={styles.input}
                    focusStyles={styles.inputFocused}
                    handleChange={onChange}
                    numberOfInputs={LENGTH_OTP}
                    autofillFromClipboard={true}
                  />
                )}
              />
              {errors.otp && (
                <Text style={styles.errorText}>{errors.otp.message}</Text>
              )}
            </View>
          </View>
          <CustomButton
            title={strings('actions.send')}
            ButtonProps={styles.sendButton}
            textStyle={styles.sendButtonText}
            handlePress={handleSubmit(onSubmit)}
            isSubmitted={isSubmitted}
          />
          <CustomButton
            title={strings('actions.ForwardMail')}
            ButtonProps={styles.forwardButton}
            textStyle={styles.forwardButtonText}
            handlePress={handleForward}
          />
          <CustomButton
            title={strings('actions.login')}
            ButtonProps={styles.loginButton}
            textStyle={styles.loginButtonText}
            handlePress={handleLogin}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default MailValidation;
