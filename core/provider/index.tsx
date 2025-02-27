import { ThemeProvider } from '@react-navigation/native';
import React, { PropsWithChildren } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import theme from '../theme';

const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <GestureHandlerRootView>
      <ThemeProvider value={theme}>{children}</ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default Provider;
