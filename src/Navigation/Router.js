import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Welcome from "../screens/Welcome";
import DrawerNavigation from "./DrawerNavigation";
import Search from "../screens/Search";

import AuthNavigation from "./AuthNavigation";
import StackNavigation from "./StackNavigation";

const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
        <Stack.Screen name="StackNavigation" component={StackNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
