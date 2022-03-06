import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../../resources/theme";

const { width, height } = Dimensions.get("screen");

const CoverProfile = () => {
  return (
    <View>
      <View style={styles.coverConatiner}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6",
          }}
          style={styles.cover}
        />
      </View>
      <View style={styles.profileContainer}>
        <View>
          <View style={styles.profileBox}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/women/43.jpg",
              }}
              style={styles.profile}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.followButton}>
            <Text style={{ fontWeight: "bold", color: COLORS.foitiGrey }}>
              Following
              {/* Edit */}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CoverProfile;

const styles = StyleSheet.create({
  coverConatiner: {
    width,
    height: 200,
    backgroundColor: COLORS.foitiGreyLight,
  },
  cover: {
    width,
    height: 200,
    resizeMode: "cover",
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingTop: 8,
    paddingHorizontal: 10,
  },
  profileBox: {
    position: "absolute",
    top: -78,
    height: 86,
    width: 86,
    borderRadius: 86 / 2,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  profile: {
    height: 82,
    width: 82,
    borderRadius: 41,
    resizeMode: "cover",
  },

  followButton: {
    borderColor: COLORS.foitiGreyt,
    borderWidth: 0.3,
    paddingVertical: 6,
    borderRadius: 2,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 7,
  },
});
