import { SafeAreaView } from 'react-native';

type Props = {
  children: React.ReactNode;
};

export const Container = ({ children }: Props) => {
  return <SafeAreaView className={styles.container}>{children}</SafeAreaView>;
};

const styles = {
  container: 'flex flex-1',
};
