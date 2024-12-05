import React from 'react';
import { Image, View } from 'react-native';
import images from '../../../../config/images';
import styles from './welcomeCoachStyles';
import Advertisement from '../../../../components/Advertisement/Advertisement';
/**
 * Represents WelcomeCoach screen ui
 * @returns JSX.Element
 */
interface WelcomeCoachProps {
  advertisement:
    | {
        image: string;
        description: string;
        name: string;
      }
    | undefined;
}

const WelcomeCoach: React.FC<WelcomeCoachProps> = ({
  advertisement
}): JSX.Element => {
  return (
    <View>
      <View style={styles.container}>
        <Image source={images.logo} style={styles.image} />
      </View>
      <Advertisement advertisement={advertisement} />
    </View>
  );
};

export default WelcomeCoach;
