import { Text, StyleSheet, View, Switch } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../resources/theme";

const SwitchComponent = ({ title, isBold, isEnabled, setCheck }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, isBold && styles.textBold]}>{title}</Text>
      <View>
        <Switch
          trackColor={{
            false: COLORS.foitiGreyLight,
            true: COLORS.foitiGrey,
          }}
          ios_backgroundColor="#3e3e3e"
          thumbColor="#fff"
          value={isEnabled}
          onValueChange={setCheck}
        />
      </View>
    </View>
  );
};

export default SwitchComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  text: {
    color: COLORS.foitiGrey,
  },
  textBold: {
    fontWeight: "bold",
    color: "#000",
  },
});
