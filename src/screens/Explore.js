import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import HomeHeader from "../components/HomeHeader";

const Explore = () => {
  return (
    <View style={tw`bg-white flex-1`}>
      <HomeHeader />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});
