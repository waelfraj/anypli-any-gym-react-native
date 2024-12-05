import { useState } from 'react';
import { ImageLibraryOptions } from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker';
import {
  PHOTO_INCLUDE_BASE_64,
  PHOTO_MAX_HEIGHT,
  PHOTO_MAX_WIDTH,
  PHOTO_MEDIA_TYPE,
  PHOTO_SELECTION_LIMIT
} from '../../utils/constants/ImageUploader';
import { ImageStyle, Platform } from 'react-native';
import CustomImagePicker from './CustomImagePicker';

interface CustomImagePickerContainerProps {
  imageStyle: ImageStyle;
  onChange: (...event: any[]) => void;
}

const CustomImagePickerContainer: React.FC<CustomImagePickerContainerProps> = ({
  imageStyle,
  onChange
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImagePicker = () => {
    const options: ImageLibraryOptions = {
      mediaType: PHOTO_MEDIA_TYPE,
      maxWidth: PHOTO_MAX_WIDTH,
      maxHeight: PHOTO_MAX_HEIGHT,
      selectionLimit: PHOTO_SELECTION_LIMIT,
      includeBase64: PHOTO_INCLUDE_BASE_64
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if ('error' in response) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        if (response.assets && response.assets.length > 0) {
          if (response.assets[0]) {
            const uri = response.assets[0].uri;
            const fileName = response.assets[0].fileName;
            const type = response.assets[0].type;
            setSelectedImage(uri ? uri : null);
            onChange({
              name: fileName,
              type: type,
              uri: Platform.OS === 'android' ? uri : uri?.replace('file://', '')
            });
          } else {
            console.log('Invalid URI received from image picker');
          }
        }
      }
    });
  };

  return (
    <CustomImagePicker
      imageStyle={imageStyle}
      openImagePicker={openImagePicker}
      selectedImage={selectedImage}
    />
  );
};

export default CustomImagePickerContainer;
