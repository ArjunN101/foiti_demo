import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Router from "./src/Navigation/Router";
import AppLoading from "expo-app-loading";
import store from "./src/Redux/store";
import { Provider } from "react-redux";

import { STYLES } from "resources";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_900Black,
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
    <Provider store={store}>
      <SafeAreaProvider style={STYLES.skipStatusBar}>
        <Router />
        {/* <StatusBar style="light" /> */}
      </SafeAreaProvider>
    </Provider>
  );
}
