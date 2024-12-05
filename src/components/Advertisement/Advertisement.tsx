import React from 'react';
import { Text, View } from 'react-native';
import LoadingImage from '../../features/SignedIn/Coach/Training/components/LoadingImage/LoadingImage';
import styles from './advertisementStyles';
import { MARGING_SPACING } from '../../utils/constants/spacing';
interface AdvertisementProps {
  advertisement:
    | {
        image: string;
        description: string;
        name: string;
      }
    | undefined;
}

const Advertisement: React.FC<AdvertisementProps> = ({ advertisement }) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <LoadingImage
          item={
            advertisement
              ? advertisement.image
              : 'https://www.solocal.com/sites/default/files/2021-04/publicite-digitale.jpg'
          }
        />
      </View>
    </View>
  );
};

export default Advertisement;
