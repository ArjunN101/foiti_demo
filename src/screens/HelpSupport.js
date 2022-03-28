import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import PostPlaceHeader from "../components/Header/PostPlaceHeader";
import { COLORS } from "../resources/theme";
import { Fontisto, AntDesign } from "@expo/vector-icons";

const HelpSupport = () => {
  const [question, setQuestion] = useState("");
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <PostPlaceHeader title="Help & Support" isProfile={false} />
      <View style={styles.container}>
        <View>
          <View style={styles.messageConatiner}>
            <AntDesign name="questioncircleo" style={styles.questionIcon} />
            <Text
              style={{
                textAlign: "center",
                color: COLORS.foitiGrey,
                fontSize: 25,
                marginTop: 10,
                // fontWeight: "bold",
              }}
            >
              How can we help you?
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Your question"
              multiline={true}
              numberOfLines={5}
              maxLength={3000}
              onChangeText={(text) => setQuestion(text)}
              style={styles.input}
            />
          </View>
          <View style={styles.submitContainer}>
            <TouchableOpacity style={styles.submitButton}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>Send</Text>
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

export default HelpSupport;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  inputContainer: {
    paddingVertical: 20,
  },
  messageConatiner: {
    alignItems: "center",
    paddingTop: 10,
  },
  questionIcon: {
    fontSize: 50,
    color: COLORS.foitiGrey,
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
