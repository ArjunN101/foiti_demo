import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../resources/theme";
import { useNavigation } from "@react-navigation/native";

const PostPlaceHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          } else {
            navigation.navigate("Home");
          }
        }}
      >
        <Ionicons name="md-arrow-back" style={styles.icon} />
      </Pressable>
      <Pressable
        style={{
          width: Dimensions.get("window").width - 70,
        }}
        onPress={() => navigation.navigate("Place")}
      >
        <Text
          numberOfLines={1}
          style={{
            marginLeft: 10,
            fontSize: 18,
            fontWeight: "bold",
            color: COLORS.foitiGrey,
          }}
        >
          Songrampuji Waterfall
        </Text>
      </Pressable>

      {/* <Pressable onPress={() => navigation.navigate("Search")}>
        <Ionicons name="search-outline" style={styles.icon} />
      </Pressable> */}
    </View>
  );
};

export default PostPlaceHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: COLORS.foitiGreyLight,
    borderBottomWidth: 0.2,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  icon: {
    fontSize: 28,
    color: COLORS.foitiGrey,
  },
});
