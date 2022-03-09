import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeStackNavigation from "./HomeStackNavigation";
import ExploreStackNavigation from "./ExploreStackNavigation";
import OwnProfile from "../screens/OwnProfile";
import Search from "../screens/Search";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useDispatch, useSelector } from "react-redux";
import { addPlaceData } from "../Redux/slices/addPlaceSlice";
import * as ImagePicker from "expo-image-picker";

const Tab = createBottomTabNavigator();

function HomeNavigation() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  //Image cropper selection
  let openImagePickerAsync = async () => {
    try {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        exif: true,
        quality: 1,
        crop: false,
      });

      // console.log(pickerResult);

      if (pickerResult.cancelled === true) {
        return true;
        console.log("Cancled");
        if (navigation.canGoBack()) {
          navigation.goBack();
        } else {
          navigation.navigate("Home Navigation");
        }
      }

      const image = [
        {
          uri: pickerResult.uri,
          width: pickerResult.exif.ImageWidth,
          height: pickerResult.exif.ImageLength,
          type: pickerResult.type,
          coordinates: {
            lat: pickerResult.exif.GPSLatitude || "",
            lng: pickerResult.exif.GPSLongitude || "",
          },
        },
      ];

      // console.log(image);

      dispatch(
        addPlaceData({
          images: image,
        })
      );

      navigation.navigate("New Place");
    } catch (err) {
      console.log("Error", err.message);
    }
  };

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
        component={HomeStackNavigation}
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
        component={ExploreStackNavigation}
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
        component={NewPlaceScreen}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            // navigation.navigate("New Place");
            openImagePickerAsync();
          },
        })}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons name="add-circle-outline" style={{ fontSize: 22 }} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search Tab"
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
        component={OwnProfile}
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
        name="StackNavigation"
        component={StackNavigation}
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
