import React from 'react';
import { SquircleView } from 'react-native-figma-squircle';
import Image from './Image';

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
  return (
    <SquircleView
      style={{ width, height, marginHorizontal: 4 }}
      squircleParams={{
        cornerSmoothing: 0.7,
        cornerRadius: borderRadius,
      }}>
      <Image source={image} style={{ borderRadius }} />
    </SquircleView>
  );
};

export default ImageWithSquicle;
