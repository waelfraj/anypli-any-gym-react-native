import React from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  TextStyle,
  ColorValue
} from 'react-native';
import { styles } from './customModalStyles';
import { Popup } from './../../models/Popup';
import { status } from '../../enums/status';
import colors from '../../utils/constants/colors';
import LottieView from 'lottie-react-native';
import { lotties } from '../../config/lotties';

type Props = Popup;

const CustomModal = ({ ...popup }: Props) => {
  let titleStyle: TextStyle;
  let confirmStyle: TextStyle;
  let iconName: string;
  let iconColor: number | ColorValue | undefined;

  switch (popup.type) {
    case status.INFO:
      titleStyle = styles.infoTitle;
      confirmStyle = styles.infoButton;
      iconName = lotties.info;
      iconColor = colors.infoBlue;
      break;
    case status.WARNING:
      titleStyle = styles.warningTitle;
      confirmStyle = styles.warningButton;
      iconName = lotties.warning;
      iconColor = colors.warningYellow;
      break;

    case status.SUCCESS:
      titleStyle = styles.successTitle;
      confirmStyle = styles.successButton;
      iconName = lotties.success;
      iconColor = colors.successGreen;
      break;
    default:
      titleStyle = styles.errorTitle;
      confirmStyle = styles.errorButton;
      iconName = lotties.error;
      iconColor = colors.errorRed;
      break;
  }

  return (
    <Modal animationType="slide" transparent={true} visible={popup.isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={[styles.title, titleStyle]}>{popup.title}</Text>
          <LottieView source={iconName} style={styles.image} autoPlay />
          <Text style={styles.message}>{popup.message}</Text>
          <View style={styles.buttonsContainer}>
            {popup.cancelText != undefined && popup.cancelText != null && (
              <TouchableOpacity
                style={[styles.button, styles.buttonCancel]}
                onPress={popup.cancelCallback}>
                <Text style={styles.textStyle}>{popup.cancelText}</Text>
              </TouchableOpacity>
            )}
            {popup.confirmText != undefined && popup.confirmText != null && (
              <TouchableOpacity
                style={[styles.button, confirmStyle]}
                onPress={popup.confirmCallback}>
                <Text style={styles.textStyle}>{popup.confirmText}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
