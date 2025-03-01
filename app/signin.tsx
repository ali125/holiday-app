import { router } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, TextInput, View } from 'react-native';
import { Container } from '~/components/Container';
import Header from '~/components/Layout/Header';
import Text from '~/components/Text';

type Props = {};

const Signin = ({}: Props) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <Container>
      <Header title="Sign Up" />
      <View className="flex-1 p-4">
        <View className="mb-8 mt-24">
          <View className="flex-row items-center justify-center">
            <Image
              source={require('assets/images/logo.png')}
              className="h-10 w-44"
              resizeMode="contain"
            />
          </View>
          <Text variant="subtitle-primary" className="mt-4 text-center">
            Welcome Back
          </Text>
        </View>
        <TextInput
          className="mt-4 rounded-xl bg-gray-100 px-4 py-6"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          secureTextEntry
          className="mt-4 rounded-xl bg-gray-100 px-4 py-6"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
        />
        <Pressable
          onPress={() => {
            router.navigate('/(tabs)');
          }}
          className="mt-4 w-full rounded-2xl bg-primary py-4">
          <Text variant="button" className="text-center">
            Sign In
          </Text>
        </Pressable>
      </View>
    </Container>
  );
};

export default Signin;
