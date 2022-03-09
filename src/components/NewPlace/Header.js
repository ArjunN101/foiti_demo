import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../resources/theme";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { removePlaceData } from "../../Redux/slices/addPlaceSlice";

const { width, _ } = Dimensions.get("screen");

const Header = ({
  activeStatus,
  backPressed,
  onPost,
  title = "New",
  backStatus = true,
}) => {
  const reduxNewPlace = useSelector((state) => state.NEWPLACE);
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {backStatus && (
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={backPressed}
          >
            <Ionicons name="md-arrow-back" style={styles.icon} />
          </Pressable>
        )}
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 5,
            color: "#000",
          }}
        >
          {title}
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={onPost}
          disabled={!activeStatus}
          style={[
            styles.buttonBox,
            activeStatus ? styles.activeBackground : styles.inactiveBackground,
          ]}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff" }}>
            Post
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: COLORS.foitiGreyLight,
    borderBottomWidth: 0.2,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  icon: {
    fontSize: 28,
    color: COLORS.foitiGrey,
  },
  activeBackground: {
    backgroundColor: COLORS.foiti,
  },
  inactiveBackground: {
    backgroundColor: COLORS.foitiGreyLight,
  },
  buttonBox: {
    paddingVertical: 7,
    paddingHorizontal: 30,
    borderRadius: 2,
  },
});
