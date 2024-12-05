import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import React from 'react';
import CustomTextInput from '../../../../components/TextInput/CustomTextInput';
import images from '../../../../config/images';
import { styles } from './registerStyles';
import { strings } from '../../../../locales/i18n';
import { RegisterScreenProps } from '../utils/types';
import RadioBox from '../../../../components/RadioBox/RadioBox';
import {
  ADDRESS_FIELD_NAME,
  CONFIRM_PASSWORD_FIELD_NAME,
  EMAIL_FIELD_NAME,
  GENDER_FIELD_NAME,
  GenderProp,
  PASSWORD_FIELD_NAME,
  PHONE_FIELD_NAME,
  ROLE_FIELD_NAME,
  RoleProp,
  USERNAME_FIELD_NAME
} from '../utils/constants';
import CustomButton from '../../../../components/Button/CustomButton';
import { Controller } from 'react-hook-form';

const Register = ({
  goToLogin,
  control,
  handleSubmit,
  errors,
  onSubmit,
  isSubmitted
}: RegisterScreenProps) => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={[styles.centerAlign]}>
            <Image
              source={images.logo}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.descriptionText}>
              {strings('register.registerTitle')}
            </Text>
          </View>
          <View style={styles.grid}>
            <View style={styles.inputContainer}>
              <Controller
                control={control}
                name={USERNAME_FIELD_NAME}
                render={({ field: { onChange, value } }) => (
                  <CustomTextInput
                    placeholder={strings('labels.username')}
                    onChangeText={onChange}
                    value={value}
                    autoCapitalize="none"
                    returnKeyType="done"
                    error={!!errors.username}
                  />
                )}
              />
              {errors.username && (
                <Text style={styles.errorText}>{errors.username.message}</Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <Controller
                control={control}
                name={PHONE_FIELD_NAME}
                render={({ field: { onChange, value } }) => (
                  <CustomTextInput
                    placeholder={strings('labels.phone')}
                    onChangeText={onChange}
                    value={value} // CHnage to numeric value
                    keyboardType="numeric"
                    autoCapitalize="none"
                    returnKeyType="done"
                    error={!!errors.phone}
                  />
                )}
              />
              {errors.phone && (
                <Text style={styles.errorText}>{errors.phone.message}</Text>
              )}
            </View>
          </View>
          <Controller
            control={control}
            name={ADDRESS_FIELD_NAME}
            render={({ field: { onChange, value } }) => (
              <CustomTextInput
                placeholder={strings('labels.address')}
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
                returnKeyType="done"
                error={!!errors.address}
              />
            )}
          />
          {errors.address && (
            <Text style={styles.errorText}>{errors.address.message}</Text>
          )}
          <Controller
            control={control}
            name={EMAIL_FIELD_NAME}
            render={({ field: { onChange, value } }) => (
              <CustomTextInput
                placeholder={strings('labels.email')}
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
                returnKeyType="done"
                error={!!errors.email}
              />
            )}
          />
          {errors.email && (
            <Text style={styles.errorText}>{errors.email.message}</Text>
          )}
          <Controller
            control={control}
            name={PASSWORD_FIELD_NAME}
            render={({ field: { onChange, value } }) => (
              <CustomTextInput
                placeholder={strings('labels.password')}
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
                returnKeyType="done"
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
                returnKeyType="done"
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
          <View style={styles.grid}>
            <View>
              <Text style={styles.titleRadioBox}>{strings('labels.role')}</Text>
              <Controller
                control={control}
                name={ROLE_FIELD_NAME}
                render={({ field: { onChange, value } }) => (
                  <RadioBox
                    items={RoleProp}
                    onChange={onChange}
                    selectedKey={value}
                  />
                )}
              />
              {errors.role && (
                <Text style={[styles.errorText, styles.spacingFooter]}>
                  {errors.role.message}
                </Text>
              )}
            </View>
            <View>
              <Text style={styles.titleRadioBox}>
                {strings('labels.gender')}
              </Text>
              <Controller
                control={control}
                name={GENDER_FIELD_NAME}
                render={({ field: { onChange, value } }) => (
                  <RadioBox
                    items={GenderProp}
                    onChange={onChange}
                    selectedKey={value}
                  />
                )}
              />
              {errors.gender && (
                <Text style={[styles.errorText, styles.spacingFooter]}>
                  {errors.gender.message}
                </Text>
              )}
            </View>
          </View>
          <CustomButton
            title={strings('actions.register')}
            ButtonProps={styles.button}
            textStyle={styles.buttonText}
            handlePress={handleSubmit(onSubmit)}
            isSubmitted={isSubmitted}
          />
          <CustomButton
            title={strings('labels.alreadyRegistered')}
            textStyle={styles.loginText}
            handlePress={goToLogin}
            ButtonProps={styles.loginLink}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Register;
