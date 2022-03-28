import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Image from "react-native-scalable-image";
import { Dimensions } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

import UserDetails from "../UserDetails";
import PostEngagement from "./PostEngagement";
import { COLORS, FOITI_CONTS } from "../../resources/theme";
import SuggestedCreators from "../SuggestedCreators";
import { DEV_BACKEND_URL } from "@env";
import axios from "axios";

import { DEMOUSERS } from "../../utils/demo";
import { useNavigation } from "@react-navigation/native";

const Post = ({ post }) => {
  const navigation = useNavigation();

  const [hasSize, setHasSize] = useState(false);

  const openPost = () => {
    navigation.navigate("Post", { post: post.item });
  };

  return (
    <View>
      {post.item.id == 4 && DEMOUSERS.length > 0 && (
        <SuggestedCreators users={DEMOUSERS} />
      )}
      <View>
        <UserDetails />
        <Pressable onPress={openPost}>
          <View
            style={[
              !hasSize && { height: 320 },
              {
                maxHeight: 600,
                overflow: "hidden",
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
          >
            <Image
              onSize={() => setHasSize(true)}
              width={Dimensions.get("window").width}
              source={{
                uri: `${post.item.uri}`,
              }}
            />
            <View style={styles.locationName}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <SimpleLineIcons
                  name="location-pin"
                  style={{ color: "#fff" }}
                />
                <Text style={{ color: "#fff", marginLeft: 4, fontSize: 13 }}>
                  White Waterfall, Assam, India
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
        <PostEngagement />
        {post.item.caption && (
          <View style={styles.caption}>
            <Text numberOfLines={3}>{post?.item.caption}</Text>
          </View>
        )}
        <View style={styles.border} />
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
  },
  caption: {
    paddingHorizontal: FOITI_CONTS.padding + 5,
    paddingBottom: FOITI_CONTS.padding,
  },
  border: {
    borderBottomColor: "#ededed",
    borderBottomWidth: 10,
  },
  locationName: {
    paddingHorizontal: FOITI_CONTS.padding + 5,
    paddingVertical: 5,
    width: "100%",
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    bottom: 0,
    left: 0,
  },
});
