import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { Pressable, ScrollView, View } from 'react-native';
import { Container } from '~/components/Container';
import Header from '~/components/Layout/Header';
import PropertyAmenitiesList, { AmenityType } from '~/components/Property/PropertyAmenitiesList';
import PropertyImage from '~/components/Property/PropertyImage';
import Text from '~/components/Text';
import { PROPERTIES } from '~/core/constants/data';
import { PRIMARY_COLOR } from '~/core/theme/colors';

type Props = {};

const Property = ({}: Props) => {
  const { id } = useLocalSearchParams();
  const property = PROPERTIES.find((p) => p.id === id)!;

  return (
    <Container>
      <Header title="Property" />
      <ScrollView className="bg-gray-100 p-4">
        <PropertyImage
          imageUrl={property?.images[1]}
          rating={5}
          isFavorite={property?.is_favorite}
        />
        <Text variant="subtitle-primary" className="mt-4">
          {property.name}
        </Text>

        <View className="flex-row items-center">
          <Ionicons name="location" size={16} color={PRIMARY_COLOR} />
          <Text variant="body-primary" className="text-center">
            {property.city}, {property.country}
          </Text>
        </View>
        <Text variant="body" className="mt-1 text-gray-700">
          {property.description}
        </Text>
        <PropertyAmenitiesList amenities={property.amenities} />
      </ScrollView>
      <View className="bottom-0 left-0 right-0 mx-4  mb-4 mt-auto flex-row items-center justify-center">
        <Pressable className="elevation-sm flex-grow rounded-2xl bg-primary py-4">
          <Text variant="button" className="text-center">
            Book Now
          </Text>
        </Pressable>
      </View>
    </Container>
  );
};

export default Property;
