import { ThemeProvider } from "styled-components"; 
import { StatusBar } from "react-native";
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'

import { Loading } from "src/Components/Loading";

import theme from "src/theme";

import { Routes } from "./src/routes";
import { NunitoSans_400Regular, NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans";

export default function app(){
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold});


  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
      barStyle='light-content'
      backgroundColor='transparent'
      translucent
      />
    {fontsLoaded? <Routes /> : <Loading/> }
    </ThemeProvider>

  )
}