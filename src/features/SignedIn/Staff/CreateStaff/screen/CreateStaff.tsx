import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import CustomTextInput from '../../../../../components/TextInput/CustomTextInput';
import { strings } from '../../../../../locales/i18n';
import CustomButton from '../../../../../components/Button/CustomButton';
import { Controller } from 'react-hook-form';
import {
  ADDRESS_FIELD_NAME,
  EMAIL_FIELD_NAME,
  PASSWORD_FIELD_NAME,
  PHONE_FIELD_NAME,
  USERNAME_FIELD_NAME
} from '../utils/constants';
import { CreateStaffProps } from '../utils/types';
import styles from './createStaffStyles';

const CreateStaff = ({
  control,
  handleSubmit,
  errors,
  onSubmit,
  isSubmitted
}: CreateStaffProps): JSX.Element => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
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
          <CustomButton
            title={strings('actions.create')}
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

export default CreateStaff;
