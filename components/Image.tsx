import React from 'react';
import { Image as ExpoImage, ImageStyle } from 'expo-image';
import { StyleProp } from 'react-native';

// const blurhash = 'LEHV6nWB2yk8pyo0adR*.7kCMdnj';
const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const defaultStyles: ImageStyle = {
  width: '100%',
  height: '100%',
  borderRadius: 16,
};

type Props = {
  source: string;
  style?: StyleProp<ImageStyle>;
};

const Image: React.FC<Props> = ({ source, style }) => {
  return (
    <ExpoImage
      source={source}
      style={[defaultStyles, style]}
      placeholder={{ blurhash }}
      contentFit="cover"
      transition={1000}
    />
  );
};

export default Image;
