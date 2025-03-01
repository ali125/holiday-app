import { Ionicons } from '@expo/vector-icons';
import { FlatList, Pressable, View } from 'react-native';
import { Container } from '~/components/Container';
import HomeCard from '~/components/Home/HomeCard';
import Discovery from '~/components/Home/Discovery';
import MainHeader from '~/components/Layout/MainHeader';
import Text from '~/components/Text';
import { PROPERTIES } from '~/core/constants/data';
import { router } from 'expo-router';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      router.push('/welcome');
    }, 1000);
  }, []);

  return (
    <Container>
      <MainHeader />
      <Pressable
        onPress={() => {
          router.navigate('/search');
        }}
        className="mx-4 mb-4 flex flex-row items-center rounded-2xl bg-[#f5f5f5] px-6 py-4">
        <Ionicons name="search" size={24} color="gray" />
        <View className="mx-4">
          <Text className="text-gray-400">Where to?</Text>
        </View>
      </Pressable>
      <FlatList
        data={PROPERTIES}
        ListHeaderComponent={() => <Discovery properties={PROPERTIES} />}
        renderItem={({ item }) => <HomeCard property={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Home;
