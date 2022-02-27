import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import axios from "axios";

import { images, STYLES, COLORS } from "resources";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import HomeHeader from "../components/HomeHeader";
import { DEV_BACKEND_URL } from "@env";
import SuggestedCreators from "../components/SuggestedCreators";

const Home = () => {
  // const [users, setUsers] = useState({});

  // useEffect(async () => {
  //   await axios.get(`${DEV_BACKEND_URL}/users`).then((res) => {
  //     setUsers(res.data);
  //   });
  // }, []);

  // console.log(users);

  return (
    <View style={tw`bg-white flex-1`}>
      <HomeHeader />

      {/* IF USER HAS NOT FOLLOWED OTHER USERS START */}
      <View style={[tw`h-full justify-center px-5`, { alignItems: "center" }]}>
        <Text style={tw`text-center`}>
          Looks like you have not followed anyone. Why don't you start by
          exploring?
        </Text>
      </View>
      {/* IF USER HAS NOT FOLLOWED OTHER USERS END */}

      {/* IF USER HAS FOLLWED OTHER USERS START */}
      <ScrollView></ScrollView>
      {/* IF USER HAS FOLLWED OTHER USERS END */}
    </View>
  );
};

export default Home;
