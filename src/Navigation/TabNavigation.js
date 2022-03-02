import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Feather } from "@expo/vector-icons";

import HomeScreen from "../screens/Home";
import Explore from "../screens/Explore";
import Search from "../screens/Search";
import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

function HomeNavigation() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      tabBarOptions={{
        headerShown: false,
        labelStyle: {
          color: "#000",
        },
        style: {
          height: 60,
          paddingBottom: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused }) => {
            if (focused) {
              return (
                <Text style={[styles.text, { fontWeight: "bold" }]}>Home</Text>
              );
            } else {
              return <Text style={styles.text}>Home</Text>;
            }
          },
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Ionicons name="home" style={{ fontSize: 20 }} />;
            } else {
              return <Ionicons name="home-outline" style={{ fontSize: 20 }} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: ({ focused }) => {
            if (focused) {
              return (
                <Text style={[styles.text, { fontWeight: "bold" }]}>
                  Explore
                </Text>
              );
            } else {
              return <Text style={styles.text}>Explore</Text>;
            }
          },
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Ionicons name="map" style={{ fontSize: 20 }} />;
            } else {
              return <Ionicons name="map-outline" style={{ fontSize: 20 }} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="New"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons name="add-circle-outline" style={{ fontSize: 22 }} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("Search");
          },
        })}
        options={{
          tabBarLabel: ({ focused }) => {
            if (focused) {
              return (
                <Text style={[styles.text, { fontWeight: "bold" }]}>
                  Search
                </Text>
              );
            } else {
              return <Text style={styles.text}>Search</Text>;
            }
          },
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Ionicons name="search" style={{ fontSize: 20 }} />;
            } else {
              return (
                <Ionicons name="search-outline" style={{ fontSize: 20 }} />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Search}
        options={{
          tabBarLabel: ({ focused }) => {
            if (focused) {
              return (
                <Text style={[styles.text, { fontWeight: "bold" }]}>
                  Profile
                </Text>
              );
            } else {
              return <Text style={styles.text}>Profile</Text>;
            }
          },
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <View style={[styles.imageConatiner, { borderColor: "#000" }]}>
                  <Image
                    source={{
                      uri: "https://randomuser.me/api/portraits/women/67.jpg",
                    }}
                    style={styles.image}
                  />
                </View>
              );
            } else {
              return (
                <View style={[styles.imageConatiner, { borderColor: "#fff" }]}>
                  <Image
                    source={{
                      uri: "https://randomuser.me/api/portraits/women/67.jpg",
                    }}
                    style={styles.image}
                  />
                </View>
              );
            }
          },
        }}
      />
      {/* <Tab.Screen
        name="Explore"
        component={DrawerNavigation}
        initialParams={{ screen: "Explore_tab" }}
      /> */}
    </Tab.Navigator>
  );
}

export default HomeNavigation;

const styles = StyleSheet.create({
  image: {
    height: 22,
    width: 22,
    borderRadius: 11,
  },
  imageConatiner: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.2,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 10,
  },
});
