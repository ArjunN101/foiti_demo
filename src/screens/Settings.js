import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import PostPlaceHeader from "../components/Header/PostPlaceHeader";
import { COLORS } from "../resources/theme";
import { useNavigation } from "@react-navigation/native";

const Settings = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <PostPlaceHeader title="Settings" isProfile={false} />
      <View style={styles.mainContainer}>
        <View style={styles.settingBox}>
          <Text style={styles.header}>Account</Text>
        </View>
        <TouchableOpacity
          style={styles.settingBox}
          onPress={() => navigation.navigate("Change Email")}
        >
          <Text>Email</Text>
          <Text style={{ color: COLORS.foitiGrey }}>
            atkinsonolivia@gmail.com
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.settingBox}
          onPress={() => navigation.navigate("Change Phone")}
        >
          <Text>Phone Number</Text>
          <Text style={{ color: COLORS.foitiGrey }}>+1 3256565844</Text>
        </TouchableOpacity>
        <View style={styles.settingBox}>
          <Text style={styles.header}>Security</Text>
        </View>
        <TouchableOpacity
          style={styles.settingBox}
          onPress={() => navigation.navigate("Change Password")}
        >
          <Text>Change Password</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity style={{ marginTop: 50 }}>
            <Text style={styles.header}>Deactivate Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  settingBox: {
    marginBottom: 25,
  },
  header: {
    fontWeight: "bold",
  },
});
