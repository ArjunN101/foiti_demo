import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { COLORS } from "../resources/theme";
import { Ionicons } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";
import { GOOGLE_PLACES_API } from "@env";
import { useDispatch } from "react-redux";
import { addPlaceData, updatePlaceData } from "../Redux/slices/addPlaceSlice";
import { addAddress } from "../Redux/slices/addAddressSlice";

const { width, _ } = Dimensions.get("screen");

const SuggestionRow = ({ item }) => {
  let arr = item.description.split(",");
  let otherText = arr.slice(1);
  const newText = otherText.join(",");
  return (
    <View style={{ width: width - 40 }}>
      <Text numberOfLines={1} style={{ fontWeight: "bold" }}>
        {arr[0]}
      </Text>
      <Text numberOfLines={1} style={{ color: COLORS.foitiGrey }}>
        {newText.trim()}
      </Text>
    </View>
  );
};

const AddPlaceLocation = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [prevScreen, setPrevScreen] = useState("");
  const refInput = useRef(null);

  useLayoutEffect(() => {
    setPrevScreen(route.params?.prev_screen);
  }, []);

  console.log(prevScreen);
  // addAddress;

  //   useEffect(() => {
  //     if (refInput.current.isFocused() === false) {
  //       refInput.current.focus();
  //     } else {
  //       return;
  //     }
  //   }, []);

  const notFound = () => {
    console.warn("No result found");
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.headerConatiner}>
        <View style={{ flex: 1, marginTop: -3 }}>
          <GooglePlacesAutocomplete
            placeholder="Search"
            isRowScrollable={false}
            minLength={2}
            debounce={300}
            ref={refInput}
            textInputProps={{
              placeholderTextColor: "#fff",
            }}
            styles={{
              textInputContainer: {
                marginLeft: 20,
                width: width - 60,
                height: 38,
                paddingLeft: 25,
                marginBottom: 20,
              },
              placeholderTextColor: { color: "#fff" },
              textInput: {
                height: 38,
                color: "#fff",
                fontSize: 14,
                backgroundColor: "#878787",
              },
              row: {
                backgroundColor: "#FFFFFF",
                paddingVertical: 10,
                // height: 50,
                flexDirection: "row",
              },
              separator: {
                height: 0,
                backgroundColor: "#c8c7cc",
              },
              loader: {
                flexDirection: "row",
                justifyContent: "flex-end",
                height: 20,
              },
            }}
            onPress={(data, details = null) => {
              let addressComponent = {};
              if (details != null) {
                details.address_components.map((address) => {
                  addressComponent[address.types[0]] = address.long_name;
                });

                const newPlace = {
                  name: details.name,
                  place_id: details.place_id,
                  fullAddress: details.formatted_address,
                  types: details.types,
                  address: addressComponent,
                  coordinates: details.geometry.location,
                };
                if (prevScreen == "addAddress") {
                  // const address = `${addressComponent.administrative_area_level_2}, ${addressComponent.administrative_area_level_1}, ${addressComponent.country}`;
                  dispatch(
                    addAddress({
                      name: details.name || "",
                      country: addressComponent.country,
                    })
                  );
                } else {
                  dispatch(updatePlaceData(newPlace));
                }
              }

              navigation.goBack();
            }}
            fetchDetails={true}
            enablePoweredByContainer={false}
            onFail={() => navigation.goBack()}
            onTimeout={() => navigation.goBack()}
            onNotFound={notFound}
            query={{
              key: `${GOOGLE_PLACES_API}`,
              language: "en",
              types: prevScreen == "addAddress" ? "(cities)" : "",
              // types: "(cities)",
            }}
            renderRow={(item) => <SuggestionRow item={item} />}
            // currentLocation={true}
            // currentLocationLabel="Current location"
          />
        </View>
      </View>
      <View style={styles.backContainer} />
      <Pressable
        style={styles.pressable}
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          } else {
            navigation.navigate("Home");
          }
        }}
      >
        <Ionicons name="md-arrow-back" style={styles.icon} />
      </Pressable>
    </View>
  );
};

export default AddPlaceLocation;

const styles = StyleSheet.create({
  headerConatiner: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  backContainer: {
    width,
    position: "absolute",
    top: 35,
    left: 0,
    borderBottomColor: COLORS.foitiGreyLight,
    borderBottomWidth: 0.2,
    paddingHorizontal: 15,
    paddingVertical: 10,
    // zIndex: 2,
  },
  pressable: {
    position: "absolute",
    top: 13,
    left: 13,
  },
  icon: {
    fontSize: 28,
    color: COLORS.foitiGrey,
  },
});
