import React, { useState } from 'react';

import { type NativeStackScreenProps } from '@react-navigation/native-stack';

import CompleteProfil from './CompleteProfil';
import { MemberStackParamList } from '../../../../navigations/Member/MemberStackParamList';
import {
  COMPLETE_PROFIL_SCREEN_NAME,
  PROFILE_MEMBER_STACK_SCREEN_NAME
} from '../../../../utils/constants/screenName';
import { z } from 'zod';
import { strings } from '../../../../locales/i18n';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useCompleteProfileMutation } from '../../../../store/api/completeProfileApi';
import Loading from '../../../../components/Loading/Loading';
import { usePopupActions } from '../../../../hooks/usePopupActions';
import Age from './components/Age/Age';
import TargetWeight from './components/TargetWeight/TargetWeight';
import Goal from './components/Goal/Goal';
import Height from './components/Height/Height';
import PhysicalActivityLevel from './components/PhysicalActivityLevel/PhysicalActivityLevel';

/**
 * Container used to separate CompleteProfil logic as a wrapper to CompleteProfil screen
 * @returns JSX.Element
 */
interface CompleteProfilContainerProps
  extends NativeStackScreenProps<
    MemberStackParamList,
    typeof COMPLETE_PROFIL_SCREEN_NAME
  > {}

const CompleteProfilContainer: React.FC<CompleteProfilContainerProps> = ({
  navigation
}): JSX.Element => {
  const [completeProfile] = useCompleteProfileMutation();
  const [isLoading, setIsLoading] = useState(false);
  const { showUpdatedSuccess, showInternalServerError } = usePopupActions();
  const [currentStep, setCurrentStep] = useState(0);
  interface Step {
    label: string;
    component: React.ReactNode;
  }

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const CompleteProfilSchema = z.object({
    age: z
      .string({ required_error: strings('errors.required_error') })
      .optional(),
    targetWeight: z
      .string({ required_error: strings('errors.required_error') })
      .optional(),
    height: z
      .string({ required_error: strings('errors.required_error') })
      .optional(),
    objective: z
      .string({ required_error: strings('errors.required_error') })
      .optional(),
    physicalActivityLevel: z
      .string({ required_error: strings('errors.required_error') })
      .optional()
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<z.infer<typeof CompleteProfilSchema>>({
    resolver: zodResolver(CompleteProfilSchema)
  });

  const steps: Step[] = [
    { label: 'Age', component: <Age control={control} /> },
    { label: 'Target Weight', component: <TargetWeight control={control} /> },
    { label: 'Height', component: <Height control={control} /> },
    { label: 'Goal', component: <Goal control={control} /> },
    {
      label: 'Physical Activity Level',
      component: <PhysicalActivityLevel control={control} />
    }
  ];
  const onSubmit = async (formData: {
    age?: string | undefined;
    targetWeight?: string | undefined;
    height?: string | undefined;
    objective?: string | undefined;
    physicalActivityLevel?: string | undefined;
  }) => {
    setIsLoading(true);
    try {
      const response = await completeProfile(formData);
      if ('data' in response) {
        showUpdatedSuccess();
        navigation.push(PROFILE_MEMBER_STACK_SCREEN_NAME);
      } else if ('error' in response) {
        showInternalServerError();
      }
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <Loading isLoading={isLoading} />
  ) : (
    <CompleteProfil
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      steps={steps}
      currentStep={currentStep}
      handlePrev={handlePrev}
      handleNext={handleNext}
    />
  );
};

export default CompleteProfilContainer;
