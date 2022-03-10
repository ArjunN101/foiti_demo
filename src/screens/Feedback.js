import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import PostPlaceHeader from "../components/Header/PostPlaceHeader";
import { Fontisto } from "@expo/vector-icons";
import { COLORS } from "../resources/theme";
const { width, height } = Dimensions.get("screen");

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <PostPlaceHeader title="Feedback" isProfile={false} />
      <View style={styles.container}>
        <View>
          <View style={styles.messageConatiner}>
            <Text>
              The app is still in beta version and we look forward to your
              feedback to improve the app in every way.
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Feedback"
              multiline={true}
              numberOfLines={5}
              maxLength={3000}
              onChangeText={(text) => setFeedback(text)}
              style={styles.input}
            />
          </View>
          <View style={styles.submitContainer}>
            <TouchableOpacity style={styles.submitButton}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.iconContainer}>
            <Fontisto name="email" style={styles.icon} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={{ textAlign: "center" }}>Send us an email</Text>
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              info@foiti.com
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  inputContainer: {
    paddingVertical: 20,
  },
  input: {
    borderWidth: 0.5,
    borderColor: COLORS.foitiGrey,
    textAlignVertical: "top",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
  },

  submitContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  submitButton: {
    backgroundColor: COLORS.foiti,
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 3,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 150,
  },
  iconContainer: {
    backgroundColor: "#ededed",
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 70 / 2,
  },
  icon: {
    fontSize: 35,
    color: COLORS.foitiGrey,
  },
  infoContainer: {
    paddingVertical: 15,
  },
});
