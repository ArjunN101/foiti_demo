import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import React, { forwardRef } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const windowWidth = Dimensions.get("window").width;

const BoxPostComponent = ({ item, onPress }) => {
  const navigation = useNavigation();
  // const openPlace = () => {
  //   navigation.navigate("Home Stack", {
  //     screen: "Post",
  //     params: { post: item },
  //   });
  // };
  return (
    <View>
      <TouchableWithoutFeedback onPress={() => onPress(item)}>
        <View>
          <Image source={{ uri: `${item.uri}` }} style={styles.image} />
          <View style={styles.locationName}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <SimpleLineIcons
                name="location-pin"
                style={{ color: "#fff", fontSize: 12 }}
              />
              <View style={{ marginLeft: 4 }}>
                <Text numberOfLines={1} style={{ color: "#fff", fontSize: 10 }}>
                  {item.name}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{ color: "#fff", fontSize: 8, lineHeight: 8 }}
                >
                  {item.location}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default BoxPostComponent;

const styles = StyleSheet.create({
  locationName: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    width: "100%",
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    bottom: 0,
    left: 0,
  },
  image: {
    width: (windowWidth - 12) / 2,
    height: (windowWidth - 12) / 2,
    resizeMode: "cover",
  },
});
