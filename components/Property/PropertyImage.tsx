import { View } from 'react-native';
import ImageWithSquicle from '../ImageWithSquicle';
import { WIDTH } from '~/core/utils/layout';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import Text from '../Text';

type Props = {
  imageUrl: string;
  rating: number;
  isFavorite: boolean;
};

const PropertyImage = ({ imageUrl, rating, isFavorite }: Props) => {
  return (
    <View className="relative">
      <View className="flex flex-row items-center justify-center">
        <ImageWithSquicle image={imageUrl} width={WIDTH - 40} />
      </View>
      <BlurView className="absolute bottom-8 left-8  flex-row items-center overflow-hidden rounded-xl p-2">
        <Ionicons name="star" size={24} color="#facc15" />
        <Text variant="body" className="mx-1 text-center text-white">
          {rating}
        </Text>
      </BlurView>
      <BlurView className="absolute bottom-8 right-8  flex-row items-center overflow-hidden rounded-xl p-2">
        <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={24} color="#facc15" />
      </BlurView>
    </View>
  );
};

export default PropertyImage;
