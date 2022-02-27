import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Router from "./src/Navigation/Router";
import AppLoading from "expo-app-loading";

import { STYLES } from "resources";

import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";

export default function App() {
  let [fontsLoaded, error] = useFonts({
    RobotoRegular: Roboto_400Regular,
    RobotoBold: Roboto_700Bold,
    RobotoBlack: Roboto_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider style={STYLES.skipStatusBar}>
      <Router />
      {/* <StatusBar style="light" /> */}
    </SafeAreaProvider>
  );
}
