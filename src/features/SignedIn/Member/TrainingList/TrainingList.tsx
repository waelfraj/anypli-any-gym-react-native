import React from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import styles from './trainingListStyles';
import { TrainingList } from '../../../../models/TrainingList';
import CustomSearch from '../../../../components/CustomSearch/CustomSearch';
import TrainingListCarContainer from '../../Coach/Training/components/TrainingListCard/TrainingListCar.container';
import ListEmpty from '../../Coach/Training/components/ListEmpty/ListEmpty';

/**
 * Represents TrainingList screen ui
 * @returns JSX.Element
 */
interface TrainingListProps {
  onSearchChange: React.Dispatch<React.SetStateAction<string>>;
  cardItems?: TrainingList[];
  isLoading: boolean;
  onRefresh: () => void;
}

const TrainingListScreen: React.FC<TrainingListProps> = ({
  onSearchChange,
  cardItems,
  isLoading,
  onRefresh
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <CustomSearch setValue={onSearchChange} />

      <View style={styles.center}>
        <FlatList
          data={cardItems}
          renderItem={(item) => (
            <View style={styles.cardContainer}>
              <TrainingListCarContainer item={item.item} />
            </View>
          )}
          keyExtractor={(item) => item.id}
          numColumns={1}
          ListEmptyComponent={<ListEmpty />}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
          }
        />
      </View>
    </View>
  );
};

export default TrainingListScreen;
