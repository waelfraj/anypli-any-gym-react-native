import { StyleSheet } from 'react-native';
import { MARGING_SPACING } from '../../../../../../utils/constants/spacing';
import { fontSize } from '../../../../../../utils/constants/fontSize';
import colors from '../../../../../../utils/constants/colors';
import { WINDOW_HEIGHT } from '../../../../../../utils/constants/layout';
import { fonts } from '../../../../../../utils/constants/font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: MARGING_SPACING * 4
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10
  },
  userPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  userInfo: {
    flex: 1,
    marginLeft: 10
  },
  userName: {
    fontWeight: 'bold',
    fontSize: fontSize.LARGE,
    marginBottom: 5,
    textTransform: 'capitalize'
  },
  validateButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.successGreen
  },
  inValidateButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.errorRed
  },
  editButtonText: {
    color: colors.snowWhite,
    fontWeight: 'bold'
  },
  statsCard: {
    padding: 20,
    height: WINDOW_HEIGHT,
    backgroundColor: colors.snowWhite
  },

  statValue: {
    fontSize: 16,
    marginBottom: 5,
    color: colors['teal-700'],
    marginVertical: 12
  },
  statsCategory: {
    color: colors['gray-900'],
    fontWeight: 'bold',
    fontFamily: fonts.POPINS_SEMI_BOLD,
    fontSize: fontSize.MEDIUM,
    marginVertical: 12
  },
  statItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  }
});

export default styles;
