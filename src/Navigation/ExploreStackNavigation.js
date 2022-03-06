import { createStackNavigator } from "@react-navigation/stack";
import Place from "../screens/Place";
import Post from "../screens/Post";
import Explore from "../screens/Explore";

const Stack = createStackNavigator();

export default function ExploreStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Explore Stack" component={Explore} />
      <Stack.Screen name="Place" component={Place} />
      <Stack.Screen name="Explore Post" component={Post} />
    </Stack.Navigator>
  );
}
