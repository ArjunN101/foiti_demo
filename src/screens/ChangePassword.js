import { Dimensions, StyleSheet, Text, Touchable, View } from "react-native";
import React, { useState } from "react";
import PostPlaceHeader from "../components/Header/PostPlaceHeader";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../resources/theme";

const { width, height } = Dimensions.get("screen");

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <PostPlaceHeader title="Change Password" isProfile={false} />
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={{ fontWeight: "bold", color: "#000" }}>
            Current Password
          </Text>
          <TextInput
            style={styles.input}
            value={currentPassword}
            onChangeText={(text) => setCurrentPassword(text)}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.box}>
          <Text style={{ fontWeight: "bold", color: "#000" }}>
            New Password
          </Text>
          <TextInput
            style={styles.input}
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
            secureTextEntry={true}
            placeholder="Minimum 8 characters"
          />
        </View>
        <View style={styles.box}>
          <Text style={{ fontWeight: "bold", color: "#000" }}>
            Confirm Password
          </Text>
          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry={true}
            placeholder="Minimum 8 characters"
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Change</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  box: {
    paddingBottom: 25,
  },
  oldEmail: {
    borderBottomColor: COLORS.foitiGreyLight,
    borderBottomWidth: 0.5,
    marginTop: 5,
    color: COLORS.foitiGrey,
  },
  input: {
    borderBottomColor: COLORS.foitiGrey,
    borderBottomWidth: 0.5,
    marginTop: 5,
  },
  buttonContainer: {
    marginTop: 50,
    width,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: COLORS.foiti,
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 3,
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
  },
});
