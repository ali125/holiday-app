import { Container } from '~/components/Container';
import Image from '~/components/Image';
import Text from '~/components/Text';

const Home = () => {
  return (
    <Container>
      <Text variant="title">Home Page</Text>
      <Text variant="subtitle">Home Page</Text>
      <Text variant="display">Home Page</Text>
      <Text variant="body">Home Page</Text>
      <Text variant="body-primary">Home Page</Text>
      <Text variant="caption">Home Page</Text>
      <Text variant="caption-primary">Home Page</Text>
      <Image
        source="https://images.pexels.com/photos/30770767/pexels-photo-30770767/free-photo-of-classic-motorcycle-in-kerala-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        style={{ width: 300, height: 400 }}
      />
    </Container>
  );
};

export default Home;
