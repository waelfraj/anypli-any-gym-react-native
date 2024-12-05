import React from 'react';
import CoachDetails from './CoachDetails';
import { RouteProp } from '@react-navigation/native';
import { usePopupActions } from '../../../../../../hooks/usePopupActions';
import {
  useGetCoachByIdQuery,
  useValidateCoachMutation
} from '../../../../../../store/api/coachApi';
import { formatCoachData } from '../utils/utils';
import { validateCoach } from '../../../../../../store/slices/coachSlice';
import { RootStackParamList } from '../../../../../../navigations/RootStackParamList';
import { useAppDispatch } from '../../../../../../hooks/hooks';

type CoachDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'CoachDetails'
>;

interface CoachDetailsContainerProps {
  route: CoachDetailsScreenRouteProp;
}

const CoachDetailsContainer: React.FC<CoachDetailsContainerProps> = ({
  route
}) => {
  const { id } = route.params;
  const { showActivateSuccess, showLoadingError } = usePopupActions();
  const [validate] = useValidateCoachMutation();
  const {
    data: coach,
    error,
    isLoading,
    refetch
  } = useGetCoachByIdQuery(id ?? '');
  const dispatch = useAppDispatch();

  const handleSubmit = async () => {
    try {
      const response = await validate(id ?? '');
      if ('data' in response) {
        showActivateSuccess();
        dispatch(
          validateCoach({
            id: id ?? '',
            verified: !coach?.user.verified ?? false
          })
        );
        refetch();
      }
    } catch (error) {
      showLoadingError();
    }
  };
  const data = formatCoachData(coach);

  return (
    <CoachDetails
      onPress={handleSubmit}
      coach={coach}
      data={data}
      isLoading={isLoading}
    />
  );
};

export default CoachDetailsContainer;
