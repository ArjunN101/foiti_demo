import { createStackNavigator } from "@react-navigation/stack";
import NewPost from "../screens/NewPost";

const Stack = createStackNavigator();

export default function NewPostNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="New Post" component={NewPost} />
    </Stack.Navigator>
  );
}
