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
import { useDispatch } from "react-redux";

import { addPlaceData } from "../../Redux/slices/addPlaceSlice";
import * as ImagePicker from "expo-image-picker";

const HomeHeader = ({ messagePressed }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  //Image cropper selection
  let openImagePickerAsync = async () => {
    try {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        exif: true,
        quality: 1,
        crop: false,
      });

      // console.log(pickerResult);

      if (pickerResult.cancelled === true) {
        return true;
        // console.log("Cancled");
        // if (navigation.canGoBack()) {
        //   navigation.goBack();
        // } else {
        //   navigation.navigate("Home Navigation");
        // }
      }

      const image = [
        {
          uri: pickerResult.uri,
          width: pickerResult.exif.ImageWidth,
          height: pickerResult.exif.ImageLength,
          type: pickerResult.type,
          coordinates: {
            lat: pickerResult.exif.GPSLatitude || "",
            lng: pickerResult.exif.GPSLongitude || "",
          },
        },
      ];

      // console.log(image);

      dispatch(
        addPlaceData({
          images: image,
        })
      );

      navigation.navigate("New Place");
    } catch (err) {
      console.log("Error", err.message);
    }
  };

  return (
    <View style={[styles.header]}>
      <View>
        <Image source={images.logo} style={STYLES.headerLogo} />
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Ionicons name="search-outline" style={styles.icons} />
        </TouchableOpacity>

        <TouchableOpacity onPress={messagePressed}>
          <Ionicons name="chatbox-ellipses-outline" style={styles.icons} />
        </TouchableOpacity>

        <TouchableOpacity onPress={openImagePickerAsync}>
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
