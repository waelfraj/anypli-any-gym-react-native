import React from 'react';
import { View, Text } from 'react-native';
import styles from './listEmptyStyles';
import { strings } from '../../../../../../locales/i18n';
import LottieView from 'lottie-react-native';
import { lotties } from '../../../../../../config/lotties';

interface ListEmptyProps {}

const ListEmpty: React.FC<ListEmptyProps> = ({}) => {
  return (
    <View>
      <View style={styles.container}>
        <LottieView source={lotties.empty} autoPlay loop style={styles.image} />
        <Text style={styles.text}>{strings('errors.emptyList')}</Text>
      </View>
    </View>
  );
};

export default ListEmpty;
