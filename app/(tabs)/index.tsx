// import { Ionicons } from '@expo/vector-icons';
// import { FlatList, Pressable, View } from 'react-native';
// import { Container } from '~/components/Container';
// import HomeCard from '~/components/Home/HomeCard';
// import Discovery from '~/components/Home/Discovery';
// import MainHeader from '~/components/Layout/MainHeader';
// import Text from '~/components/Text';
// import { PROPERTIES } from '~/core/constants/data';

// const Home = () => {
//   return (
//     <Container>
//       <MainHeader />
//       <Pressable className="mx-4 mb-4 flex flex-row items-center rounded-2xl bg-[#f5f5f5] px-6 py-4">
//         <Ionicons name="search" size={24} color="gray" />
//         <View className="mx-4">
//           <Text className="text-gray-400">Where to?</Text>
//         </View>
//       </Pressable>
//       <FlatList
//         data={PROPERTIES}
//         ListHeaderComponent={() => <Discovery properties={PROPERTIES} />}
//         renderItem={({ item }) => <HomeCard property={item} />}
//         keyExtractor={(item) => item.id}
//         showsVerticalScrollIndicator={false}
//       />
//     </Container>
//   );
// };

// export default Home;

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
