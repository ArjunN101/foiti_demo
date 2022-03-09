import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import DrawerNavigation from "./DrawerNavigation";
import Search from "../screens/Search";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import AddPlaceLocation from "../screens/AddPlaceLocation";
import Review from "../screens/Review";
import EditProfile from "../screens/EditProfile";
import Notification from "../screens/Notification";
import Settings from "../screens/Settings";

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home Navigation" component={DrawerNavigation} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="New Place" component={NewPlaceScreen} />
      <Stack.Screen name="Add Place Location" component={AddPlaceLocation} />
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen name="Edit Profile" component={EditProfile} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
