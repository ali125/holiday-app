import React from 'react';
import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { WIDTH } from '~/core/utils/layout';
import ImageWithSquicle from '../ImageWithSquicle';
import Text from '../Text';

type Props = {
  property: Property;
};

const SearchCard: React.FC<Props> = ({ property }) => {
  return (
    <Pressable className="border-b border-gray-200 p-4">
      <View className="relative">
        <View className="mb-4 items-center overflow-hidden">
          <ImageWithSquicle image={property.images[0]} width={WIDTH - 40} />
        </View>
        <View className="absolute right-6 top-6">
          <Ionicons
            name={property.is_favorite ? 'heart' : 'heart-outline'}
            size={24}
            color="white"
          />
        </View>
      </View>

      <View className="px-2">
        <View className="justify-center">
          <Text variant="body">
            {property.name}, {property.country}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default SearchCard;
