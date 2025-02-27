import React from 'react';
import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Text from '../Text';

type Props = {
  title: string;
};

const Header: React.FC<Props> = ({ title }) => {
  const onBack = () => {
    router.back();
  };
  return (
    <View className="mb-4 flex flex-row items-center justify-between pb-2">
      <View className="flex flex-row items-center justify-center">
        <Pressable onPress={onBack}>
          <Ionicons name="arrow-back" size={24} />
        </Pressable>
        <Text variant="subtitle" className="mx-2 text-center">
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Header;
