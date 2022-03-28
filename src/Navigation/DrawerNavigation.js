import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawer from "../components/Navigation/CustomDrawer";
import HomeNavigation from "./TabNavigation";
import Explore from "../screens/Explore";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerType="front"
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
      }}
      sceneContainerStyle={{
        paddingTop: 0,
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Drawer Home" component={HomeNavigation} />
      <Drawer.Screen name="Explore_tab" component={Explore} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
