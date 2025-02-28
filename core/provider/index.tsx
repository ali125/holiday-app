import { ThemeProvider } from '@react-navigation/native';
import React, { PropsWithChildren } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import theme from '../theme';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={theme}>
        <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default Provider;
