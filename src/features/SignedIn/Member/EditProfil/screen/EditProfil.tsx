import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Controller } from 'react-hook-form';
import styles from './editProfilStyles';

import CustomTextInput from '../../../../../components/TextInput/CustomTextInput';
import { strings } from '../../../../../locales/i18n';
import CustomButton from '../../../../../components/Button/CustomButton';
import { CreateStaffProps } from '../../../Staff/CreateStaff/utils/types';
import {
  ADDRESS_FIELD_NAME,
  EMAIL_FIELD_NAME,
  PASSWORD_FIELD_NAME,
  PHONE_FIELD_NAME,
  USERNAME_FIELD_NAME
} from '../utils/constants';
const EditProfil = ({
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
          <Text>{strings('labels.username')}</Text>
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
          <Text>{strings('labels.phone')}</Text>
          <Controller
            control={control}
            name={PHONE_FIELD_NAME}
            render={({ field: { onChange, value } }) => (
              <CustomTextInput
                placeholder={strings('labels.phone')}
                onChangeText={onChange}
                value={value}
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
          <Text>{strings('labels.address')}</Text>
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

          <Text>{strings('labels.email')}</Text>
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

          <Text>{strings('labels.password')}</Text>
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
            title={strings('actions.edit')}
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

export default EditProfil;
