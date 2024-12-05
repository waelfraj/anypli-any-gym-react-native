import { RouteProp } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useAppDispatch } from '../../../../../../hooks/hooks';
import { usePopupActions } from '../../../../../../hooks/usePopupActions';
import { RootStackParamList } from '../../../../../../navigations/RootStackParamList';
import {
  useLazyGetStaffByIdQuery,
  useValidateStaffMutation
} from '../../../../../../store/api/staffApi';
import { validateStaff } from '../../../../../../store/slices/staffSlice';
import { formatStaffData } from '../utils/utils';
import StaffDetails from './StaffDetails';

type StaffDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'StaffDetails'
>;

interface StaffDetailsContainerProps {
  route: StaffDetailsScreenRouteProp;
}

const StaffDetailsContainer: React.FC<StaffDetailsContainerProps> = ({
  route
}) => {
  const { id } = route.params;
  const { showActivateSuccess, showLoadingError } = usePopupActions();
  const [validate] = useValidateStaffMutation();
  const [trigger, { data: staff, error, isLoading }] =
    useLazyGetStaffByIdQuery();

  const dispatch = useAppDispatch();

  useEffect(() => {
    trigger(id ?? '');
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await validate(id ?? '');
      if ('data' in response) {
        showActivateSuccess();
        dispatch(
          validateStaff({
            id: id ?? '',
            verified: !!staff?.user.verified
          })
        );
        trigger(id ?? '');
      }
    } catch (error) {
      showLoadingError();
    }
  };
  const data = formatStaffData(staff);

  return (
    <StaffDetails
      onPress={handleSubmit}
      staff={staff}
      data={data}
      isLoading={isLoading}
    />
  );
};

export default StaffDetailsContainer;
