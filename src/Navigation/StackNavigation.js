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
import ChangeEmail from "../screens/ChangeEmail";
import ChangePassword from "../screens/ChangePassword";
import ChangePhone from "../screens/ChangePhone";
import MaterialTopNavigation from "./MaterialTopNavigation";
import Feedback from "../screens/Feedback";
import HelpSupport from "../screens/HelpSupport";

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
      <Stack.Screen name="Change Email" component={ChangeEmail} />
      <Stack.Screen name="Change Password" component={ChangePassword} />
      <Stack.Screen name="Change Phone" component={ChangePhone} />
      <Stack.Screen name="FollowDetails" component={MaterialTopNavigation} />
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="HelpSupport" component={HelpSupport} />
    </Stack.Navigator>
  );
}
