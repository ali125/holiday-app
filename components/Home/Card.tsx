import React from 'react';
import { Pressable, View } from 'react-native';
import Image from '../Image';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import Text from '../Text';

type Props = {
  property: Property;
};

const Card: React.FC<Props> = ({ property }) => {
  return (
    <View className="border-b border-gray-200 px-4 py-4">
      <View className="relative">
        <View>
          <Image source={property.images[0]} style={{ height: 320 }} />
        </View>
        <View>
          <BlurView
            intensity={10}
            className="absolute bottom-8 left-8 flex flex-row overflow-hidden rounded-2xl p-2">
            <Ionicons name="star" size={24} color="#facc15" />
            <Text className="mx-2 text-white">5</Text>
          </BlurView>
          <Pressable className="absolute bottom-8 right-8">
            <BlurView className="overflow-hidden rounded-2xl p-2">
              <Ionicons
                name={property.is_favorite ? 'heart' : 'heart-outline'}
                size={24}
                color="#fff"
              />
            </BlurView>
          </Pressable>
        </View>
        <View className="px-2">
          <View className="flex flex-row items-center justify-between py-2">
            <View>
              <Text variant="subtitle">{property.name}</Text>
              <Text variant="caption" className="text-gray-500">
                {property.amenities}
              </Text>
            </View>
            <View>
              <Text variant="caption">
                {property.country} starts at ${property.price_per_night}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;
