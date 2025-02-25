import React from 'react';
import { FlatList, Pressable, View } from 'react-native';
import { SquircleView } from 'expo-squircle-view';
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
        <SquircleView className="mx-4">
          {/* <ImageWithSquicle image={item.images[1]} /> */}
          <SquircleView
            cornerSmoothing={100}
            preserveSmoothing
            borderRadius={24}
            style={{
              overflow: 'hidden',
              position: 'absolute',
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
        </SquircleView>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Discovery;
