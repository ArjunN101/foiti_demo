import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const ProfileNumbers = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.numberContainer}>
        <TouchableOpacity>
          <Text style={styles.number}>132</Text>
          <Text>Uploads</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.numberContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation
              // .setOptions({ title: "Olivia Atkinson" })
              .navigate("FollowDetails", {
                name: "Olivia Atkinson",
                initialRoute: "Followers",
              })
          }
        >
          <Text style={styles.number}>2155</Text>
          <Text>Followers</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.numberContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("FollowDetails", {
              name: "Olivia Atkinson",
              initialRoute: "Following",
            })
          }
        >
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
