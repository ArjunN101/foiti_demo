import {
  Button,
  Dimensions,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import PostPlaceHeader from "../components/Header/PostPlaceHeader";
import CoverProfile from "../components/Profile/CoverProfile";
import Details from "../components/Profile/Details";
import ProfileNumbers from "../components/Profile/ProfileNumbers";
import { COLORS } from "../resources/theme";
import { DEMOPOSTS } from "../utils/demo";
import BoxPostComponent from "../components/Post/BoxPostComponent";
import ModalComponent from "../components/ModalComponent";

const { width, height } = Dimensions.get("screen");

const FlatListHeader = ({ showInstruction }) => (
  <View>
    <View style={styles.subHeaderContainer}>
      <View style={{ marginLeft: -4, width }}>
        <PostPlaceHeader title="Profile" isProfile={true} />
        <CoverProfile isOwnProfile={true} />
      </View>
      <View style={{ paddingHorizontal: 5 }}>
        <Details showInstruction={showInstruction} />
        <ProfileNumbers />
      </View>
      <View
        style={{
          borderBottomColor: COLORS.foitiGreyLight,
          borderBottomWidth: 0.8,
          padding: 0,
          marginLeft: -4,
          width,
        }}
      />
    </View>
    <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
      <Text style={{ fontWeight: "bold" }}>Uploads by Olivia Atkinson</Text>
    </View>
  </View>
);

const OwnProfile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => {
    setModalVisible(false);
  };

  const showInstruction = () => {
    setModalVisible(true);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View>
        <FlatList
          contentContainerStyle={{ paddingHorizontal: 4 }}
          ListHeaderComponent={
            <FlatListHeader showInstruction={showInstruction} />
          }
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: 4,
          }}
          numColumns={2}
          data={DEMOPOSTS}
          renderItem={(item) => (
            <BoxPostComponent
              item={item.item}
              onPress={() => console.warn("Pressed")}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <ModalComponent
        body="Foiti Ambassador badge is a special honor awarded for actively contributing to the community."
        closeModal={closeModal}
        modalVisible={modalVisible}
      />
    </View>
  );
};

export default OwnProfile;

const styles = StyleSheet.create({
  subHeaderContainer: {
    paddingBottom: 10,
  },
});
