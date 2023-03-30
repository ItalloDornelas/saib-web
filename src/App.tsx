import { ChakraProvider, theme } from '@chakra-ui/react';
import { AppLayout } from './modules/AppLayout';
import { Home } from './pages/Home';

export const App = () => (
  <ChakraProvider theme={theme}>
    <AppLayout>
      <Home />
    </AppLayout>
  </ChakraProvider>
);
