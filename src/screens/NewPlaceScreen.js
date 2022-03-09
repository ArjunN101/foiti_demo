import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Header from "../components/NewPlace/Header";
import ImageContainer from "../components/NewPlace/ImageContainer";
import CaptionEditior from "../components/NewPlace/CaptionEditior";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addPlaceData, removePlaceData } from "../Redux/slices/addPlaceSlice";
// import CommentFooter from "../components/NewPlace/CommentFooter";

const NewPlaceScreen = () => {
  const navigation = useNavigation();
  const REDUXDATA = useSelector((state) => state.NEWPLACE);
  const [postActive, setPostActive] = useState(false);
  const dispatch = useDispatch();

  // useLayoutEffect(() => {
  //   openImagePickerAsync();
  // }, []);

  useEffect(() => {
    if (
      REDUXDATA?.images[0]?.uri != null &&
      REDUXDATA?.images[0]?.uri != undefined &&
      REDUXDATA?.place_id != null &&
      REDUXDATA?.place_id != undefined
    ) {
      console.log("Status");
      setPostActive(true);
    }
  }, [REDUXDATA]);

  const backPressed = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate("Home Navigation");
    }

    dispatch(removePlaceData());
  };

  const onPost = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Review" }],
    });
    // navigation.navigate("Review");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header
        activeStatus={postActive}
        backPressed={backPressed}
        onPost={onPost}
      />
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
