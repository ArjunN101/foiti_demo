import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import UserDetails from "../components/UserDetails";
import { DEMOUSERS } from "../utils/demo";

const Following = () => {
  const newData = DEMOUSERS.sort(() => Math.random() - 0.5);
  // console.log(DEMOUSERS.sort(() => Math.random() - 0.5));
  const renderData = ({ item }) => {
    const details = {
      name: item.name,
      userName: item.username,
      profileUri: item.uri,
    };
    return (
      <View>
        <UserDetails details={details} />
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        data={newData}
        renderItem={renderData}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Following;

const styles = StyleSheet.create({});
