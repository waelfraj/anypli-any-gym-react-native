import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import CustomTextInput from '../../../../../components/TextInput/CustomTextInput';
import styles from './addExerciseStyles';
import CustomButton from '../../../../../components/Button/CustomButton';
import {
  EXERCISE_CATEGORY_ITEM,
  EXERCISE_DIFFICULTY
} from '../../../../../utils/constants/exercices';
import {
  Control,
  Controller,
  FieldErrors,
  UseFormHandleSubmit
} from 'react-hook-form';
import { strings } from '../../../../../locales/i18n';
import CustomDropDownContainer from '../../../../../components/CustomDropDown/CustomDropDown.container';
/**
 * Represents AddExercise screen ui
 * @returns JSX.Element
 */
interface AddExerciseProps {
  control: Control<
    {
      title: string;
      description: string;
      image: string;
      difficulty: string;
      category: string;
      calories: string;
      sets: string;
    },
    {
      title: string;
      description: string;
      image: string;
      difficulty: string;
      category: string;
      calories: string;
      sets: string;
    }
  >;
  handleSubmit: UseFormHandleSubmit<
    {
      title: string;
      description: string;
      image: string;
      difficulty: string;
      category: string;
      calories: string;
      sets: string;
    },
    {
      title: string;
      description: string;
      image: string;
      difficulty: string;
      category: string;
      calories: string;
      sets: string;
    }
  >;
  errors: FieldErrors<{
    title: string;
    description: string;
    image: string;
    difficulty: string;
    category: string;
    calories: string;
    sets: string;
  }>;
  onSubmit: (formData: any /* TODO: a revoir */) => Promise<void>;
  isSubmitted: boolean;
}

const AddExercise: React.FC<AddExerciseProps> = ({
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
          name={'image'}
          render={({ field: { onChange, value } }) => (
            <CustomTextInput
              placeholder={strings('labels.image')}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
              returnKeyType="done"
              numberOfLines={2}
              error={!!errors.image}
            />
          )}
        />
        {errors.image && (
          <Text style={styles.errorText}>{errors.image.message}</Text>
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
          name={'category'}
          render={({ field: { onChange, value } }) => (
            <CustomDropDownContainer
              placeholder={strings('labels.category')}
              selectedValue={value}
              data={EXERCISE_CATEGORY_ITEM}
              oneSelect={onChange}
            />
          )}
        />
        {errors.category && (
          <Text style={styles.errorText}>{errors.category.message}</Text>
        )}

        <Controller
          control={control}
          name={'calories'}
          render={({ field: { onChange, value } }) => (
            <CustomTextInput
              placeholder={strings('labels.calories')}
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
              autoCapitalize="none"
              returnKeyType="done"
              error={!!errors.calories}
            />
          )}
        />
        {errors.calories && (
          <Text style={styles.errorText}>{errors.calories.message}</Text>
        )}

        <Controller
          control={control}
          name={'sets'}
          render={({ field: { onChange, value } }) => (
            <CustomTextInput
              placeholder={strings('labels.sets')}
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
              autoCapitalize="none"
              returnKeyType="done"
              error={!!errors.sets}
            />
          )}
        />
        {errors.sets && (
          <Text style={styles.errorText}>{errors.sets.message}</Text>
        )}

        <Controller
          control={control}
          name={'description'}
          render={({ field: { onChange, value } }) => (
            <CustomTextInput
              placeholder={strings('labels.instructions')}
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

export default AddExercise;
