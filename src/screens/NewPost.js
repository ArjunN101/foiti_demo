import { ScrollView, StyleSheet, Text, View, Animated } from "react-native";
import React, { useRef } from "react";
import Header from "../components/NewPost/Header";
import ImageContainer from "../components/NewPost/ImageContainer";
import CaptionEditior from "../components/NewPost/CaptionEditior";
import { getCloser } from "../utils/getCloser";
// import CommentFooter from "../components/NewPost/CommentFooter";

const { diffClamp } = Animated;
const headerHeight = 55;

const NewPost = () => {
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

export default NewPost;

const styles = StyleSheet.create({});
