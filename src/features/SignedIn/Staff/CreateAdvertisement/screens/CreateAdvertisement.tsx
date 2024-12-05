import React from 'react';
import { Text, ScrollView } from 'react-native';
import styles from './createAdvertisementStyles';
import { MARGING_SPACING } from '../../../../../utils/constants/spacing';
import CustomTextInput from '../../../../../components/TextInput/CustomTextInput';
import CustomButton from '../../../../../components/Button/CustomButton';
import colors from '../../../../../utils/constants/colors';
import { strings } from '../../../../../locales/i18n';
import {
  Control,
  Controller,
  FieldErrors,
  UseFormHandleSubmit
} from 'react-hook-form';
import CustomImagePickerContainer from './../../../../../components/CustomImagePicker/CustomImagePicker.container';

export type CreateAdvertisementRequest = {
  name: string;
  description: string;
  image?: any;
};

type CreateAdvertisementType = {
  control: Control<CreateAdvertisementRequest, CreateAdvertisementRequest>;
  handleSubmit: UseFormHandleSubmit<
    CreateAdvertisementRequest,
    CreateAdvertisementRequest
  >;
  errors: FieldErrors<CreateAdvertisementRequest>;
  onSubmit: (formData: CreateAdvertisementRequest) => Promise<void>;
  isSubmitted: boolean;
};

const CreateAdvertisement = ({
  control,
  handleSubmit,
  errors,
  onSubmit,
  isSubmitted
}: CreateAdvertisementType) => {
  return (
    <ScrollView style={{ flex: 1, margin: MARGING_SPACING }}>
      <Controller
        control={control}
        name={'image'}
        render={({ field: { onChange, value } }) => (
          <CustomImagePickerContainer
            imageStyle={styles.image}
            onChange={onChange}
          />
        )}
      />
      {errors.image && typeof errors.image === 'string' && (
        <Text style={styles.errorText}>{errors.image}</Text>
      )}
      <Text>{strings('labels.title')}</Text>
      <Controller
        control={control}
        name={'name'}
        render={({ field: { onChange, value } }) => (
          <CustomTextInput
            placeholder={strings('labels.title')}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            returnKeyType="next"
            error={!!errors.name}
          />
        )}
      />
      {errors.name && (
        <Text style={styles.errorText}>{errors.name.message}</Text>
      )}
      <Text>{strings('labels.description')}</Text>
      <Controller
        control={control}
        name={'description'}
        render={({ field: { onChange, value } }) => (
          <CustomTextInput
            placeholder={strings('labels.description')}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            returnKeyType="next"
            error={!!errors.description}
          />
        )}
      />
      {errors.description && (
        <Text style={styles.errorText}>{errors.description.message}</Text>
      )}
      <CustomButton
        title={strings('actions.send')}
        handlePress={handleSubmit(onSubmit)}
        isSubmitted={isSubmitted}
        textStyle={{ color: colors.snowWhite }}
        ButtonProps={{ backgroundColor: colors['teal-400'] }}
      />
    </ScrollView>
  );
};

export default CreateAdvertisement;
