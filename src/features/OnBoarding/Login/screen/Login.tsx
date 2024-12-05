import React from 'react';
import { ScrollView, SafeAreaView, View, Image, Text } from 'react-native';
import CustomTextInput from '../../../../components/TextInput/CustomTextInput';
import { styles } from './LoginStyles';
import images from '../../../../config/images';
import { strings } from '../../../../locales/i18n';
import { LoginScreenProps } from '../utils/types';
import { Controller } from 'react-hook-form';
import CustomButton from '../../../../components/Button/CustomButton';
import { EMAIL_FIELD_NAME, PASSWORD_FIELD_NAME } from '../utils/constants';

const Login = ({
  goToRegister,
  goToForgetPassword,
  control,
  handleSubmit,
  errors,
  onSubmit,
  isSubmitted
}: LoginScreenProps) => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.centerAlign}>
            <Image
              source={images.logo}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.welcomeText}>
              {/* TODO: a revoir */}
              {strings('login.loginTitle')}
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
            <Controller
              control={control}
              name={PASSWORD_FIELD_NAME}
              render={({ field: { onChange, value } }) => (
                <CustomTextInput
                  placeholder={strings('labels.password')}
                  onChangeText={onChange}
                  value={value}
                  autoCapitalize="none"
                  secureTextEntry={true}
                  returnKeyType="done"
                  error={!!errors.password}
                />
              )}
            />
            {errors.password && (
              <Text style={styles.errorText}>{errors.password.message}</Text>
            )}
          </View>
          <View>
            <View>
              <CustomButton
                title={strings('labels.forgetPassword')}
                textStyle={styles.forgotPasswordText}
                handlePress={goToForgetPassword}
              />
            </View>
            <CustomButton
              title={strings('actions.login')}
              ButtonProps={styles.signInButton}
              textStyle={styles.signInButtonText}
              handlePress={handleSubmit(onSubmit)}
              isSubmitted={isSubmitted}
            />
            <CustomButton
              title={strings('labels.createCompte')}
              ButtonProps={styles.createAccountButton}
              handlePress={goToRegister}
              textStyle={styles.createAccountButtonText}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;
