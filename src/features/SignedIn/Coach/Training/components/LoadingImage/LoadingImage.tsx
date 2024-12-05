import React, { useState } from 'react';
import { ActivityIndicator, Image, ImageStyle, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import images from '../../../../../../config/images';
import styles from './loadingImageStyles';
interface LoadingImageProps {
  item: string;
}

const LoadingImage: React.FC<LoadingImageProps> = ({ item }) => {
  const [failed, setFailed] = useState<string[]>([]);

  const onError = (errorItem: string) => {
    setFailed((prevFailed) => [...prevFailed, errorItem]);
  };

  const [isLoading, setLoading] = useState(true);

  const onLoadStart = () => {
    setLoading(true);
  };

  const onLoadEnd = () => {
    setLoading(false);
  };

  const INDICATOR_SIZE = 'large';
  return (
    <View>
      {failed.includes(item) ? (
        <Image style={styles.image} source={images.UnavailableImage} />
      ) : (
        <View>
          <FastImage
            fallback={true}
            style={styles.image}
            onError={() => onError(item)}
            source={{
              uri: item,
              priority: FastImage.priority.high
            }}
            onLoadEnd={onLoadEnd}
            onLoadStart={onLoadStart}
          />
          {isLoading && (
            <View style={styles.container}>
              <ActivityIndicator size={INDICATOR_SIZE} />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default LoadingImage;
