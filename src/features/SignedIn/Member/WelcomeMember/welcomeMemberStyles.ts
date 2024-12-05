import { StyleSheet } from 'react-native';
import colors from '../../../../utils/constants/colors';
import {
  WINDOW_HEIGHT,
  WINDOW_WIDTH
} from '../../../../utils/constants/layout';
import { MARGING_SPACING } from '../../../../utils/constants/spacing';

export default StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  image: {
    height: 100,
    width: 100
  },
  paddingBottom: {
    paddingBottom: MARGING_SPACING
  },
  header: {
    backgroundColor: colors['teal-600'],
    paddingBottom: MARGING_SPACING,
    borderBottomRightRadius: MARGING_SPACING,
    borderBottomLeftRadius: MARGING_SPACING
  },
  headerSpacing: {
    marginTop: MARGING_SPACING,
    marginHorizontal: MARGING_SPACING
  },
  dateText: {
    color: colors['gray-200'],
    fontSize: 18
  },
  welcomeUserText: {
    color: colors['gray-50'],
    fontSize: 24,
    fontWeight: 'bold'
  },
  spacingHorizontal: {
    marginHorizontal: MARGING_SPACING
  },
  headerTitle: {
    marginBottom: MARGING_SPACING,
    fontSize: 16,
    fontWeight: '600',
    color: colors['teal-900']
  },
  spacingBottom: {
    marginBottom: MARGING_SPACING
  },
  cardContainer: {
    height: '100%',
    width: WINDOW_WIDTH / 2.2,
    backgroundColor: colors['indigo-600'],
    borderRadius: MARGING_SPACING,
    justifyContent: 'space-around',
    padding: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginRight: 2,
    fontSize: 30,
    color: colors['gray-100']
  },
  text: {
    fontSize: 14,
    color: colors['gray-100']
  },

  center: {
    alignItems: 'center'
  },
  textValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.white
  },
  miniCardContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  },
  miniText: {
    marginRight: 10,
    letterSpacing: 1.5,
    color: colors.white,
    fontSize: 28,
    fontWeight: 'bold'
  },
  miniTextValue: {
    fontSize: 14,
    color: colors['gray-300']
  },
  progressContainer: {
    flexDirection: 'row',
    margin: MARGING_SPACING,
    justifyContent: 'space-between',
    height: WINDOW_HEIGHT / 2.8
  },

  justifyBetween: {
    justifyContent: 'space-between'
  },
  workoutContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageContainer: {
    height: WINDOW_HEIGHT / 6,
    width: WINDOW_WIDTH / 2.2,
    backgroundColor: colors['teal-600'],
    borderRadius: MARGING_SPACING,
    justifyContent: 'space-around',
    padding: 10
  },
  rowEnd: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  exerciseHeader: {
    marginRight: 10,
    letterSpacing: 1.5,
    color: colors.white,
    fontSize: 28,
    fontWeight: 'bold'
  },
  exerciseText: {
    fontSize: 14,
    color: colors['gray-300']
  },
  caloriesCard: {
    height: WINDOW_HEIGHT / 6,
    width: WINDOW_WIDTH / 2.2,
    backgroundColor: colors['orange-600'],
    borderRadius: MARGING_SPACING,
    justifyContent: 'space-around',
    padding: 10
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  caloriesImage: {
    resizeMode: 'contain',
    height: 30,
    width: 30,
    marginBottom: 5,
    opacity: 0.8
  },
  titleCalories: {
    fontSize: 14,
    color: colors['gray-100']
  },
  marging: {
    margin: MARGING_SPACING
  }
});
