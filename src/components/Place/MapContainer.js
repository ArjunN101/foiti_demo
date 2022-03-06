import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import images from "../../resources/images";
import MapView, { Marker } from "react-native-maps";

const MapContainer = () => {
  return (
    <View
      style={{
        width: Dimensions.get("window").width,
        height: 200,
        overflow: "hidden",
        // backgroundColor: "blue",
      }}
    >
      {/* <Image
        source={images.map}
        style={{
          resizeMode: "cover",
          height: 150,
          width: Dimensions.get("window").width,
        }}
      /> */}
      <MapView
        style={{ width: "100%", height: 240 }}
        showsCompass={false}
        toolbarEnabled={false}
        initialRegion={{
          latitude: 28.6087274,
          longitude: 77.2321433,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0321,
        }}
      >
        <Marker
          coordinate={{ latitude: 28.6087274, longitude: 77.2321433 }}
          // style={{ height: 3 }}
        />
      </MapView>
    </View>
  );
};

export default MapContainer;

const styles = StyleSheet.create({});
