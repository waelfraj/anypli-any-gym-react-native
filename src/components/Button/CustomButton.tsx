import React from 'react';
import {
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importer l'icône si nécessaire
import { styles } from './customButtonStyles'; // Assurez-vous que le fichier styles est correctement importé
import colors from '../../utils/constants/colors';

interface CustomButtonProps {
  title: string;
  ButtonProps?: ViewStyle;
  textStyle: TextStyle;
  handlePress: (event: GestureResponderEvent) => void;
  isSubmitted?: boolean;
  icon?: string;
  iconColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  ButtonProps,
  textStyle,
  handlePress,
  isSubmitted,
  icon,
  iconColor
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.button, ButtonProps]}
      disabled={isSubmitted}>
      <View style={styles.container}>
        {isSubmitted ? (
          <ActivityIndicator color={iconColor ?? colors.white} size={'large'} />
        ) : (
          <>
            {icon && (
              <Icon name={icon} style={styles.iconSize} color={iconColor} />
            )}
            <Text style={[styles.text, textStyle]}>{title}</Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
