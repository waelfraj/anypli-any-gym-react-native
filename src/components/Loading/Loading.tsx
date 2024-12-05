import LottieView from 'lottie-react-native';
import React from 'react';
import { Modal, View } from 'react-native';
import { lotties } from '../../config/lotties';
import styles from './loadingStyles';

interface LoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isLoading}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <LottieView
            source={lotties.loading}
            style={styles.image}
            autoPlay
            loop
          />
        </View>
      </View>
    </Modal>
  );
};

export default Loading;
