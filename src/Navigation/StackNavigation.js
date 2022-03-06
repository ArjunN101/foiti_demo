import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import DrawerNavigation from "./DrawerNavigation";
import Search from "../screens/Search";
import NewPost from "../screens/NewPost";
import AddPlaceLocation from "../screens/AddPlaceLocation";

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home Navigation" component={DrawerNavigation} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="New Post" component={NewPost} />
      <Stack.Screen name="Add Place Location" component={AddPlaceLocation} />
    </Stack.Navigator>
  );
}
