import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
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
        <TouchableOpacity>
          <Ionicons name="search-outline" style={styles.icons} />
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialCommunityIcons
            name="comment-text-outline"
            style={styles.icons}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MaterialCommunityIcons name="dots-vertical" style={styles.icons} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    width: "100%",
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
    fontSize: 25,
    color: COLORS.foitiGrey,
    marginLeft: 20,
  },
});
