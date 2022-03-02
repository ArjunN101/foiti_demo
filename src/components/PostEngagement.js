import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

import { Ionicons } from "@expo/vector-icons";
import { STYLES, COLORS, FOITI_CONTS } from "resources";
//Ionicons  - chatbox-outline, heart, heart-outline, share-social-outline, bookmark-outline, bookmark

const PostEngagement = () => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const likePress = () => {
    setLiked(!liked);
  };
  const savePress = () => {
    setSaved(!saved);
  };

  return (
    <View
      style={{
        flex: 1,
        paddingVertical: FOITI_CONTS.padding,
        paddingHorizontal: FOITI_CONTS.padding + 5,
      }}
    >
      <View style={styles.iconContainer}>
        <View style={styles.leftIconContainer}>
          <TouchableWithoutFeedback onPress={likePress}>
            <Ionicons
              name={liked ? "heart" : "heart-outline"}
              style={[
                liked ? styles.redIconColor : styles.blackIconColor,
                styles.icons,
              ]}
            />
          </TouchableWithoutFeedback>
          <TouchableOpacity>
            <Ionicons
              name="chatbox-outline"
              style={[styles.icons, styles.blackIconColor]}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="share-social-outline"
              style={[styles.icons, styles.blackIconColor]}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableWithoutFeedback onPress={savePress}>
            <Ionicons
              name={saved ? "bookmark" : "bookmark-outline"}
              style={[styles.icons, styles.blackIconColor]}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
      {/* <View style={{ flexDirection: "row", paddingVertical: 4 }}>
        <Text style={styles.comments_Likes}>84 Likes</Text>
        <Text style={[styles.comments_Likes, { marginLeft: 15 }]}>
          32 Comments
        </Text>
      </View> */}
    </View>
  );
};

export default PostEngagement;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftIconContainer: {
    flexDirection: "row",
    width: "35%",
    justifyContent: "space-between",
  },
  icons: {
    fontSize: 20,
  },
  redIconColor: {
    color: "#ef2828",
  },
  blackIconColor: {
    color: COLORS.foitiGrey,
  },
  comments_Likes: {
    color: COLORS.foitiGrey,
    fontSize: 12,
  },
});
