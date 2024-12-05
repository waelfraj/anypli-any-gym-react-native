import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { styles } from './forgetPasswordEmailStyles';
import images from '../../../../../config/images';
import { strings } from '../../../../../locales/i18n';
import CustomTextInput from '../../../../../components/TextInput/CustomTextInput';
import CustomButton from '../../../../../components/Button/CustomButton';
import { ForgetPasswordEmailScreenProps } from '../../utils/types';
import { Controller } from 'react-hook-form';
import { EMAIL_FIELD_NAME } from '../../../Register/utils/constants';

const ForgetPasswordEmail = ({
  goToRegister,
  control,
  handleSubmit,
  errors,
  onSubmit,
  isSubmitted
}: ForgetPasswordEmailScreenProps) => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={[styles.centerAlign]}>
            <Image
              source={images.forgetPasswordImage}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.forgetPasswordTitle}>
              {strings('forgetPassword.forgetPasswordTitle')}
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Controller
              control={control}
              name={EMAIL_FIELD_NAME}
              render={({ field: { onChange, value } }) => (
                <CustomTextInput
                  placeholder={strings('labels.email')}
                  onChangeText={onChange}
                  value={value}
                  autoCapitalize="none"
                  returnKeyType="next"
                  error={!!errors.email}
                />
              )}
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email.message}</Text>
            )}
          </View>
          <CustomButton
            title={strings('actions.send')}
            ButtonProps={styles.sendButton}
            textStyle={styles.sendButtonText}
            handlePress={handleSubmit(onSubmit)}
            isSubmitted={isSubmitted}
          />
          <CustomButton
            ButtonProps={styles.createAccountButton}
            handlePress={goToRegister}
            textStyle={styles.createAccountButtonText}
            title={strings('labels.createCompte')}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ForgetPasswordEmail;
