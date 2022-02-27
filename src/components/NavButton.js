import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "resources";

const NavButton = ({ icon, title, onTab }) => {
  return (
    <View style={{ paddingVertical: 12 }}>
      <TouchableOpacity style={styles.iconContainer} onPress={onTab}>
        <Feather name={icon} style={[styles.contents, { marginRight: 10 }]} />
        <Text style={styles.contents}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavButton;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  contents: {
    fontSize: 15,
    fontWeight: "bold",
    color: COLORS.foitiGrey,
  },
});
