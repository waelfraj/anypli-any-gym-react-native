import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import images from '../../../../../../config/images';
import { strings } from '../../../../../../locales/i18n';
import { NOTIFICATION_ICON } from '../../../../../../utils/constants/icons';
import styles from './headerStyles';

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <View style={styles.row}>
      <View style={styles.container}>
        <Image
          source={images.iconLogo}
          style={styles.logo}
          resizeMode="center"
        />
        <View>
          <Text style={styles.text}>{strings('welcome.hello')}</Text>
          <Text style={styles.title}>{name}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <Icon name={NOTIFICATION_ICON} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
