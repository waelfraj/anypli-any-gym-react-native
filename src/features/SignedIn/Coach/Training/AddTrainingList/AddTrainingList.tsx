import React from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  UseFormHandleSubmit
} from 'react-hook-form';
import { ScrollView, Text, View } from 'react-native';
import CustomButton from '../../../../../components/Button/CustomButton';
import { strings } from '../../../../../locales/i18n';
import CustomTextInput from '../../../../../components/TextInput/CustomTextInput';
import { EXERCISE_DIFFICULTY } from '../../../../../utils/constants/exercices';
import styles from './addTrainingListStyles';
import CustomDropDownContainer from '../../../../../components/CustomDropDown/CustomDropDown.container';
import CustomImagePickerContainer from '../../../../../components/CustomImagePicker/CustomImagePicker.container';
/**
 * Represents AddTrainingList screen ui
 * @returns JSX.Element
 */
interface AddTrainingListProps {
  control: Control<
    {
      title: string;
      description: string;
      difficulty: string;
      image?: any;
    },
    {
      title: string;
      description: string;
      difficulty: string;
      image?: any;
    }
  >;
  handleSubmit: UseFormHandleSubmit<
    {
      title: string;
      description: string;
      difficulty: string;
      image?: any;
    },
    {
      title: string;
      description: string;
      difficulty: string;
      image?: any;
    }
  >;
  errors: FieldErrors<{
    title: string;
    description: string;
    difficulty: string;
    image?: any;
  }>;
  onSubmit: (formData: any /* TODO: a revoir */) => Promise<void>;
  isSubmitted: boolean;
}

const AddTrainingList: React.FC<AddTrainingListProps> = ({
  control,
  handleSubmit,
  errors,
  onSubmit,
  isSubmitted
}): JSX.Element => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Controller
          control={control}
          name={'title'}
          render={({ field: { onChange, value } }) => (
            <CustomTextInput
              placeholder={strings('labels.title')}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
              returnKeyType="done"
              error={!!errors.title}
            />
          )}
        />
        {errors.title && (
          <Text style={styles.errorText}>{errors.title.message}</Text>
        )}

        <Controller
          control={control}
          name={'difficulty'}
          render={({ field: { onChange, value } }) => (
            <CustomDropDownContainer
              placeholder={strings('labels.difficulty')}
              selectedValue={value}
              data={EXERCISE_DIFFICULTY}
              oneSelect={onChange}
            />
          )}
        />
        {errors.difficulty && (
          <Text style={styles.errorText}>{errors.difficulty.message}</Text>
        )}

        <Controller
          control={control}
          name={'description'}
          render={({ field: { onChange, value } }) => (
            <CustomTextInput
              placeholder={strings('labels.description')}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
              returnKeyType="done"
              numberOfLines={4}
              error={!!errors.description}
            />
          )}
        />
        {errors.description && (
          <Text style={styles.errorText}>{errors.description.message}</Text>
        )}

        <View style={styles.imageContainer}>
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
        </View>

        <CustomButton
          title={strings('actions.add')}
          ButtonProps={styles.button}
          textStyle={styles.buttonText}
          handlePress={handleSubmit(onSubmit)}
          isSubmitted={isSubmitted}
        />
      </View>
    </ScrollView>
  );
};
export default AddTrainingList;
