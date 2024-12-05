import React from 'react';
import { Image, ImageStyle, TouchableOpacity, View } from 'react-native';
import images from '../../config/images';

interface CustomImagePickerProps {
  imageStyle: ImageStyle;
  openImagePicker: () => void;
  selectedImage: string | null;
}

const CustomImagePicker: React.FC<CustomImagePickerProps> = ({
  imageStyle,
  openImagePicker,
  selectedImage
}) => {
  return (
    <View>
      <TouchableOpacity onPress={openImagePicker}>
        <Image
          source={selectedImage ? { uri: selectedImage } : images.SelectImage}
          style={imageStyle}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomImagePicker;
