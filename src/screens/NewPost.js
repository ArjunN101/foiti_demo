import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/NewPost/Header";
import ImageContainer from "../components/NewPost/ImageContainer";
import CaptionEditior from "../components/NewPost/CaptionEditior";

const NewPost = () => {
  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View>
          <Header />
        </View>
        <View>
          <ImageContainer />
        </View>
        <View>
          <CaptionEditior />
        </View>
      </View>
    </ScrollView>
  );
};

export default NewPost;

const styles = StyleSheet.create({});
