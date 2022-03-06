import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import Image from "react-native-scalable-image";
import { SimpleLineIcons, Feather } from "@expo/vector-icons";
import { FOITI_CONTS } from "../../resources/theme";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

const ImageContainer = () => {
  const [locationSelected, setLocatonSelected] = useState(true);
  const navigation = useNavigation();

  const addLocation = () => {
    navigation.navigate("Add Place Location");
  };
  return (
    <View>
      <Image
        width={width}
        background={true}
        source={{
          // uri: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
          uri: "https://images.unsplash.com/photo-1459787915554-b34915863013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=333&q=80",
        }}
      >
        {locationSelected ? (
          <View style={styles.locationName}>
            <TouchableOpacity onPress={addLocation}>
              <View
                style={[
                  styles.flexDisplay,
                  { justifyContent: "space-between" },
                ]}
              >
                <View style={styles.flexDisplay}>
                  <SimpleLineIcons
                    name="location-pin"
                    style={{ color: "#fff" }}
                  />
                  <Text style={{ color: "#fff", marginLeft: 4, fontSize: 13 }}>
                    White Waterfall, Assam, India
                  </Text>
                </View>
                <View>
                  <Feather
                    name="edit"
                    style={{ color: "#fff", fontSize: 13 }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.addLocationContainer}>
            <TouchableOpacity style={styles.addLocation} onPress={addLocation}>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <SimpleLineIcons name="location-pin" style={styles.icon} />
                <Text style={{ color: "#fff", fontSize: 17 }}>
                  Add Location
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </Image>
    </View>
  );
};

export default ImageContainer;

const styles = StyleSheet.create({
  flexDisplay: {
    flexDirection: "row",
    alignItems: "center",
  },
  addLocationContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  addLocation: {
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  icon: {
    color: "#fff",
    fontSize: 25,
    marginBottom: 10,
  },
  locationName: {
    paddingHorizontal: FOITI_CONTS.padding,
    paddingVertical: 5,
    width: "100%",
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    bottom: 0,
    left: 0,
  },
});
