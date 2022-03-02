import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FOITI_CONTS } from "../resources/theme";

const SuggestedCreators = ({ users }) => {
  const _renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={{ marginHorizontal: 15, marginVertical: 20 }}>
        <View style={{ alignItems: "center" }}>
          <Image source={{ uri: `${item?.uri}` }} style={styles.avatar} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 5,
            }}
          >
            <Text style={styles.name}>{item?.name}</Text>
            {item.verified && (
              <MaterialCommunityIcons
                name="check-decagram"
                style={{ fontSize: 16, marginLeft: 2, color: COLORS.foitiLink }}
              />
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        borderBottomColor: "#ededed",
        borderBottomWidth: 10,
      }}
    >
      <View
        style={{
          paddingHorizontal: 15,
          paddingVertical: 10,
          paddingLeft: FOITI_CONTS.padding + 5,
          borderBottomWidth: 0.5,
          borderBottomColor: COLORS.foitiGreyLight,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "#000",
          }}
        >
          Recommended Creators
        </Text>
      </View>
      <FlatList
        // ItemSeparatorComponent={() => (
        //   <View style={{ width: 10, backgroundColor: "#fff" }} />
        // )}
        data={users}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={_renderItem}
        keyExtractor={(index) => 100 + index}
      />
    </View>
  );
};

export default SuggestedCreators;

const styles = StyleSheet.create({
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  name: {
    fontWeight: "bold",
  },
});
