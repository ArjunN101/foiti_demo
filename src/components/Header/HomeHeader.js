import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { images, STYLES, COLORS } from "resources";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.header]}>
      <View>
        <Image source={images.logo} style={STYLES.headerLogo} />
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Ionicons name="search-outline" style={styles.icons} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="chatbox-ellipses-outline" style={styles.icons} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Drawer Home", { screen: "New" })}
        >
          {/* <MaterialCommunityIcons name="dots-vertical" style={styles.icons} /> */}
          <Ionicons name="add-circle-outline" style={styles.icons} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get("window").width,
    flexDirection: "row",
    paddingVertical: 14,
    paddingHorizontal: 10,
    // paddingLeft: 18,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.foitiGreyLight,
    justifyContent: "space-between",
    alignItems: "center",
  },

  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  icons: {
    zIndex: 40,
    elevation: 10,
    fontSize: 25,
    // color: COLORS.foitiGrey,
    color: "#000",
    marginLeft: 20,
  },
});
