import React from 'react';
import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Text from '../Text';

type Props = {
  title: string;
  headerAction?: {
    name: keyof typeof Ionicons.glyphMap;
    onPress: () => void;
  };
};

const Header: React.FC<Props> = ({ title, headerAction }) => {
  const onBack = () => {
    router.back();
  };
  return (
    <View className="flex flex-row items-center justify-between px-4 py-4">
      <View className="flex flex-row items-center justify-center gap-2">
        <Pressable onPress={onBack}>
          <Ionicons name="arrow-back" size={24} />
        </Pressable>
        <Text variant="subtitle" className="mx-2 text-center">
          {title}
        </Text>
      </View>

      {headerAction && (
        <Pressable onPress={headerAction.onPress}>
          <Ionicons name={headerAction.name} size={24} />
        </Pressable>
      )}
    </View>
  );
};

export default Header;
