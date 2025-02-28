import { Pressable, View } from 'react-native';
import Text from '~/components/Text';
import { SquircleView } from 'react-native-figma-squircle';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import ImageWithSquicle from '../ImageWithSquicle';
import { router } from 'expo-router';

type Props = {
  item: Property;
};
const DiscoveryItem = ({ item }: Props) => {
  return (
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
          <Pressable
            onPress={() => {
              router.navigate({
                pathname: '/properties/[id]',
                params: {
                  id: item.id,
                },
              });
            }}
            className="flex flex-row items-center justify-between p-4">
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
  );
};

export default DiscoveryItem;
