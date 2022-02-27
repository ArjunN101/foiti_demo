import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { images, STYLES, COLORS } from "resources";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const HomeHeader = () => {
  return (
    <View style={[styles.header, tw`px-5`]}>
      <View style={{ flex: 1 }}>
        <Image source={images.logo} style={STYLES.headerLogo} />
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Ionicons name="search" style={styles.icons} />
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialCommunityIcons
            name="message-text-outline"
            style={styles.icons}
          />
        </TouchableOpacity>

        <TouchableOpacity>
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
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.foitiGreyLight,
    justifyContent: "space-between",
    alignItems: "center",
  },

  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  icons: {
    fontSize: 30,
    color: COLORS.foitiGrey,
    marginLeft: 10,
  },
});
