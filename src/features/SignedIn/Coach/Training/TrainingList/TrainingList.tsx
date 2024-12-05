import React from 'react';
import {
  FlatList,
  GestureResponderEvent,
  RefreshControl,
  TouchableOpacity,
  View
} from 'react-native';
import ListEmpty from '../components/ListEmpty/ListEmpty';
import styles from './trainingListStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import TrainingListCarContainer from '../components/TrainingListCard/TrainingListCar.container';
import CustomSearch from '../../../../../components/CustomSearch/CustomSearch';
import { TrainingList } from '../../../../../models/TrainingList';
import { ADD_ICON } from '../../../../../utils/constants/icons';

/**
 * Represents TrainingList screen ui
 * @returns JSX.Element
 */
interface TrainingListProps {
  onSearchChange: React.Dispatch<React.SetStateAction<string>>;
  cardItems?: TrainingList[];
  isLoading: boolean;
  onRefresh: () => void;
  goToAddTrainingList: ((event: GestureResponderEvent) => void) | undefined;
}

const TrainingListScreen: React.FC<TrainingListProps> = ({
  onSearchChange,
  cardItems,
  goToAddTrainingList,
  isLoading,
  onRefresh
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.search}>
          <CustomSearch setValue={onSearchChange} />
        </View>
        <TouchableOpacity onPress={goToAddTrainingList}>
          <Icon name={ADD_ICON} style={styles.icon} />
        </TouchableOpacity>
      </View>

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
