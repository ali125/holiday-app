import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Image } from 'react-native';
import { PRIMARY_COLOR } from '~/core/theme/colors';

const MainHeader = () => {
  return (
    <View className="px-4 pb-4 pt-2">
      <View className="flex flex-row items-center justify-between">
        <Image
          source={require('assets/images/logo.png')}
          className="h-5 w-24"
          resizeMode="contain"
        />

        <Ionicons name="sparkles" size={24} color={PRIMARY_COLOR} />
      </View>
    </View>
  );
};

export default MainHeader;
