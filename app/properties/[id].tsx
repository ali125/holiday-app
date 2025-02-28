import { Ionicons } from '@expo/vector-icons';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetFlashList,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { Calendar, useDateRange } from '@marceloterreiro/flash-calendar';
import { FlashList } from '@shopify/flash-list';
import { useLocalSearchParams } from 'expo-router';
import { useCallback, useMemo, useRef } from 'react';
import { Platform, Pressable, ScrollView, View } from 'react-native';
import { Container } from '~/components/Container';
import Header from '~/components/Layout/Header';
import PropertyAmenitiesList from '~/components/Property/PropertyAmenitiesList';
import PropertyImage from '~/components/Property/PropertyImage';
import Text from '~/components/Text';
import { today } from '~/core/constants';
import { PROPERTIES } from '~/core/constants/data';
import { calendarTheme } from '~/core/theme/calendarTheme';
import { PRIMARY_COLOR } from '~/core/theme/colors';

const SafeFlashList = Platform.select({
  ios: FlashList,
  android: BottomSheetFlashList as any,
});

type Props = {};

const Property = ({}: Props) => {
  const { id } = useLocalSearchParams();
  const property = PROPERTIES.find((p) => p.id === id)!;

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['60%'], []);

  const renderBackdrop = useCallback((props: BottomSheetBackdropProps) => {
    return (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior="close"
      />
    );
  }, []);

  const { calendarActiveDateRanges, onCalendarDayPress } = useDateRange();

  console.log({ calendarActiveDateRanges });

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
        <Pressable
          onPress={() => {
            bottomSheetRef.current?.expand();
          }}
          className="flex-grow rounded-2xl bg-primary py-4">
          <Text variant="button" className="text-center">
            Book Now
          </Text>
        </Pressable>
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        enablePanDownToClose={true}
        enableDynamicSizing={false}
        snapPoints={snapPoints}
        index={-1}
        backdropComponent={renderBackdrop}>
        <BottomSheetView className="flex-1">
          <Text variant="body" className="text-center">
            Price
          </Text>

          <BottomSheetView className="flex-1">
            <Calendar.List
              CalendarScrollComponent={SafeFlashList}
              calendarActiveDateRanges={calendarActiveDateRanges}
              calendarMinDateId={today}
              onCalendarDayPress={onCalendarDayPress}
              theme={calendarTheme}
            />
          </BottomSheetView>

          <Pressable
            onPress={() => {
              bottomSheetRef.current?.close();
            }}
            className="m-4 flex-row items-center justify-center rounded-2xl bg-primary px-4 py-4">
            <Ionicons name="checkmark-circle" size={20} color="white" />
            <Text variant="button" className="mx-2 text-center">
              Confirm
            </Text>
          </Pressable>
        </BottomSheetView>
      </BottomSheet>
    </Container>
  );
};

export default Property;
