import React from 'react';
import { View } from 'react-native';
import { format } from 'date-fns';
import { BlurView } from 'expo-blur';
import { SquircleView } from 'react-native-figma-squircle';
import { Ionicons } from '@expo/vector-icons';
import BookingCalendarDate from './BookingCalendarDate';
import Image from '../Image';
import Text from '../Text';

type Props = {
  booking: Booking;
};

const BookingItem: React.FC<Props> = ({ booking }) => {
  return (
    <View className="w-full flex-row items-start justify-between gap-4 px-4">
      <BookingCalendarDate date={booking.check_in} />
      <SquircleView
        className="flex-1 overflow-hidden rounded-3xl"
        squircleParams={{ cornerSmoothing: 1, cornerRadius: 24, fillColor: 'lightgray' }}>
        <SquircleView
          squircleParams={{
            cornerSmoothing: 1,
            cornerRadius: 24,
            bottomLeftCornerRadius: 0,
            bottomRightCornerRadius: 0,
          }}>
          <View className="h-36 overflow-hidden">
            <Image source={booking.property.images[0]} style={{ height: 256 }} />
          </View>
        </SquircleView>
        <SquircleView
          className="relative overflow-hidden p-6"
          squircleParams={{ cornerSmoothing: 1, cornerRadius: 24, fillColor: 'green' }}>
          <BlurView className="absolute inset-0" tint="dark" intensity={20} />
          <View className="flex-row items-center justify-start">
            <Ionicons name="location" size={16} color="white" />
            <Text variant="body" className="mx-2 text-white">
              {booking.property.name}, {booking.property.city}, {booking.property.country},
            </Text>
          </View>
          <View className="my-2 flex-row justify-between">
            <View>
              <Text variant="body" className="text-white">
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
