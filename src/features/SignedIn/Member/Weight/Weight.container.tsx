import React, { useEffect, useState } from 'react';

import { type NativeStackScreenProps } from '@react-navigation/native-stack';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { usePopupActions } from '../../../../hooks/usePopupActions';
import { strings } from '../../../../locales/i18n';
import { MemberStackParamList } from '../../../../navigations/Member/MemberStackParamList';
import {
  useCreateWeighMutation,
  useDeleteWeightMutation,
  useGetWeighQuery
} from '../../../../store/api/weightApi';
import {
  addWeight,
  deleteWeight,
  newWeightList
} from '../../../../store/slices/weightSlice';
import colors from '../../../../utils/constants/colors';
import { ERROR_NETWORK } from '../../../../utils/constants/errors';
import { WEIGHT_SCREEN_NAME } from '../../../../utils/constants/screenName';
import Weight from './Weight';

/**
 * Container used to separate Weight logic as a wrapper to Weight screen
 * @returns JSX.Element
 */
interface WeightContainerProps
  extends NativeStackScreenProps<
    MemberStackParamList,
    typeof WEIGHT_SCREEN_NAME
  > {}

const WeightContainer: React.FC<WeightContainerProps> = ({
  navigation
}): JSX.Element => {
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const weightList = useAppSelector((state) => state.weight.weight);
  const { data, error, isLoading, refetch } = useGetWeighQuery(currentPage);
  const [createWeight] = useCreateWeighMutation();
  const [deleteWeightApi] = useDeleteWeightMutation();

  const dispatch = useAppDispatch();
  const {
    showNetworkErrorPopup,
    showInvalidCredentialPopup,
    showDeletedSuccessfully,
    showInternalServerError
  } = usePopupActions();

  const WeightSchema = z.object({
    weight: z.string({ required_error: strings('errors.required_error') })
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<z.infer<typeof WeightSchema>>({
    resolver: zodResolver(WeightSchema)
  });

  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: colors['teal-500'],
    backgroundGradientTo: colors['teal-900'],
    decimalPlaces: 0,
    color: () => `rgba(250, 250, 250, 0.8)`
  };

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    if (data && 'weight' in data && data.weight.length > 0) {
      setTotalPages(data.totalPages);
      dispatch(newWeightList(data.weight));
    }
  }, [data]);

  const onRefresh = () => {
    refetch();
  };

  const onSubmit = async (formData: { weight: string }) => {
    try {
      const response = await createWeight({ weight: formData.weight });
      if ('data' in response) {
        dispatch(addWeight(response.data));
        closeModal();
        reset();
      } else if ('error' in response) {
        if ('name' in response.error) {
          if (response.error.name == ERROR_NETWORK) {
            showNetworkErrorPopup(() => {
              onSubmit(formData);
            });
          }
        } else {
          showInvalidCredentialPopup();
        }
      }
    } catch (error) {
      showNetworkErrorPopup(() => {
        onSubmit(formData);
      });
    }
  };

  const onDelete = async (id: string) => {
    const response = await deleteWeightApi(id);
    if ('data' in response) {
      showDeletedSuccessfully;
      dispatch(deleteWeight({ id }));
    } else {
      showInternalServerError();
    }
  };

  const line = {
    labels: weightList.map((element) => element.createdAt),
    datasets: [
      {
        data: weightList.map((element) => element.weight),
        strokeWidth: 2,
        withDots: false
      },
      {
        data: [200],
        withDots: false
      },
      {
        data: [0],
        withDots: false
      }
    ]
  };

  return (
    <Weight
      weight={weightList}
      data={line}
      control={control}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      openModal={openModal}
      closeModal={closeModal}
      modalVisible={modalVisible}
      chartConfig={chartConfig}
      isLoading={isLoading}
      onRefresh={onRefresh}
      onDelete={onDelete}
      totalPages={totalPages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
};

export default WeightContainer;
