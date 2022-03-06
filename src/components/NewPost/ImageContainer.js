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
import { SimpleLineIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

const ImageContainer = () => {
  const [locationSelected, setLocatonSelected] = useState(true);
  return (
    <View>
      <Image
        width={width}
        background={true}
        source={{
          uri: "https://images.unsplash.com/photo-1575036578784-094bf35ecff9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format",
        }}
      >
        {locationSelected ? (
          <View style={styles.selectedLocationContainer}>
            <SimpleLineIcons name="location-pin" style={styles.icon2} />
            <View>
              <Text style={{ color: "#fff", fontSize: 16 }}>Umiam Lake</Text>
              <Text style={{ color: "#fff", fontSize: 16 }}>
                Meghalaya, India
              </Text>
            </View>
          </View>
        ) : (
          <View style={styles.addLocationContainer}>
            <TouchableOpacity style={styles.addLocation}>
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
    paddingHorizontal: 40,
  },
  icon: {
    color: "#fff",
    fontSize: 25,
    marginBottom: 10,
  },
  selectedLocationContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    minWidth: width / 1.5,
    padding: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  icon2: {
    color: "#fff",
    fontSize: 30,
    marginRight: 5,
  },
});
