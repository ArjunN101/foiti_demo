import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import Header from "../components/NewPlace/Header";
import ImageContainer from "../components/NewPlace/ImageContainer";
import CaptionEditior from "../components/NewPlace/CaptionEditior";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addPlaceData } from "../Redux/slices/addPlaceSlice";
// import CommentFooter from "../components/NewPost/CommentFooter";

const NewPlaceScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // useLayoutEffect(() => {
  //   openImagePickerAsync();
  // }, []);

  let openImagePickerAsync = async () => {
    try {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        exif: true,
        quality: 1,
        crop: false,
      });

      console.log(pickerResult);

      if (pickerResult.cancelled === true) {
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
    } catch (err) {
      console.log("Error", err.message);
    }

    // console.log("Latitude ", pickerResult.exif.GPSLatitude);
    // console.log("Longitutde", pickerResult.exif.GPSLongitude);
    // console.log("Image Width", pickerResult.exif.ImageWidth);
    // console.log("ImageHeight", pickerResult.exif.ImageLength);
    // console.log("ImageType", pickerResult.type);
    // console.log("ImageUri", pickerResult.uri);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />
      <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ImageContainer />
        <CaptionEditior />
        {/* <CommentFooter /> */}
      </ScrollView>
    </View>
  );
};

export default NewPlaceScreen;

const styles = StyleSheet.create({});
