import React from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import styles from './staffDetailsStyles';
import { Staff } from '../../../../../../models/Staff';
import Loading from '../../../../../../components/Loading/Loading';
import CustomButton from '../../../../../../components/Button/CustomButton';
import { strings } from '../../../../../../locales/i18n';
import { URLS } from '../../../../../../enums/endpoints';
import { ADMIN_ID } from '../../ListStaff/utils/constant';

interface StaffDetailsProps {
  onPress: () => void;
  staff: Staff | undefined;
  data: {
    category: string;
    value: string;
  }[];
  isLoading: boolean;
}

const StaffDetails: React.FC<StaffDetailsProps> = ({
  onPress,
  staff,
  data,
  isLoading
}) => {
  const renderStatItem = ({
    item
  }: {
    item: { category: string; value: string };
  }) => (
    <View style={styles.statItemContainer}>
      <Text style={styles.statsCategory}>{item.category}</Text>
      <Text style={styles.statValue}>{item.value}</Text>
    </View>
  );

  const ranInt = staff?.user?.gender == 'f' ? 3 : 5;
  const avatarUrl = `${URLS.GET_AVATAR_IMAGE}${ranInt}.png`;

  return (
    <View>
      {isLoading && <Loading isLoading={isLoading} />}
      <View style={styles.container}>
        <View style={styles.statsCard}>
          <View style={styles.userCard}>
            <Image source={{ uri: avatarUrl }} style={styles.userPhoto} />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>
                {staff?.user?.username ?? 'N/A'}
              </Text>
              <Text>{staff?.id ?? 'N/A'}</Text>
            </View>
            {staff?.user.id != ADMIN_ID && (
              <CustomButton
                title={
                  staff?.user?.verified
                    ? strings('actions.activated')
                    : strings('actions.desactivated')
                }
                textStyle={styles.editButtonText}
                handlePress={onPress}
                ButtonProps={
                  staff?.user?.verified
                    ? styles.validateButton
                    : styles.inValidateButton
                }
              />
            )}
          </View>
          <FlatList
            data={data}
            renderItem={renderStatItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={1}
          />
        </View>
      </View>
    </View>
  );
};

export default StaffDetails;
