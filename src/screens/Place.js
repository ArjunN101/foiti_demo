import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Dimensions,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import * as ImagePicker from "expo-image-picker";

import { addPlaceData } from "../Redux/slices/addPlaceSlice";
import { COLORS } from "../resources/theme";
import PostPlaceHeader from "../components/Header/PostPlaceHeader";
import MapContainer from "../components/Place/MapContainer";
import NameComponent from "../components/Place/NameComponent";
import RatingReview from "../components/Place/RatingReview";
import { DEMOPOSTS } from "../utils/demo";

const windowWidth = Dimensions.get("window").width;

const FlatListHeader = () => {
  return (
    <View>
      <View style={{ marginLeft: -4 }}>
        <PostPlaceHeader title="Khardungla Pass" isProfile={false} />
        <MapContainer />
      </View>
      <View style={{ paddingHorizontal: 8 }}>
        <NameComponent />
        <RatingReview />
        <View style={{ marginBottom: 5 }}>
          <Text numberOfLines={1}>Guwahati, India</Text>
        </View>
        <View>
          <Pressable style={styles.directionContainer}>
            <MaterialCommunityIcons
              name="directions"
              style={{
                color: COLORS.foitiGrey,
                marginRight: 5,
                fontSize: 16,
              }}
            />
            <Text>Directions</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const FlatListFooter = ({ addPhoto }) => (
  <View
    style={{
      paddingVertical: 50,
      paddingHorizontal: windowWidth / 5,
      justifyContent: "center",
    }}
  >
    <Text style={{ textAlign: "center" }}>
      Looks like this is all there is. Why don't you add yours if you got
    </Text>
    <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
      <TouchableOpacity style={styles.FooterButton} onPress={addPhoto}>
        <Ionicons
          name="add-circle-outline"
          style={{ fontSize: 18, marginRight: 5 }}
        />
        <Text>Add A Photo</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const Place = () => {
  //ADD PHTOT FUNCTION START
  const navigation = useNavigation();
  const dispatch = useDispatch();

  //Image cropper selection
  const addPhoto = async () => {
    try {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        exif: true,
        quality: 1,
        crop: false,
      });

      if (pickerResult.cancelled === true) {
        return true;
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
  //ADD PHTOT FUNCTION END

  const _renderItem = ({ item }) => (
    <View>
      <TouchableWithoutFeedback>
        <View>
          <Image source={{ uri: `${item.uri}` }} style={styles.image} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          contentContainerStyle={{ paddingHorizontal: 4 }}
          ListHeaderComponent={<FlatListHeader />}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: 4,
          }}
          numColumns={2}
          data={DEMOPOSTS.slice(0, 3)}
          renderItem={_renderItem}
          keyExtractor={(item) => item.id}
          ListFooterComponent={<FlatListFooter addPhoto={addPhoto} />}
        />
      </View>
    </View>
  );
};

export default Place;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  directionContainer: {
    width: 125,
    borderBottomColor: "#000",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    marginBottom: 12,
  },
  image: {
    width: (windowWidth - 12) / 2,
    height: (windowWidth - 12) / 2,
    resizeMode: "cover",
  },
  FooterButton: {
    flexDirection: "row",
    borderColor: COLORS.foitiGrey,
    borderWidth: 1,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    paddingVertical: 6,
    marginTop: 15,
  },
});
