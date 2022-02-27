import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { images, STYLES, COLORS } from "resources";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import HomeHeader from "../components/HomeHeader";

const Home = () => {
  return (
    <View style={tw`bg-white flex-1`}>
      <HomeHeader />
      <View style={tw`px-5 py-5`}>
        <Text style={tw`text-xl font-bold`}>Suggested Creators</Text>

        <View>
          <FlatList />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
