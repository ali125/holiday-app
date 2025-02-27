import React from 'react';
import { View } from 'react-native';
import { format } from 'date-fns';
import Text from '../Text';
import { SquircleView } from 'react-native-figma-squircle';

type Props = {
  date?: Date | string;
};

const BookingCalendarDate: React.FC<Props> = ({ date = new Date() }) => {
  const month = format(date, 'MMM').toUpperCase();
  const day = format(date, 'd').toUpperCase();
  const weekday = format(date, 'EEE').toUpperCase();

  return (
    <SquircleView
      squircleParams={{
        cornerSmoothing: 100,
        cornerRadius: 16,
        fillColor: '#f3f4f6',
      }}
      className="p-1">
      <View className="mx-1 items-center">
        <Text variant="caption" className="text-center">
          {month}
        </Text>
      </View>
      <View className="items-center py-2">
        <Text variant="subtitle" className="text-center">
          {day}
        </Text>
      </View>
      <View className="items-center py-2">
        <Text variant="body" className="text-center">
          {weekday}
        </Text>
      </View>
    </SquircleView>
  );
};

export default BookingCalendarDate;
