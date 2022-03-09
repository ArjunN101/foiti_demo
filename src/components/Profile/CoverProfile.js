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
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

const CoverProfile = ({ isOwnProfile = false, isEdit = false }) => {
  const navigation = useNavigation();

  const showEditProfile = () => {
    navigation.navigate("Edit Profile");
  };
  return (
    <View>
      <View style={styles.coverConatiner}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6",
          }}
          style={styles.cover}
          // blurRadius={isEdit ? 2 : 0}
        />
        {isEdit && (
          <View style={styles.overlayContainer}>
            <TouchableOpacity>
              <Ionicons name="camera-outline" style={styles.changeIcon} />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.profileContainer}>
        <View>
          <View style={[isEdit ? styles.profileBoxEdit : styles.profileBox]}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/women/43.jpg",
              }}
              style={styles.profile}
              // blurRadius={isEdit ? 2 : 0}
            />

            {isEdit && (
              <View style={styles.overlayContainer}>
                <TouchableOpacity>
                  <Ionicons name="camera-outline" style={styles.changeIcon} />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        {!isEdit && (
          <View>
            {isOwnProfile ? (
              <TouchableOpacity
                style={styles.followButton}
                onPress={showEditProfile}
              >
                <Text style={{ fontWeight: "bold", color: COLORS.foitiGrey }}>
                  Edit
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.followButton}>
                <Text style={{ fontWeight: "bold", color: COLORS.foitiGrey }}>
                  Following
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
      <View></View>
    </View>
  );
};

export default CoverProfile;

const styles = StyleSheet.create({
  coverConatiner: {
    width,
    height: 200,
    backgroundColor: "#A0A0A0",
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
  profileBoxEdit: {
    position: "absolute",
    top: -55,
    height: 86,
    width: 86,
    borderRadius: 86 / 2,
    backgroundColor: "#A0A0A0",
    borderColor: "#fff",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  profileBox: {
    position: "absolute",
    top: -78,
    height: 86,
    width: 86,
    borderRadius: 86 / 2,
    backgroundColor: "#A0A0A0",
    borderColor: "#fff",
    borderWidth: 2,
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
    borderColor: COLORS.foitiGrey,
    borderWidth: 0.3,
    paddingVertical: 6,
    borderRadius: 2,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 7,
  },
  overlayContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2 )",
  },
  changeIcon: {
    color: "#fff",
    fontSize: 40,
  },
});
