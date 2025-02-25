import { Image, useImage } from '@shopify/react-native-skia';
import React from 'react';
import Squircle from 'react-native-squircle';

type Props = {
  image: string;
  width?: number;
  height?: number;
  borderRadius?: number;
};

const ImageWithSquicle: React.FC<Props> = ({
  image,
  width = 296,
  height = 280,
  borderRadius = 40,
}) => {
  const imageUrl = useImage(image);

  return (
    <Squircle
      style={{ width, height, marginHorizontal: 4 }}
      borderRadius={borderRadius}
      maskChildren={<Image width={width} height={height} image={imageUrl} fit="cover" />}
    />
  );
};

export default ImageWithSquicle;
