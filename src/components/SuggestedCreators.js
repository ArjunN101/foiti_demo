import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";

const SuggestedCreators = ({ users }) => {
  const _renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <View>
          <Image
            source={{ uri: `${item?.picture?.large}` }}
            style={styles.avatar}
          />
          <Text>
            {item.name.first} {item.name.last}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  console.log(users);

  return (
    <View style={{ flex: 1, height: 500 }}>
      <FlatList
        data={users}
        // numColumns="2"
        horizontal={true}
        renderItem={_renderItem}
        keyExtractor={(item) => item._id}
      />

      {/* {users.length > 0 &&
        users.map((item) => {
          <Image
            src={{ uri: `${item?.picture?.large}` }}
            style={styles.avatar}
          />;
          <Text>{item.phone}</Text>;
        })} */}
    </View>
  );
};

export default SuggestedCreators;

const styles = StyleSheet.create({
  avatar: {
    height: 100,
    width: 100,
  },
});
