import React, { useState } from 'react';
import { FlatList, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container } from '~/components/Container';
import Header from '~/components/Layout/Header';
import { PROPERTIES } from '~/core/constants/data';
import SearchCard from '~/components/Search/SearchCard';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  return (
    <Container>
      <Header title="Search" />

      <View className="mx-4 flex-row items-center justify-center rounded-xl bg-gray-100 px-4">
        <View className="flex-row items-center justify-center py-3">
          <Ionicons name="search" size={20} color="gray" />
          <TextInput
            className="ml-2 flex-1"
            placeholder="Search by city..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            returnKeyType="search"
          />
        </View>
      </View>

      <FlatList
        data={PROPERTIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SearchCard property={item} />}
      />
    </Container>
  );
};

export default Search;
