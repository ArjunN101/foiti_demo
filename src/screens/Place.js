import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomeText from "../components/CustomText";
import { COLORS } from "../resources/theme";

const Place = () => {
  return (
    <View style={styles.container}>
      <CustomeText
        textType="black"
        numberOfLines={1}
        style={[styles.customTextStyle, { color: "blue" }]}
      >
        Review
      </CustomeText>
      <CustomeText
        numberOfLines={1}
        textType="regular"
        style={[styles.customTextStyle, { color: "red", fontWeight: "bold" }]}
      >
        Write your review
      </CustomeText>
      <CustomeText
        textType="bold"
        style={[styles.customTextStyle, { color: "green" }]}
      >
        Write your review
      </CustomeText>
    </View>
  );
};

export default Place;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  customTextStyle: {
    fontSize: 16,
    marginBottom: 8,
  },
});
