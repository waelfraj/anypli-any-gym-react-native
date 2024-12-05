import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './completeProfilStyles';
import { UseFormHandleSubmit } from 'react-hook-form';
import CustomButton from '../../../../components/Button/CustomButton';
import { strings } from '../../../../locales/i18n';

/**
 * Represents CompleteProfil screen ui
 * @returns JSX.Element
 */

interface Step {
  label: string;
  component: React.ReactNode;
}

interface CompleteProfilProps {
  handleSubmit: UseFormHandleSubmit<
    {
      age: string | undefined;
      targetWeight: string | undefined;
      height: string | undefined;
      objective: string | undefined;
      physicalActivityLevel: string | undefined;
    },
    {
      age?: string | undefined;
      targetWeight?: string | undefined;
      height?: string | undefined;
      objective?: string | undefined;
      physicalActivityLevel?: string | undefined;
    }
  >;

  onSubmit: (formData: {
    age?: string | undefined;
    targetWeight?: string | undefined;
    height?: string | undefined;
    objective?: string | undefined;
    physicalActivityLevel?: string | undefined;
  }) => Promise<void>;

  steps: Step[];
  currentStep: number;
  handlePrev: () => void;
  handleNext: () => void;
}

const CompleteProfil: React.FC<CompleteProfilProps> = ({
  handleSubmit,
  onSubmit,
  steps,
  currentStep,
  handlePrev,
  handleNext
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.componentContainer}>
        {steps.map((step, index) => (
          <View
            key={step.label}
            style={[
              styles.componentItem,
              currentStep === index && styles.activeComponentItem
            ]}>
            <Text style={styles.componentItemText}>{index + 1}</Text>
          </View>
        ))}
      </View>
      <View style={styles.card}>{steps[currentStep].component}</View>
      <View
        style={[styles.buttonContainer, currentStep == 0 && styles.flexEnd]}>
        {currentStep > 0 && (
          <CustomButton
            handlePress={handlePrev}
            ButtonProps={styles.button}
            title={strings('labels.previous')}
            textStyle={styles.buttonTextStyle}
          />
        )}
        {currentStep < steps.length - 1 && (
          <CustomButton
            handlePress={handleNext}
            ButtonProps={styles.button}
            title={strings('labels.next')}
            textStyle={styles.buttonTextStyle}
          />
        )}
        {currentStep == steps.length - 1 && (
          <CustomButton
            title={strings('actions.send')}
            ButtonProps={styles.button}
            textStyle={styles.buttonTextStyle}
            handlePress={handleSubmit(onSubmit)}
          />
        )}
      </View>
    </View>
  );
};

export default CompleteProfil;
