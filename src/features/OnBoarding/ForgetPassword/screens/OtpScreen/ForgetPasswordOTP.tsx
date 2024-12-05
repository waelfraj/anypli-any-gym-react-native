import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { styles } from './forgetPasswordOTPStyles';
import images from '../../../../../config/images';
import { strings } from '../../../../../locales/i18n';
import CustomButton from '../../../../../components/Button/CustomButton';
import OtpInputs from 'react-native-otp-inputs';
import { ForgetPasswordOTPScreenProps } from '../../utils/types';
import { Controller } from 'react-hook-form';
import { OTP_FIELD_NAME, LENGTH_OTP } from '../../utils/constants';

const ForgetPasswordOTP = ({
  control,
  handleSubmit,
  errors,
  onSubmit,
  isSubmitted
}: ForgetPasswordOTPScreenProps) => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={[styles.centerAlign]}>
            <Image
              source={images.forgetPasswordImageOTP}
              style={styles.forgetPasswordImage}
              resizeMode="contain"
            />
            <Text style={styles.OtpTitle}>
              {strings('forgetPassword.OtpTitle')}
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
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ForgetPasswordOTP;
