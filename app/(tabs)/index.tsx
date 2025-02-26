import { FlatList } from 'react-native';
import { Container } from '~/components/Container';
import Card from '~/components/Home/Card';
import Discovery from '~/components/Home/Discovery';
import MainHeader from '~/components/Layout/MainHeader';
import { PROPERTIES } from '~/core/constants/data';

const Home = () => {
  return (
    <Container>
      <MainHeader />
      <FlatList
        data={PROPERTIES}
        ListHeaderComponent={() => <Discovery properties={PROPERTIES} />}
        renderItem={({ item }) => <Card property={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Home;
