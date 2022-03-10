import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../resources/theme";

const Details = ({ showInstruction }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}>
        Olivia Atkinson
      </Text>
      <Text style={{ lineHeight: 15 }}>@atkinsonolivia</Text>
      {/* SHOW BELOW LINE ONLY ON PROFILE */}
      <TouchableOpacity
        onPress={showInstruction}
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name="shield-check"
          style={{ color: COLORS.foiti, fontSize: 15 }}
        />
        <Text
          style={{ color: COLORS.foiti, fontWeight: "bold", marginLeft: 2 }}
        >
          Foiti Ambassador
        </Text>
      </TouchableOpacity>
      <View style={{ paddingVertical: 6 }}>
        <View style={{ paddingBottom: 2 }}>
          <Text>Entreprenuer, Musician, Film Maker 😎</Text>
          <Text>Laughing like a baby, living like a queen 😄</Text>
          <Text>Yes, the bio looks very simple and simple ...</Text>
        </View>
        <View style={{ paddingBottom: 2 }}>
          <TouchableOpacity>
            <Text style={{ color: COLORS.foitiLink }}>atkinsonolivia.com</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ paddingBottom: 6 }}>New York, USA</Text>
        <View>
          <View style={styles.visitedContainer}>
            <Text>Visited </Text>
            <TouchableOpacity>
              <Text style={{ fontWeight: "bold" }}>7 Countries</Text>
            </TouchableOpacity>
            <Text> and </Text>
            <TouchableOpacity>
              <Text style={{ fontWeight: "bold" }}>108 Places</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.visitedContainer}>
            <Text>Helped Navigate </Text>
            <TouchableOpacity>
              <Text style={{ fontWeight: "bold" }}>13K Travellers</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <Text>Currently at</Text>
        <View style={styles.currentContainer}>
          <SimpleLineIcons
            name="location-pin"
            style={{ color: COLORS.foitiGrey }}
          />
          <Text
            style={{ fontWeight: "bold", color: COLORS.foiti, marginLeft: 2 }}
          >
            Dawki, Meghalaya, India
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  visitedContainer: {
    flexDirection: "row",
  },
  currentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
