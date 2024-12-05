import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { rolesName } from '../../../../../../enums/roles';
import { useAppDispatch, useAppSelector } from '../../../../../../hooks/hooks';
import { usePopupActions } from '../../../../../../hooks/usePopupActions';
import { Staff } from '../../../../../../models/Staff';
import {
  useDeleteStaffMutation,
  useLazyGetAllStaffQuery
} from '../../../../../../store/api/staffApi';
import { decrementNbrUser } from '../../../../../../store/slices/homeStaffSlice';
import {
  addStaff,
  removeStaff
} from '../../../../../../store/slices/staffSlice';
import { UNAUTHENTICATED_STATUS } from '../../../../../../utils/constants/errors';
import { STAFF_DETAILS_SCREEN_NAME } from '../../../../../../utils/constants/screenName';
import {
  PERSON_ICON,
  PERSON_ICON_OUTLINE
} from '../../../WelcomeStaff/utils/constants';
import { ADMIN_ID } from '../utils/constant';
import ListStaff from './ListStaff';

const ListStaffContainer = (): JSX.Element => {
  const [trigger, { data, error, isLoading }] = useLazyGetAllStaffQuery();
  const [deleteStaff] = useDeleteStaffMutation();
  const {
    showInternalServerError,
    showDeletedSuccessfully,
    showLoadingError,
    showDeleteConfirmationPopup,
    showUnauthenticatedError,
    showImpossibleDeleteAdminPopup
  } = usePopupActions();
  const navigation = useNavigation();
  const [searchValue, setSearchValue] = useState<string>('');
  const dispatch = useAppDispatch();
  const staffs = useAppSelector((state) => state.staff.staffs);

  useEffect(() => {
    trigger();
  }, []);

  useEffect(() => {
    dispatch(addStaff(data));
  }, [data]);

  useEffect(() => {
    if (error && 'status' in error && error.status === UNAUTHENTICATED_STATUS) {
      showUnauthenticatedError();
    } else if (error) {
      showLoadingError();
    }
  }, [error]);

  const handleStaffPress = (id: string | undefined) => {
    navigation.navigate(STAFF_DETAILS_SCREEN_NAME, { id });
  };

  const handleStaffDelete = (id: string | undefined) => {
    const confirmCallback = async () => {
      if (id) {
        try {
          if (id == ADMIN_ID) {
            showImpossibleDeleteAdminPopup();
          } else {
            const response = await deleteStaff(id);
            if ('data' in response && response.data == 1) {
              dispatch(removeStaff(id));
              dispatch(decrementNbrUser(rolesName.STAFFS));
              showDeletedSuccessfully();
            } else {
              showInternalServerError();
            }
          }
        } catch (error) {
          showInternalServerError();
        }
      }
    };

    showDeleteConfirmationPopup(confirmCallback);
  };

  const filteredStaffs = staffs?.filter((staff: Staff) =>
    staff.user.username?.toLowerCase().includes(searchValue.toLowerCase())
  );

  const listItems = filteredStaffs?.map((staff: Staff) => ({
    id: staff.id ?? '',
    name: staff.user.username ?? '',
    verified: staff.user.verified || false,
    icon: staff.user.verified ? PERSON_ICON : PERSON_ICON_OUTLINE,
    onPress: () => handleStaffPress(staff.id ?? ''),
    onDelete: () => handleStaffDelete(staff.id ?? '')
  }));

  return (
    <ListStaff
      listItems={listItems || []}
      isLoading={isLoading}
      onSearchChange={setSearchValue}
      onRefresh={trigger}
    />
  );
};

export default ListStaffContainer;
