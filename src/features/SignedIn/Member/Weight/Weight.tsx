import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Modal,
  RefreshControl,
  TouchableOpacity
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { MARGING_SPACING } from '../../../../utils/constants/spacing';
import CustomButton from '../../../../components/Button/CustomButton';
import {
  WINDOW_HEIGHT,
  WINDOW_WIDTH
} from '../../../../utils/constants/layout';
import styles from './weightStyles';
import { strings } from '../../../../locales/i18n';
import { Weight } from '../../../../models/Weight';
import { showDate, showDateWithoutYear } from './utils/utils';
import WeightModal from './components/WeightModal/WeightModal';
import { Control, UseFormHandleSubmit } from 'react-hook-form';
import { Swipeable } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../../../utils/constants/colors';
import Pagination from './../../../../components/Pagination/Pagination';
import { DELETE_ICON } from '../../../../utils/constants/icons';
import { concat } from '../../../../utils/helpers/utils';

/**
 * Represents Weight screen ui
 * @returns JSX.Element
 */

interface WeightProps {
  weight: Weight[];
  data: any;
  control: Control<
    {
      weight: string;
    },
    any,
    {
      weight: string;
    }
  >;
  handleSubmit: UseFormHandleSubmit<
    {
      weight: string;
    },
    {
      weight: string;
    }
  >;
  onSubmit: (formData: { weight: string }) => Promise<void>;
  openModal: () => void;
  closeModal: () => void;
  modalVisible: boolean;
  chartConfig: {
    backgroundColor: string;
    backgroundGradientFrom: string;
    backgroundGradientTo: string;
    decimalPlaces: number;
    color: (opacity?: number) => string;
  };
  isLoading: any;
  onRefresh: any;
  onDelete: (id: string) => void;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}
const WeightScreen: React.FC<WeightProps> = ({
  data,
  weight,
  control,
  handleSubmit,
  onSubmit,
  openModal,
  closeModal,
  modalVisible,
  chartConfig,
  isLoading,
  onRefresh,
  onDelete,
  currentPage,
  setCurrentPage,
  totalPages
}): JSX.Element => {
  const rightSwipe = (id: string) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onDelete(id);
        }}
        activeOpacity={0.6}>
        <View style={styles.deleteBox}>
          <Icon name={DELETE_ICON} style={styles.icon} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
      }>
      <View style={styles.container}>
        <View>
          <View>
            <LineChart
              xLabelsOffset={3}
              data={data}
              width={WINDOW_WIDTH - MARGING_SPACING * 2}
              height={WINDOW_HEIGHT / 4}
              bezier
              fromZero
              chartConfig={chartConfig}
              style={styles.chartStyle}
              formatXLabel={(value) => showDateWithoutYear(value)}
            />
          </View>
          <View>
            <Text style={styles.title}>{strings('labels.weightHistory')}</Text>
            {weight &&
              weight.map((element, index) => (
                <Swipeable
                  key={index}
                  renderRightActions={() => rightSwipe(element.id)}>
                  <View style={styles.row}>
                    <Text style={styles.text}>
                      {showDate(element.createdAt)}
                    </Text>
                    <Text style={styles.text}>
                      {concat(element.weight, strings('labels.unit'))}
                    </Text>
                  </View>
                </Swipeable>
              ))}
          </View>
        </View>
        <Pagination
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          currentPage={currentPage}
        />
        <CustomButton
          title={strings('actions.addNewWeight')}
          textStyle={styles.buttonText}
          ButtonProps={styles.Button}
          handlePress={openModal}
        />
        <WeightModal
          control={control}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          visible={modalVisible}
          onClose={closeModal}
        />
      </View>
    </ScrollView>
  );
};

export default WeightScreen;
