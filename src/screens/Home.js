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

import { images, STYLES, COLORS, FOITI_CONTS } from "resources";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import HomeHeader from "../components/HomeHeader";
import { DEV_BACKEND_URL } from "@env";
import SuggestedCreators from "../components/SuggestedCreators";
import Post from "../components/Post";

const Home = () => {
  const DATA = [
    {
      uri: "https://images.unsplash.com/photo-1614085101945-74f6dde22e28",
      caption:
        "This is what holidays, travels, vacations are about. It is not really rest or even leisure we chase. We strain to renew our capacity to wonder, to shock ourselves into astonishment once again.",
    },
    {
      uri: "https://nypost.com/wp-content/uploads/sites/2/2020/08/new-york-06.jpg?quality=80&strip=all",
      caption:
        "Travel as much as you can, travel as far as you can, travel and find yourself.",
    },
    {
      uri: "https://images.unsplash.com/photo-1546412414-e1885259563a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHViYWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      caption:
        "Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind.",
    },
    {
      uri: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      caption:
        "I don’t know where I’m going from here but I promise it won’t be boring.",
    },
    {
      uri: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      uri: "https://s3-eu-west-1.amazonaws.com/eflanguagesblog/wp-content/uploads/2019/10/17085823/10-things-you-should-know-before-moving-to-New-York_568x464.jpg",
      caption:
        "Once the travel bug bites there is no known antidote, and I know that I shall be happily infected until the end of my life.",
    },
  ];
  // const [users, setUsers] = useState({});

  // useEffect(async () => {
  //   await axios.get(`${DEV_BACKEND_URL}/users`).then((res) => {
  //     setUsers(res.data);
  //   });
  // }, []);

  // console.log(users);

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={tw`bg-white flex-1`}>
        <HomeHeader />

        {/* IF USER HAS NOT FOLLOWED OTHER USERS START */}
        <View style={[tw`h-full`]}>
          <View
            style={{
              paddingHorizontal: 25,
              paddingVertical: 60,
              backgroundColor: "#ededed",
            }}
          >
            <Text style={tw`text-center`}>
              Looks like you have not followed anyone. Why don't you start by
              exploring?
            </Text>
          </View>
          <View
            style={{
              paddingVertical: 10,
              paddingLeft: FOITI_CONTS.padding + 5,
              borderBottomWidth: 0.5,
              borderBottomColor: COLORS.foitiGreyLight,
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold" }}>Suggested Posts</Text>
            </View>
          </View>
          <View>
            {DATA.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </View>
        </View>
        {/* IF USER HAS NOT FOLLOWED OTHER USERS END */}

        {/* IF USER HAS FOLLWED OTHER USERS START */}
        {/* IF USER HAS FOLLWED OTHER USERS END */}
      </View>
    </ScrollView>
  );
};

export default Home;
