import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Image from "react-native-scalable-image";
import { Dimensions } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

import UserDetails from "./UserDetails";
import PostEngagement from "./PostEngagement";
import { COLORS, FOITI_CONTS } from "../resources/theme";

const Post = ({ post }) => {
  return (
    <View>
      <UserDetails />
      <View>
        <Image
          width={Dimensions.get("window").width}
          source={{
            uri: `${post.uri}`,
          }}
        />
        <View style={styles.locationName}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <SimpleLineIcons name="location-pin" style={{ color: "#fff" }} />
            <Text style={{ color: "#fff", marginLeft: 4, fontSize: 13 }}>
              White Waterfall, Assam, India
            </Text>
          </View>
        </View>
      </View>
      <PostEngagement />
      {post.caption && (
        <View style={styles.caption}>
          <Text numberOfLines={3}>{post?.caption}</Text>
        </View>
      )}
      <View style={styles.border} />
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
