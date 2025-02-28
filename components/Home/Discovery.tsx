import React from 'react';
import { FlatList } from 'react-native';
import DiscoveryItem from './DiscoveryItem';

type Props = {
  properties: Property[];
};

const Discovery: React.FC<Props> = ({ properties }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={properties.reverse()}
      renderItem={({ item }) => <DiscoveryItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Discovery;
