import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProfileNumbers = () => {
  return (
    <View style={styles.container}>
      <View style={styles.numberContainer}>
        <TouchableOpacity>
          <Text style={styles.number}>132</Text>
          <Text>Uploads</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.numberContainer}>
        <TouchableOpacity>
          <Text style={styles.number}>2155</Text>
          <Text>Followers</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.numberContainer}>
        <TouchableOpacity>
          <Text style={styles.number}>155</Text>
          <Text>Following</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileNumbers;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  numberContainer: {
    paddingRight: 15,
  },
  number: {
    fontWeight: "bold",
  },
});
