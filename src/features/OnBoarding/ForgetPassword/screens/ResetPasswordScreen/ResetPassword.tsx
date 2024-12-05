import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { styles } from './resetPasswordStyles';
import images from '../../../../../config/images';
import { strings } from '../../../../../locales/i18n';
import CustomTextInput from '../../../../../components/TextInput/CustomTextInput';
import CustomButton from '../../../../../components/Button/CustomButton';
import { ResetPasswordScreenProps } from '../../utils/types';
import {
  CONFIRM_PASSWORD_FIELD_NAME,
  PASSWORD_FIELD_NAME
} from '../../../Register/utils/constants';
import { Controller } from 'react-hook-form';

const ResetPassword = ({
  control,
  handleSubmit,
  errors,
  onSubmit,
  isSubmitted
}: ResetPasswordScreenProps) => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={[styles.centerAlign]}>
            <Image
              source={images.ResetPasswordImage}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.resetPasswordTitle}>
              {strings('forgetPassword.resetPasswordTitle')}
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Controller
              control={control}
              name={PASSWORD_FIELD_NAME}
              render={({ field: { onChange, value } }) => (
                <CustomTextInput
                  placeholder={strings('labels.password')}
                  onChangeText={onChange}
                  value={value}
                  autoCapitalize="none"
                  returnKeyType="next"
                  error={!!errors.password}
                  secureTextEntry={true}
                />
              )}
            />
            {errors.password && (
              <Text style={styles.errorText}>{errors.password.message}</Text>
            )}
            <Controller
              control={control}
              name={CONFIRM_PASSWORD_FIELD_NAME}
              render={({ field: { onChange, value } }) => (
                <CustomTextInput
                  placeholder={strings('labels.confirmPassword')}
                  onChangeText={onChange}
                  value={value}
                  autoCapitalize="none"
                  returnKeyType="next"
                  error={!!errors.confirmPassword}
                  secureTextEntry={true}
                />
              )}
            />
            {errors.confirmPassword && (
              <Text style={styles.errorText}>
                {errors.confirmPassword.message}
              </Text>
            )}
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

export default ResetPassword;
