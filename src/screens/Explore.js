import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { SimpleLineIcons } from "@expo/vector-icons";
import { COLORS, FOITI_CONTS } from "../resources/theme";

import HomeHeader from "../components/HomeHeader";
const windowWidth = Dimensions.get("window").width;

const Explore = () => {
  const DATA = [
    {
      id: 10,
      uri: "https://images.unsplash.com/photo-1614085101945-74f6dde22e28",
      caption:
        "This is what holidays, travels, vacations are about. It is not really rest or even leisure we chase. We strain to renew our capacity to wonder, to shock ourselves into astonishment once again.",
      name: "Songrampuji Waterfall",
      location: "Meghalay, India",
    },
    {
      id: 11,
      uri: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      caption:
        "This is what holidays, travels, vacations are about. It is not really rest or even leisure we chase. We strain to renew our capacity to wonder, to shock ourselves into astonishment once again.",
      name: "Songrampuji Waterfall",
      location: "Meghalay, India",
    },
    {
      id: 12,
      uri: "https://images.unsplash.com/photo-1556609894-0ae309cb8354?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      caption:
        "This is what holidays, travels, vacations are about. It is not really rest or even leisure we chase. We strain to renew our capacity to wonder, to shock ourselves into astonishment once again.",
      name: "Songrampuji Waterfall",
      location: "Meghalay, India",
    },
    {
      id: 13,
      uri: "https://images.unsplash.com/photo-1556609894-0ae309cb8354?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      caption:
        "This is what holidays, travels, vacations are about. It is not really rest or even leisure we chase. We strain to renew our capacity to wonder, to shock ourselves into astonishment once again.",
      name: "Songrampuji Waterfall",
      location: "Meghalay, India",
    },
    {
      id: 2,
      uri: "https://nypost.com/wp-content/uploads/sites/2/2020/08/new-york-06.jpg?quality:80&strip:all",
      caption:
        "Travel as much as you can, travel as far as you can, travel and find yourself.",
      name: "Laitlum Canyon",
      location: "Meghalay, India",
    },
    {
      id: 3,
      uri: "https://images.unsplash.com/photo-1546412414-e1885259563a?ixlib:rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHViYWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      caption:
        "Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind.",
      name: "Umiam Lake",
      location: "Meghalay, India",
    },
    {
      id: 4,
      uri: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      caption:
        "I don’t know where I’m going from here but I promise it won’t be boring.",
      name: "Chandubi Lake",
      location: "Assam, India",
    },
    {
      id: 5,
      uri: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Sangacholing Monastry",
      location: "Sikkim, India",
    },
    {
      id: 6,
      uri: "https://s3-eu-west-1.amazonaws.com/eflanguagesblog/wp-content/uploads/2019/10/17085823/10-things-you-should-know-before-moving-to-New-York_568x464.jpg",
      caption:
        "Once the travel bug bites there is no known antidote, and I know that I shall be happily infected until the end of my life.",
      name: "Depor Bil",
      location: "Assam, India",
    },
    {
      id: 7,
      uri: "https://images.unsplash.com/photo-1523560220134-8f26a720703c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1227&q=80",
      caption:
        "Once the travel bug bites there is no known antidote, and I know that I shall be happily infected until the end of my life.",
      name: "Depor Bil",
      location: "Assam, India",
    },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  // const renderItem = ({ item }) => <Item title={item.title} />;
  const renderItem = ({ item }) => (
    <View>
      <TouchableWithoutFeedback>
        <View>
          <Image source={{ uri: `${item.uri}` }} style={styles.image} />
          <View style={styles.locationName}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <SimpleLineIcons
                name="location-pin"
                style={{ color: "#fff", fontSize: 12 }}
              />
              <View style={{ marginLeft: 4 }}>
                <Text numberOfLines={1} style={{ color: "#fff", fontSize: 10 }}>
                  {item.name}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{ color: "#fff", fontSize: 8, lineHeight: 8 }}
                >
                  {item.location}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );

  return (
    <View style={tw`bg-white flex-1`}>
      {/* <HomeHeader /> */}
      <View style={{ paddingHorizontal: 4 }}>
        <FlatList
          ListHeaderComponent={<HomeHeader />}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: 4,
          }}
          numColumns={2}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  locationName: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    width: "100%",
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    bottom: 0,
    left: 0,
  },
  image: {
    width: (windowWidth - 12) / 2,
    height: (windowWidth - 12) / 2,
    resizeMode: "cover",
  },
});
