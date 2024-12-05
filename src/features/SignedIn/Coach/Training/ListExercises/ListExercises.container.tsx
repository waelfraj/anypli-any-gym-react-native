import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import Loading from '../../../../../components/Loading/Loading';
import { Exercise } from '../../../../../models/Exercise';
import { CoachStackParamList } from '../../../../../navigations/Coach/CoachStackParamList';
import { useLazyGetExercisesByCategoryQuery } from '../../../../../store/api/exerciseApi';
import { LIST_EXERCISE_SCREEN_NAME } from '../../../../../utils/constants/screenName';
import ListExercises from './ListExercises';

interface ListExercisesContainerProps
  extends NativeStackScreenProps<
    CoachStackParamList,
    typeof LIST_EXERCISE_SCREEN_NAME
  > {}

const ListExercisesContainer: React.FC<ListExercisesContainerProps> = ({
  route
}): JSX.Element => {
  const category = route.params.category;
  const [searchValue, setSearchValue] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [listExercises, setListExercises] = useState<Exercise[]>([]);
  const [trigger, { data, error, isLoading }] =
    useLazyGetExercisesByCategoryQuery();

  useEffect(() => {
    trigger({
      category,
      currentPage
    });
  }, [currentPage, category]);
  useEffect(() => {
    if (!isLoading && data && currentPage < data.totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }, [data, isLoading]);
  useEffect(() => {
    if (data) {
      setListExercises([...listExercises, ...data.exercises]);
    }
  }, [data]);

  if (isLoading) return <Loading isLoading={isLoading} />;

  return (
    <ListExercises
      isLoading={isLoading}
      onRefresh={trigger}
      setCurrentPage={setCurrentPage}
      totalPages={data?.totalPages ?? 1}
      currentPage={currentPage}
      exercises={listExercises}
      onSearchChange={setSearchValue}
    />
  );
};

export default ListExercisesContainer;
