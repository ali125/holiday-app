import React from 'react';
import { View } from 'react-native';
import Image from '../Image';

type Props = {
  property: FavoriteProperty;
};

const FavoriteCard: React.FC<Props> = ({ property }) => {
  return (
    <View className="flex-1 p-2">
      <Image
        source={property.images[0]}
        style={{
          width: '100%',
          height: 'auto',
          aspectRatio: property.widthRatio / property.heightRatio,
        }}
      />
    </View>
  );
};

export default FavoriteCard;
