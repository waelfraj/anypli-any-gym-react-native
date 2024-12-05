import React from 'react';
import { RefreshControl, SafeAreaView, ScrollView, View } from 'react-native';
import CustomButton from '../../../../../components/Button/CustomButton';
import Card from '../../../../../components/Card/Card';
import Loading from '../../../../../components/Loading/Loading';
import { roles } from '../../../../../enums/roles';
import { strings } from '../../../../../locales/i18n';
import colors from '../../../../../utils/constants/colors';
import Header from '../components/Header/Header';
import {
  ADVERTISEMENT_ADD_ICON,
  PERSON_ADD_ICON,
  WelcomeStaffProps
} from '../utils/constants';
import styles from './welcomeStaffStyles';

const WelcomeStaff: React.FC<WelcomeStaffProps> = ({
  name,
  cardItems,
  onPress,
  role,
  isLoading,
  onRefresh,
  handleGoToCreateAdvertisement,
  handleGoToCreateStaff
}): JSX.Element => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
      }>
      <Loading isLoading={isLoading} />
      <SafeAreaView style={styles.container}>
        <Header name={name ?? ''} />
        <Card cardItems={cardItems} />
        <View style={[styles.buttonContainer]}>
          {role == roles.ADMIN_ROLE_ID ? (
            <CustomButton
              title={strings('staff.createStaff')}
              ButtonProps={styles.addStaffButtonStyle}
              textStyle={styles.addStaffButtonText}
              handlePress={handleGoToCreateStaff}
              icon={PERSON_ADD_ICON}
              iconColor={colors['indigo-700']}
            />
          ) : null}

          <CustomButton
            title={strings('staff.createAdvertisement')}
            ButtonProps={styles.addAdvertisementButtonStyle}
            textStyle={styles.addAdvertisementButtonText}
            handlePress={handleGoToCreateAdvertisement}
            icon={ADVERTISEMENT_ADD_ICON}
            iconColor={colors['indigo-100']}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default WelcomeStaff;
