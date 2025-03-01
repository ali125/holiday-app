import { router } from 'expo-router';
import { Image, Pressable, View } from 'react-native';
import { Container } from '~/components/Container';

import Text from '~/components/Text';

const Welcome = () => {
  return (
    <Container>
      <View className="flex-1 items-center justify-center px-4 py-4">
        <View className="flex-1 items-center justify-center">
          <Image
            source={require('assets/images/logo.png')}
            className="h-10 w-44"
            resizeMode="contain"
          />
        </View>

        <Pressable
          onPress={() => {
            router.navigate('/signup');
          }}
          className="mt-4 w-full rounded-2xl bg-primary py-4">
          <Text variant="button" className="text-center">
            Sign up for free
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            router.navigate('/signin');
          }}
          className="mt-4 w-full rounded-2xl py-4">
          <Text variant="button" className="text-center text-primary">
            Already signed up? Login
          </Text>
        </Pressable>
      </View>
    </Container>
  );
};

export default Welcome;
