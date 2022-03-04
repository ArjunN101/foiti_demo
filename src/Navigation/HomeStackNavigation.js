import { createStackNavigator } from "@react-navigation/stack";
import Place from "../screens/Place";
import Post from "../screens/Post";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default function HomeStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home Stack" component={Home} />
      <Stack.Screen name="Place" component={Place} />
      <Stack.Screen name="Post" component={Post} />
    </Stack.Navigator>
  );
}
