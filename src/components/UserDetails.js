import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FOITI_CONTS } from "resources";

const UserDetails = () => {
  const [isFollowed, setIsFollowed] = useState(true);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: FOITI_CONTS.padding,
        paddingLeft: FOITI_CONTS.padding + 5,
        alignItems: "center",
      }}
    >
      <TouchableWithoutFeedback>
        <View style={styles.alignContent}>
          <View>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/women/67.jpg",
              }}
              style={styles.profile}
            />
          </View>
          <View style={{ paddingLeft: 10 }}>
            <Text style={styles.name}>Aaranghya Gagan</Text>
            <Text style={styles.username}>@aaran_officials</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.alignContent}>
        <TouchableOpacity
          onPress={() => {
            setIsFollowed(!isFollowed);
          }}
        >
          <SimpleLineIcons
            name={isFollowed ? "user-following" : "user-follow"}
            style={[
              isFollowed ? styles.iconColor : styles.blackIconColor,
              {
                fontSize: FOITI_CONTS.iconSize,
              },
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialCommunityIcons
            name="dots-vertical"
            style={{ fontSize: 22, paddingLeft: 15, color: COLORS.foitiGrey }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  alignContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
  },
  username: {
    fontSize: 13,
    lineHeight: 17,
  },
  iconColor: {
    color: COLORS.foitiRating,
  },
  blackIconColor: {
    color: COLORS.foitiGrey,
  },
  profile: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});
