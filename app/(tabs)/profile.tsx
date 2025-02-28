import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { SquircleView } from 'react-native-figma-squircle';
import { Container } from '~/components/Container';
import ImageWithSquicle from '~/components/ImageWithSquicle';
import Header from '~/components/Layout/Header';
import Text from '~/components/Text';
import { PRIMARY_COLOR } from '~/core/theme/colors';

const user: User = {
  created_at: '',
  name: 'Ali Mortazavi',
  email: '',
  avatar: 'https://res.cloudinary.com/dbspz5tmg/image/upload/v1738301879/holidia/one_whhjrl.webp',
  id: '1',
  username: '',
  bookings: [],
  properties: [],
};

const Profile = () => {
  return (
    <Container>
      <Header
        title="Profile"
        headerAction={{
          name: 'log-out',
          onPress: () => {
            console.log('Log out');
          },
        }}
      />

      <View className="items-center justify-center">
        <ImageWithSquicle image={user.avatar} width={256} height={256} borderRadius={40} />
      </View>
      <View className="mt-4 items-center">
        <Text variant="title" className="text-center">
          {user.email}
        </Text>
        <Text variant="subtitle" className="text-center">
          @{user.username}
        </Text>
      </View>
      <SquircleView
        squircleParams={{ cornerSmoothing: 1, fillColor: 'none' }}
        className="m-4 mt-10 flex-row flex-wrap justify-around">
        <View>
          <View className="flex flex-row items-center justify-center rounded-xl bg-gray-100 p-8">
            <Ionicons name="stats-chart" color={PRIMARY_COLOR} size={40} />
          </View>
          <View className="mt-4 flex-row items-center justify-center">
            <Text variant="body" className="text-center">
              Trips
            </Text>
            <Text variant="body" className="mx-4 text-center">
              4
            </Text>
          </View>
        </View>
        <View>
          <View className="flex flex-row items-center justify-center rounded-xl bg-gray-100 p-8">
            <Ionicons name="heart" color={PRIMARY_COLOR} size={40} />
          </View>
          <View className="mt-4 flex-row items-center justify-center">
            <Text variant="body" className="text-center">
              Favorite
            </Text>
            <Text variant="body" className="mx-4 text-center">
              1
            </Text>
          </View>
        </View>
        <View>
          <View className="flex flex-row items-center justify-center rounded-xl bg-gray-100 p-8">
            <Ionicons name="albums" color={PRIMARY_COLOR} size={40} />
          </View>
          <View className="mt-4 flex-row items-center justify-center">
            <Text variant="body" className="text-center">
              Albums
            </Text>
            <Text variant="body" className="mx-4 text-center">
              4
            </Text>
          </View>
        </View>
      </SquircleView>
    </Container>
  );
};

export default Profile;
