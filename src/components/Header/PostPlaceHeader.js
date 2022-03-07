import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../resources/theme";
import { useNavigation } from "@react-navigation/native";

const PostPlaceHeader = ({ title, isProfile }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack();
            } else {
              navigation.navigate("Home Navigation");
            }
          }}
        >
          <Ionicons name="md-arrow-back" style={styles.icon} />
        </Pressable>
        <Pressable
          style={{
            width: Dimensions.get("window").width - 70,
          }}
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
            {title}
          </Text>
        </Pressable>
      </View>

      {isProfile && (
        <View>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <MaterialCommunityIcons name="dots-vertical" style={styles.icon} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default PostPlaceHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
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
