import { RouteProp } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useAppDispatch } from '../../../../../../hooks/hooks';
import { usePopupActions } from '../../../../../../hooks/usePopupActions';
import { RootStackParamList } from '../../../../../../navigations/RootStackParamList';
import {
  useLazyGetMemberByIdQuery,
  useValidateMemberMutation
} from '../../../../../../store/api/memberApi';
import { validateMember } from '../../../../../../store/slices/memberSlice';
import { formatMemberData } from '../utils/utils';
import MemberDetails from './MemberDetails';

type MemberDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'MemberDetailsStaff'
>;

interface MemberDetailsContainerProps {
  route: MemberDetailsScreenRouteProp;
}

const MemberDetailsContainer: React.FC<MemberDetailsContainerProps> = ({
  route
}) => {
  const { id } = route.params;
  const { showActivateSuccess, showLoadingError, showDesactivatedSuccess } =
    usePopupActions();
  const [validate] = useValidateMemberMutation();
  const [trigger, { data: member, error, isLoading }] =
    useLazyGetMemberByIdQuery();

  useEffect(() => {
    trigger(id ?? '');
  }, []);

  const dispatch = useAppDispatch();
  const handleSubmit = async () => {
    try {
      const response = await validate(id ?? '');
      if ('data' in response) {
        if (member?.user.verified == false) {
          showActivateSuccess();
        } else {
          showDesactivatedSuccess();
        }
        dispatch(
          validateMember({
            id: id ?? '',
            verified: !!member?.user.verified
          })
        );
        trigger(id ?? '');
      }
    } catch (error) {
      showLoadingError();
    }
  };

  const data = formatMemberData(member);

  return (
    <MemberDetails
      onPress={handleSubmit}
      member={member}
      data={data}
      isLoading={isLoading}
    />
  );
};

export default MemberDetailsContainer;
