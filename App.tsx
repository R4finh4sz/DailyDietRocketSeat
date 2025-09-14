import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';
import { Slot } from 'expo-router';

import { Loading } from 'src/Components/Loading';
import theme from 'src/theme';

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular, 
    NunitoSans_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Slot /> : <Loading />}
    </ThemeProvider>
  );
}