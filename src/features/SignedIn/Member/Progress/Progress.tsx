import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { PieChart, BarChart } from 'react-native-chart-kit';
import colors from '../../../../utils/constants/colors';
import { WINDOW_WIDTH } from '../../../../utils/constants/layout';
import { MARGING_SPACING } from '../../../../utils/constants/spacing';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Circle } from 'react-native-svg';
import images from '../../../../config/images';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './progressStyles';
import { WEIGHT_ICON } from '../../../../utils/constants/icons';
import { strings } from '../../../../locales/i18n';

/**
 * Represents Progress screen ui
 * @returns JSX.Element
 */
interface ProgressProps {
  pieChartData: {
    name: string;
    population: number;
    color: string;
    legendFontColor: string;
    legendFontSize: number;
  }[];
  data: {
    labels: string[];
    datasets: {
      data: number[];
    }[];
  };
  chartConfig: {
    backgroundGradientFrom: string;
    backgroundGradientTo: string;
    backgroundGradientToOpacity: number;
    color: (opacity?: number) => string;
    strokeWidth: number;
    barPercentage: number;
    useShadowColorFromDataset: boolean;
  };
}

const Progress: React.FC<ProgressProps> = ({
  pieChartData,
  data,
  chartConfig
}): JSX.Element => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* ------------------------------------------------------------- */}
        <View style={styles.cardContainer}>
          <View style={styles.row}>
            <Icon name={WEIGHT_ICON} style={styles.icon} />
            <Text style={styles.text}>{strings('labels.weight')}</Text>
          </View>
          <View style={styles.center}>
            <AnimatedCircularProgress
              size={120}
              width={10}
              fill={60}
              tintColor={colors['indigo-300']}
              backgroundColor={colors['indigo-100']}
              padding={10}
              renderCap={({ center }) => (
                <Circle
                  cx={center.x}
                  cy={center.y}
                  r="10"
                  fill={colors['indigo-300']}
                />
              )}>
              {(fill) => <Text style={styles.textValue}>{85}</Text>}
            </AnimatedCircularProgress>
          </View>
          <View style={styles.miniCardContainer}>
            <Text style={styles.miniText}>60.0</Text>
            <Text style={styles.miniTextValue}>/75.0 Kg </Text>
          </View>
        </View>
        {/* ------------------------------------------------------------- */}
        <View style={styles.justifyBetween}>
          {/* ------------------------------------------------------------- */}
          <View style={styles.imageContainer}>
            <View style={styles.workoutContainer}>
              <Image style={styles.image} source={images.folderImage} />
              <Text style={styles.headerTitle}>Total workouts</Text>
            </View>
            <View style={styles.rowEnd}>
              <Text style={styles.exerciseHeader}>52</Text>
              <Text style={styles.exerciseText}>Exercise</Text>
            </View>
          </View>
          {/* ------------------------------------------------------------- */}
          <View style={styles.caloriesCard}>
            <View style={styles.rowCenter}>
              <Image
                style={styles.caloriesImage}
                source={images.caloriesImage}
              />
              <Text style={styles.titleCalories}>Calories Burned</Text>
            </View>
            <View style={styles.rowEnd}>
              <Text style={styles.exerciseHeader}>1,273</Text>
              <Text style={styles.exerciseText}>Kcal</Text>
            </View>
          </View>
        </View>
      </View>
      {/* ------------------------------------------------------------- */}
      <View style={styles.marging}>
        <Text>Calories Eaten</Text>
        <PieChart
          data={pieChartData}
          width={WINDOW_WIDTH - MARGING_SPACING * 2} // from react-native
          height={220}
          chartConfig={{
            color: (opacity = 1) => `white`,
            labelColor: (opacity = 1) => `white`,
            style: {
              borderRadius: 16
            }
          }}
          backgroundColor={colors['gray-100']}
          accessor="population"
          paddingLeft="15"
          absolute
          style={styles.pieChart}
        />
      </View>
      {/* ------------------------------------------------------------- */}
      <View style={styles.marginHorizontal}>
        <Text>Daily</Text>
        <BarChart
          yAxisLabel={''}
          yAxisSuffix={''}
          style={styles.barChart}
          data={data}
          width={WINDOW_WIDTH - MARGING_SPACING * 2}
          height={220}
          chartConfig={chartConfig}
        />
      </View>
    </ScrollView>
  );
};

export default Progress;
