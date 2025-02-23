import { FlatList } from 'react-native';
import { Container } from '~/components/Container';
import Card from '~/components/Home/Card';
import Image from '~/components/Image';
import Text from '~/components/Text';
import { PROPERTIES } from '~/core/constants/data';

const Home = () => {
  return (
    <Container>
      <Text variant="title">Home</Text>
      <FlatList
        data={PROPERTIES}
        renderItem={({ item }) => <Card property={item} />}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

export default Home;
