import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
// import Image from "react-native-scalable-image";
import { SimpleLineIcons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { FOITI_CONTS } from "../../resources/theme";

const { width, height } = Dimensions.get("screen");

const ImageContainer = () => {
  const [locationSelected, setLocatonSelected] = useState(true);
  const [image, setImage] = useState({});
  const navigation = useNavigation();
  const REDUXDATA = useSelector((state) => state.NEWPLACE);

  const [imageUri, setImageUri] = useState("");
  const [ratio, setRatio] = useState("");
  const [imageWidth, setImageWidth] = useState("");
  const [imageHeight, setImageHeight] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    console.log(REDUXDATA);
    if (REDUXDATA.images.length > 0) {
      setImageUri(REDUXDATA.images[0].uri);
      setImageWidth(parseFloat(REDUXDATA.images[0].width));
      setImageHeight(parseFloat(REDUXDATA.images[0].height));
      // const width = parseFloat(REDUXDATA.images[0].width);
      // const height = parseFloat(REDUXDATA.images[0].height);
      // const ration1 = width / height;
      // setRatio(ration1);
      // setImageWidth(REDUXDATA.images[0].width);
      // setImageHeight(REDUXDATA.images[0].height);
    }
  }, [REDUXDATA]);

  console.log(ratio);

  const addLocation = () => {
    navigation.navigate("Add Place Location");
  };
  return (
    <View>
      <ImageBackground
        style={{
          width: width,
          aspectRatio: 1,
          resizeMode: "contain",
        }}
        source={{
          uri:
            imageUri ||
            "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
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
      </ImageBackground>
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
