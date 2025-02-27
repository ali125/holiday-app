import React from 'react';
import { FlatList, Pressable, View } from 'react-native';
import { SquircleView } from 'react-native-figma-squircle';
import { BlurView } from 'expo-blur';
import ImageWithSquicle from '../ImageWithSquicle';
import Text from '../Text';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  properties: Property[];
};

const Discovery: React.FC<Props> = ({ properties }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={properties.reverse()}
      renderItem={({ item }) => (
        <View className="mx-3">
          <ImageWithSquicle image={item.images[1]} />
          <SquircleView
            squircleParams={{
              cornerSmoothing: 0.7,
              cornerRadius: 24,
              fillColor: '#0009',
            }}
            style={{
              overflow: 'hidden',
              position: 'absolute',
              borderRadius: 24,
              bottom: 16,
              left: 24,
              right: 24,
            }}>
            <BlurView intensity={40} tint="dark">
              <Pressable className="flex flex-row items-center justify-between p-4">
                <View>
                  <Text variant="caption" className="text-white">
                    {item.name}
                  </Text>
                  <Text variant="caption" className="text-white">
                    from ${item.price_per_night}
                  </Text>
                </View>
                <Ionicons name="arrow-forward-outline" size={16} color="white" />
              </Pressable>
            </BlurView>
          </SquircleView>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Discovery;
