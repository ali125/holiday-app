import React from 'react';
import { FlatList, View } from 'react-native';
import BookingItem from '~/components/Bookings/BookingItem';
import { Container } from '~/components/Container';
import Header from '~/components/Layout/Header';
import { BOOKINGS } from '~/core/constants/data';

const Bookings = () => {
  return (
    <Container>
      <Header title="Bookings" />
      <FlatList
        data={BOOKINGS}
        renderItem={({ item }) => <BookingItem booking={item} />}
        keyExtractor={(item) => item.id}
        className="h-full"
        ItemSeparatorComponent={() => <View className="h-4"></View>}
      />
    </Container>
  );
};

export default Bookings;
