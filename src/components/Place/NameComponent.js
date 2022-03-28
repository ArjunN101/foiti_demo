import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../resources/theme";

const NameComponent = () => {
  return (
    <View>
      <View style={styles.conatainer}>
        <Text style={styles.header}>Khardungla Pass</Text>
        <TouchableOpacity style={{ marginLeft: 20 }}>
          <Ionicons name="share-social-outline" style={[styles.icons]} />
        </TouchableOpacity>
      </View>
      <Text style={styles.type}>Mountain Pass</Text>
    </View>
  );
};

export default NameComponent;

const styles = StyleSheet.create({
  conatainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
    marginTop: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  icons: {
    fontSize: 20,
    color: COLORS.foitiGrey,
  },
  type: {
    lineHeight: 14,
    color: COLORS.foitiGrey,
  },
});
