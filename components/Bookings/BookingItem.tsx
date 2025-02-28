import React from 'react';
import { View } from 'react-native';
import Image from '../Image';
import BookingCalendarDate from './BookingCalendarDate';
import { WIDTH } from '~/core/utils/layout';
import { SquircleView } from 'react-native-figma-squircle';
import { Ionicons } from '@expo/vector-icons';
import Text from '../Text';
import { format } from 'date-fns';
import { BlurView } from 'expo-blur';
// import useImageColors from '~/core/hook/useImageColors';

type Props = {
  booking: Booking;
};

const BookingItem: React.FC<Props> = ({ booking }) => {
  // const { colors } = useImageColors(booking.property.images[0]);

  return (
    <View className="w-full flex-row items-start justify-between gap-4 px-4">
      <BookingCalendarDate date={booking.check_in} />
      <SquircleView
        className="flex-1 overflow-hidden"
        squircleParams={{ cornerSmoothing: 1, cornerRadius: 24, fillColor: 'lightgray' }}>
        <SquircleView
          squircleParams={{
            cornerSmoothing: 1,
            cornerRadius: 24,
          }}>
          <View className="h-36 overflow-hidden">
            <Image source={booking.property.images[0]} style={{ height: 256 }} />
          </View>
        </SquircleView>
        <SquircleView
          squircleParams={{ cornerSmoothing: 1, cornerRadius: 24, fillColor: 'green' }}
          style={{
            position: 'relative',
            padding: 24,
            overflow: 'hidden',
          }}>
          <BlurView className="absolute inset-0" tint="dark" intensity={20} />
          <View className="flex-row items-center justify-center">
            <Ionicons name="location" size={16} color="white" />
            <Text variant="body" className="mx-2 text-white">
              {booking.property.name}, {booking.property.city}, {booking.property.country},
            </Text>
          </View>
          <View className="my-2 flex-row justify-between">
            <View>
              <Text variant="body" className="text-center text-white">
                Check-in
              </Text>
              <Text variant="body" className="text-center text-white">
                {format(new Date(booking.check_out), 'MM dd, yyyy')}
              </Text>
            </View>
          </View>
        </SquircleView>
      </SquircleView>
    </View>
  );
};

export default BookingItem;
