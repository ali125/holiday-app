import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Text from '~/components/Text';
import { PRIMARY_COLOR } from '~/core/theme/colors';

type Props = { amenities: string };

export type AmenityType =
  | 'WiFi'
  | 'Kitchen'
  | 'Pool'
  | 'Air conditioning'
  | 'Pet friendly'
  | 'Free parking';

const amenityIcon: Record<AmenityType, keyof typeof Ionicons.glyphMap> = {
  'Air conditioning': 'snow',
  'Pet friendly': 'paw',
  Kitchen: 'restaurant',
  Pool: 'water',
  WiFi: 'wifi',
  'Free parking': 'car',
};

const PropertyAmenitiesList = ({ amenities }: Props) => {
  const allAmenities = amenities.split(', ') as AmenityType[];

  return (
    <View className="my-4 flex-row flex-wrap justify-evenly">
      {allAmenities.map((amenity, index) => (
        <View
          key={index}
          className="mx-2 flex-1 items-center justify-center rounded-2xl bg-white p-2">
          <Ionicons name={amenityIcon[amenity]} size={24} color={PRIMARY_COLOR} />
          <Text variant="body-primary" className="mt-2 text-center">
            {amenity}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default PropertyAmenitiesList;
