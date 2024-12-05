import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  View
} from 'react-native';
import CustomSearch from '../../../../../components/CustomSearch/CustomSearch';
import ExerciseView from '../components/ExercisesList/exercise/Exercise';
import ListEmpty from '../components/ListEmpty/ListEmpty';
import { Exercise } from './../../../../../models/Exercise';
import styles from './listExercisesStyles';
/**
 * Represents ListExercises screen ui
 * @returns JSX.Element
 */
interface ListExercisesProps {
  exercises?: Exercise[];
  onSearchChange: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  currentPage: number;
  isLoading: boolean;
  onRefresh: any;
}

const ListExercises: React.FC<ListExercisesProps> = ({
  exercises,
  onSearchChange,
  setCurrentPage,
  isLoading,
  onRefresh,
  totalPages,
  currentPage
}): JSX.Element => {
  const keyExtractor = (item: Exercise) => item.id.toString();

  return (
    <View>
      <FlatList
        ListFooterComponentStyle={{ marginBottom: 20 }}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }
        ListHeaderComponent={<CustomSearch setValue={onSearchChange} />}
        data={exercises}
        keyExtractor={keyExtractor}
        renderItem={(item) => (
          <ExerciseView exercise={item.item} idList={''} key={item.item.id} />
        )}
        ListEmptyComponent={<ListEmpty />}
        contentContainerStyle={styles.contentContainerStyle}
        onEndReached={() => {
          if (!isLoading && currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
          }
        }}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() => {
          return (
            <View style={styles.pagination}>
              {isLoading && <ActivityIndicator size={'large'} />}
            </View>
          );
        }}
      />
    </View>
  );
};

export default ListExercises;
