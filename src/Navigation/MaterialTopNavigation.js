import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet, Text } from "react-native";
import PostPlaceHeader from "../components/Header/PostPlaceHeader";
import { COLORS } from "../resources/theme";
import Followers from "../screens/Followers";
import Following from "../screens/Following";

const Tab = createMaterialTopTabNavigator();

const MaterialTopNavigation = ({ route }) => {
  return (
    <>
      <PostPlaceHeader title={route.params.name} isProfile={false} />
      <Tab.Navigator
        initialRouteName={route.params.initialRoute}
        screenOptions={{
          headerShown: false,
        }}
        tabBarOptions={{
          activeTintColor: COLORS.foitiGrey,
          inactiveTintColor: COLORS.foitiDisabled,
          indicatorStyle: {
            backgroundColor: COLORS.foiti,
          },
          labelStyle: {
            fontSize: 14,
            fontWeight: "bold",
            textTransform: "none",
          },
          style: {
            elevation: 0,
            borderBottomWidth: 0.3,
          },
        }}
      >
        <Tab.Screen
          name="Follower"
          component={Followers}
          options={{
            tabBarLabel: "Followers",
          }}
        />
        <Tab.Screen name="Following" component={Following} />
      </Tab.Navigator>
    </>
  );
};

export default MaterialTopNavigation;

const styles = StyleSheet.create({
  tabLabel: {},
});
