import { Dimensions, StyleSheet, Text, Touchable, View } from "react-native";
import React, { useState } from "react";
import PostPlaceHeader from "../components/Header/PostPlaceHeader";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../resources/theme";

const { width, height } = Dimensions.get("screen");

const ChangeEmail = () => {
  const [email, setEmail] = useState("");
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <PostPlaceHeader title="Change Email Address" isProfile={false} />
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={{ color: COLORS.foitiGrey }}>Current Email Address</Text>
          <Text style={styles.oldEmail}>atkinsonolivia@gmail.com</Text>
        </View>
        <View style={styles.box}>
          <Text style={{ fontWeight: "bold" }}>New Email Address</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
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

export default ChangeEmail;

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
