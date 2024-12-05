import React from 'react';

import { type NativeStackScreenProps } from '@react-navigation/native-stack';

import Progress from './Progress';
import { MemberStackParamList } from '../../../../navigations/Member/MemberStackParamList';
import { PROGRESS_SCREEN_NAME } from '../../../../utils/constants/screenName';
import colors from '../../../../utils/constants/colors';

/**
 * Container used to separate Progress logic as a wrapper to Progress screen
 * @returns JSX.Element
 */
interface ProgressContainerProps
  extends NativeStackScreenProps<
    MemberStackParamList,
    typeof PROGRESS_SCREEN_NAME
  > {}

const ProgressContainer: React.FC<ProgressContainerProps> = ({
  navigation
}): JSX.Element => {
  const pieChartData = [
    {
      name: 'Fat',
      population: 20,
      color: colors['blue-600'],
      legendFontColor: colors['orange-800'],
      legendFontSize: 12
    },
    {
      name: 'Vitamin',
      population: 40,
      color: colors['red-500'],
      legendFontColor: colors['red-800'],
      legendFontSize: 12
    },
    {
      name: 'Protein',
      population: 24,
      color: colors['yellow-400'],
      legendFontColor: colors['yellow-800'],
      legendFontSize: 12
    },
    {
      name: 'Fat',
      population: 34,
      color: colors['green-500'],
      legendFontColor: colors['teal-600'],
      legendFontSize: 12
    }
  ];

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [1800, 4500, 2800, 8000, 9900, 4300]
      }
    ]
  };
  const chartConfig = {
    backgroundGradientFrom: '#033f63',
    backgroundGradientTo: '#28666e',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  return (
    <Progress
      chartConfig={chartConfig}
      data={data}
      pieChartData={pieChartData}
    />
  );
};

export default ProgressContainer;
