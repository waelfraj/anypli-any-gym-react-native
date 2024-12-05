import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { rolesName } from '../../../../../../enums/roles';
import { useAppDispatch, useAppSelector } from '../../../../../../hooks/hooks';
import { usePopupActions } from '../../../../../../hooks/usePopupActions';
import { Member } from '../../../../../../models/Member';
import { RootStackParamList } from '../../../../../../navigations/RootStackParamList';
import {
  useDeleteMemberMutation,
  useLazyGetAllMemberQuery
} from '../../../../../../store/api/memberApi';
import { decrementNbrUser } from '../../../../../../store/slices/homeStaffSlice';
import {
  addMember,
  removeMember
} from '../../../../../../store/slices/memberSlice';
import { UNAUTHENTICATED_STATUS } from '../../../../../../utils/constants/errors';
import { MEMBER_DETAILS_STAFF_SCREEN_NAME } from '../../../../../../utils/constants/screenName';
import {
  PERSON_ICON,
  PERSON_ICON_OUTLINE
} from '../../../WelcomeStaff/utils/constants';
import { LIST_MEMBERS_STAFF_SCREEN_NAME } from './../../../../../../utils/constants/screenName';
import ListMember from './ListMember';

export type ListMemberContainerProps = NativeStackScreenProps<
  RootStackParamList,
  typeof LIST_MEMBERS_STAFF_SCREEN_NAME
>;

const ListMemberContainer: React.FC<ListMemberContainerProps> = ({
  navigation
}): JSX.Element => {
  const [trigger, { data, error, isLoading }] = useLazyGetAllMemberQuery();
  const [deleteMember] = useDeleteMemberMutation();
  const {
    showInternalServerError,
    showDeletedSuccessfully,
    showLoadingError,
    showDeleteConfirmationPopup,
    showUnauthenticatedError
  } = usePopupActions();
  const [searchValue, setSearchValue] = useState<string>('');
  const dispatch = useAppDispatch();
  const members = useAppSelector((state) => state.member.members);
  const totalPages = useAppSelector((state) => state.member.totalPages);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    trigger({ currentPage });
  }, [currentPage]);

  useEffect(() => {
    if (data) {
      if ('members' in data) {
        dispatch(
          addMember({ members: data.members, totalPages: data.totalPages })
        );
      }
    }
  }, [data]);

  useEffect(() => {
    if (error && 'status' in error && error.status === UNAUTHENTICATED_STATUS) {
      showUnauthenticatedError();
    } else if (error) {
      showLoadingError();
    }
  }, [error]);

  const handleMemberPress = (id: string | undefined) => {
    navigation.push(MEMBER_DETAILS_STAFF_SCREEN_NAME, { id });
  };

  const handleMemberDelete = (id: string | undefined) => {
    const confirmCallback = async () => {
      if (id) {
        try {
          const response = await deleteMember(id);
          if ('data' in response && response.data == 1) {
            dispatch(removeMember(id));
            dispatch(decrementNbrUser(rolesName.MEMBERS));
            showDeletedSuccessfully();
          } else {
            showInternalServerError();
          }
        } catch (error) {
          showInternalServerError();
        }
      }
    };

    showDeleteConfirmationPopup(confirmCallback);
  };

  const filteredMembers = members?.filter((member: Member) =>
    member.user.username?.toLowerCase().includes(searchValue.toLowerCase())
  );

  const listItems = filteredMembers?.map((member: Member) => ({
    id: member.id ?? '',
    name: member.user.username ?? '',
    verified: member.user.verified || false,
    icon: member.user.verified ? PERSON_ICON : PERSON_ICON_OUTLINE,
    onPress: () => handleMemberPress(member.id ?? ''),
    onDelete: () => handleMemberDelete(member.id ?? '')
  }));

  return (
    <ListMember
      listItems={listItems || []}
      isLoading={isLoading}
      onSearchChange={setSearchValue}
      onRefresh={trigger}
      setCurrentPage={setCurrentPage}
      totalPages={totalPages}
      currentPage={currentPage}
    />
  );
};

export default ListMemberContainer;
