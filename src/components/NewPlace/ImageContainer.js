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
import AppLoading from "expo-app-loading";
import { FOITI_CONTS } from "../../resources/theme";

const { width, height } = Dimensions.get("screen");

const ImageContainer = () => {
  const [locationSelected, setLocatonSelected] = useState(false);
  const navigation = useNavigation();
  const REDUXDATA = useSelector((state) => state.NEWPLACE);

  const [imageUri, setImageUri] = useState("");
  const [ratio, setRatio] = useState("");
  const [imageWidth, setImageWidth] = useState("");
  const [imageHeight, setImageHeight] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (REDUXDATA.images.length > 0) {
      setImageUri(REDUXDATA.images[0].uri);
      setImageWidth(parseFloat(REDUXDATA.images[0].width));
      setImageHeight(parseFloat(REDUXDATA.images[0].height));
      if (
        REDUXDATA.coordinates != "" &&
        REDUXDATA.coordinates != undefined &&
        REDUXDATA.name != "" &&
        REDUXDATA.name != undefined
      ) {
        setLocation(REDUXDATA.fullAddress);
        setLocatonSelected(true);
      } else {
        setLocatonSelected(false);
      }
    }
  }, [REDUXDATA]);

  const addLocation = () => {
    navigation.navigate("Add Place Location", { prev_screen: "addNewPost" });
  };
  return (
    <View style={{ backgroundColor: "#000" }}>
      {imageWidth != "" && imageHeight != "" && (
        <View>
          <ImageBackground
            style={{
              width,
              // minHeight: 400,
              aspectRatio: 1,
              // resizeMode: "center",
            }}
            resizeMode="center"
            // resizeMethod="scale"
            source={{
              uri: imageUri,
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
                      <Text
                        style={{ color: "#fff", marginLeft: 4, fontSize: 13 }}
                      >
                        {/* White Waterfall, Assam, India */}
                        {REDUXDATA.name}
                        {REDUXDATA.address?.administrative_area_level_1 != "" &&
                          REDUXDATA.address?.administrative_area_level_1 !=
                            undefined &&
                          `, ${REDUXDATA.address?.administrative_area_level_1}`}
                        , {REDUXDATA.address.country}
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
                <TouchableOpacity
                  style={styles.addLocation}
                  onPress={addLocation}
                >
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
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
      )}
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
    paddingHorizontal: 40,
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
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    bottom: 0,
    left: 0,
  },
});
