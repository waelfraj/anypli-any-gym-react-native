import { StyleSheet } from 'react-native';
import colors from '../../../../utils/constants/colors';
import { fonts } from '../../../../utils/constants/font';
import { MARGING_SPACING } from '../../../../utils/constants/spacing';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontWeight: '700',
    fontSize: 18,
    fontFamily: fonts.POPINS_BOLD
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: MARGING_SPACING
  },
  headerText: {
    padding: MARGING_SPACING,
    borderRadius: MARGING_SPACING,
    fontSize: 14,
    fontWeight: 'bold'
  },
  upcomingText: {
    color: colors['blue-800'],
    backgroundColor: colors['blue-200']
  },
  passingText: {
    color: colors['red-800'],
    backgroundColor: colors['red-200']
  },
  reservedText: {
    color: colors['green-800'],
    backgroundColor: colors['green-200']
  },
  trait: {
    borderBottomColor: colors['gray-400'],
    borderBottomWidth: 1,
    marginVertical: MARGING_SPACING
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  },
  event: {
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  eventSummary: {
    fontSize: 14,
    marginTop: 5
  },
  viewTask: {
    position: 'absolute',
    bottom: 40,
    right: 17,
    height: 60,
    width: 60,
    backgroundColor: colors['teal-800'],
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors['teal-300'],
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 30,
    shadowOpacity: 0.5,
    elevation: 5,
    zIndex: 999
  },
  viewTaskImage: {
    height: 30,
    width: 30
  },
  timelineContainer: {
    flex: 1
  }
});

export default styles;
