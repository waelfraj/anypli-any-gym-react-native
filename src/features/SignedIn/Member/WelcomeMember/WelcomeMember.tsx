import React from 'react';
import { Image, ScrollView, StatusBar, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Circle } from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Advertisement from '../../../../components/Advertisement/Advertisement';
import images from '../../../../config/images';
import colors from '../../../../utils/constants/colors';
import { FIRE_ICON, WEIGHT_ICON } from '../../../../utils/constants/icons';
import { concat } from '../../../../utils/helpers/utils';
import { strings } from './../../../../locales/i18n';
import { getToday } from './utils/utils';
import styles from './welcomeMemberStyles';

interface WelcomeMemberProps {
  advertisement?: { image: string; description: string; name: string };
  username: string | undefined;
}
const WelcomeMember = ({ advertisement, username }: WelcomeMemberProps) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={colors['teal-600']} />
      <View style={styles.paddingBottom}>
        <View style={styles.header}>
          <View style={styles.headerSpacing}>
            <Text style={styles.dateText}>{getToday()}</Text>
            <Text style={styles.welcomeUserText}>
              {concat(strings('welcome.hello'), username)}
              <Icon name={FIRE_ICON} size={32} />
            </Text>
          </View>
        </View>
        <Advertisement advertisement={advertisement} />
      </View>
      <View style={styles.progressContainer}>
        <View>
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
        </View>
        <View style={styles.justifyBetween}>
          <View style={styles.imageContainer}>
            <View style={styles.workoutContainer}>
              <Image style={styles.caloriesImage} source={images.folderImage} />
              <Text style={styles.titleCalories}>Total workouts</Text>
            </View>
            <View style={styles.rowEnd}>
              <Text style={styles.exerciseHeader}>52</Text>
              <Text style={styles.exerciseText}>Exercise</Text>
            </View>
          </View>
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
    </ScrollView>
  );
};

export default WelcomeMember;
