import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { rolesName } from '../../../../../../enums/roles';
import { useAppDispatch, useAppSelector } from '../../../../../../hooks/hooks';
import { usePopupActions } from '../../../../../../hooks/usePopupActions';
import { Coach } from '../../../../../../models/Coach';
import {
  useDeleteCoachMutation,
  useLazyGetAllCoachQuery
} from '../../../../../../store/api/coachApi';
import {
  addCoach,
  removeCoach
} from '../../../../../../store/slices/coachSlice';
import { decrementNbrUser } from '../../../../../../store/slices/homeStaffSlice';
import { UNAUTHENTICATED_STATUS } from '../../../../../../utils/constants/errors';
import { COACH_DETAILS_SCREEN_NAME } from '../../../../../../utils/constants/screenName';
import {
  PERSON_ICON,
  PERSON_ICON_OUTLINE
} from '../../../WelcomeStaff/utils/constants';
import ListCoach from './ListCoach';

const ListCoachContainer = (): JSX.Element => {
  const [deleteCoach] = useDeleteCoachMutation();
  const {
    showInternalServerError,
    showDeletedSuccessfully,
    showLoadingError,
    showDeleteConfirmationPopup,
    showUnauthenticatedError
  } = usePopupActions();
  const navigation = useNavigation();
  const [searchValue, setSearchValue] = useState<string>('');
  const dispatch = useAppDispatch();
  const coaches = useAppSelector((state) => state.coach.coaches);
  const totalPages = useAppSelector((state) => state.coach.totalPages);
  const [currentPage, setCurrentPage] = useState(1);
  const [trigger, { data, error, isLoading }] = useLazyGetAllCoachQuery();
  useEffect(() => {
    trigger(currentPage);
  }, [currentPage]);

  useEffect(() => {
    dispatch(addCoach(data));
  }, [data]);

  useEffect(() => {
    if (error && 'status' in error && error.status === UNAUTHENTICATED_STATUS) {
      showUnauthenticatedError();
    } else if (error) {
      showLoadingError();
    }
  }, [error]);

  const handleCoachPress = (id: string | undefined) => {
    navigation.navigate(COACH_DETAILS_SCREEN_NAME, { id });
  };

  const handleCoachDelete = (id: string | undefined) => {
    const confirmCallback = async () => {
      if (id) {
        try {
          const response = await deleteCoach(id);
          if ('data' in response && response.data == 1) {
            dispatch(removeCoach(id));
            dispatch(decrementNbrUser(rolesName.COACHES));
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

  const filteredCoachs = coaches?.filter((coach: Coach) =>
    coach.user.username?.toLowerCase().includes(searchValue.toLowerCase())
  );

  const listItems = filteredCoachs?.map((coach: Coach) => ({
    id: coach.id ?? '',
    name: coach.user.username ?? '',
    verified: coach.user.verified || false,
    icon: coach.user.verified ? PERSON_ICON : PERSON_ICON_OUTLINE,
    onPress: () => handleCoachPress(coach.id ?? ''),
    onDelete: () => handleCoachDelete(coach.id ?? '')
  }));

  return (
    <ListCoach
      listItems={listItems || []}
      isLoading={isLoading}
      onSearchChange={setSearchValue}
      onRefresh={trigger}
      setCurrentPage={setCurrentPage}
      totalPages={totalPages || 1}
      currentPage={currentPage}
    />
  );
};

export default ListCoachContainer;
