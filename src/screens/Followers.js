import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { DEMOUSERS } from "../utils/demo";
import UserDetails from "../components/UserDetails";

const Followers = () => {
  const renderData = ({ item }) => {
    const details = {
      name: item.name,
      userName: item.username,
      profileUri: item.uri,
    };
    return (
      <View>
        <UserDetails isFollwerScreen={true} details={details} />
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        data={DEMOUSERS}
        renderItem={renderData}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Followers;

const styles = StyleSheet.create({});
