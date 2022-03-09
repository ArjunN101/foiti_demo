import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import PostPlaceHeader from "../components/Header/PostPlaceHeader";
import SwitchComponent from "../components/Notification/SwitchComponent";

const Notification = () => {
  const [pushNotification, setPushNotification] = useState(false);

  const handlePushNotification = () => {
    setPushNotification(!pushNotification);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <PostPlaceHeader
        title="Notification"
        isProfile={false}
        // isEdit={true}
      />
      {/* isBold, isEnabled, setCheck */}
      <View>
        <SwitchComponent
          title="Push Notification"
          isBold={true}
          isEnabled={pushNotification}
          setCheck={handlePushNotification}
        />
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});
