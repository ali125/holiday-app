import React from 'react';
import { MasonryFlashList } from '@shopify/flash-list';
import { Container } from '~/components/Container';
import FavoriteCard from '~/components/Favorite/FavoriteCard';
import Header from '~/components/Layout/Header';
import { FAVORITES } from '~/core/constants/data';

const Favorite = () => {
  return (
    <Container>
      <Header title="Favorite" />
      <MasonryFlashList
        numColumns={2}
        estimatedItemSize={200}
        data={FAVORITES}
        renderItem={({ item }) => <FavoriteCard property={item} />}
        keyExtractor={(item) => item.id}
      />
      {/* <FlatList
        numColumns={2}
        data={FAVORITES}
        renderItem={({ item }) => <FavoriteCard property={item} />}
        keyExtractor={(item) => item.id}
      /> */}
    </Container>
  );
};

export default Favorite;
