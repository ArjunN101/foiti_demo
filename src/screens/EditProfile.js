import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import PostPlaceHeader from "../components/Header/PostPlaceHeader";
import CoverProfile from "../components/Profile/CoverProfile";
import { COLORS } from "../resources/theme";
// import { RichEditor } from "react-native-pell-rich-editor";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const { width, height } = Dimensions.get("screen");

const EditProfile = () => {
  const navigation = useNavigation();
  const REDUXDATA = useSelector((state) => state.ADD_ADDRESS);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [coverImage, setCoverImage] = useState({
    uri: "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6",
  });
  const [profileImage, setProfileImage] = useState({
    uri: "https://randomuser.me/api/portraits/women/43.jpg",
  });

  const [count, setCount] = useState(0);

  const navigateToAddLocation = () => {
    navigation.navigate("Add Place Location", { prev_screen: "addAddress" });
  };

  useEffect(() => {
    let address = "";
    if (REDUXDATA.name != "") {
      address = `${REDUXDATA.name}, ${REDUXDATA.country}`;
    }
    setAddress(address);
  }, [REDUXDATA]);

  useEffect(() => {
    const regex = /(<([^>]+)>)/gi;
    const noOflLineArr = bio
      .replace(regex, "")
      .replace("&nbsp;", " ")
      .replace("&lt;", "<")
      .replace("&gt;", ">")
      .replace("&amp;", "&");
    setCount(bio.length);
  }, [bio]);

  const _handleUsername = (text) => {
    // setUsername(text.toLowerCase().trim().replace(" ", ""));
    setUsername(text.trim().replace(" ", ""));
  };

  const changeImage = async (props) => {
    // EXPO IMAGE CROP PICKER
    try {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
        crop: true,
        aspect: props == "cover" ? [16, 9] : [1, 1],
      });
      if (pickerResult.cancelled === true) {
        return true;
      }
      const fileName = pickerResult.uri.substr(
        pickerResult.uri.lastIndexOf("/") + 1
      );
      const nameParts = fileName.split(".");
      const extention = nameParts[nameParts.length - 1];
      const img = {
        name: fileName,
        type: "image/" + extention,
        uri:
          Platform.OS === "ios"
            ? pickerResult.uri.replace("file://", "")
            : pickerResult.uri,
      };
      if (props == "cover") {
        setCoverImage(img);
      } else {
        setProfileImage(img);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.subHeaderContainer}>
        <View style={{ marginLeft: -4, width }}>
          <PostPlaceHeader
            title="Edit Profile"
            isProfile={false}
            // isEdit={true}
          />
          <CoverProfile
            isOwnProfile={true}
            isEdit={true}
            profileImg={profileImage}
            coverImg={coverImage}
            selectImage={changeImage}
          />
          <View style={styles.inputContainer}>
            <View style={styles.inputBox}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                value={name}
                style={styles.input}
                onChangeText={(text) => setName(text)}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                autoCapitalize="none"
                value={username}
                style={styles.input}
                onChangeText={_handleUsername}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.label}>Bio</Text>
              {/* <RichEditor
                useContainer={false}
                containerStyle={{ height: 100 }}
                style={{ paddingVertical: 10 }}
                onBlur={() => {
                  return;
                }}
                onChange={(text) => {
                  setBio(text);
                }}
              /> */}
              <TextInput
                style={[styles.input, { textAlignVertical: "top" }]}
                onChangeText={(text) => setBio(text)}
                // numberOfLines={6}
                maxLength={500}
                multiline={true}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.label}>Website</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setWebsite(text)}
                keyboardType="url"
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.label}>Address</Text>
              <TouchableWithoutFeedback onPress={navigateToAddLocation}>
                <Text style={[styles.input, { marginTop: 8 }]}>{address}</Text>
                {/* <TextInput
                  style={styles.input}
                  value={address}
                  // editable={false}
                  // onFocus={navigateToAddLocation}
                /> */}
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.saveContainer}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={{ fontWeight: "bold", color: "#fff" }}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EditProfile;
const styles = StyleSheet.create({
  subHeaderContainer: {
    paddingBottom: 10,
    paddingHorizontal: 4,
  },
  inputContainer: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  inputBox: {
    paddingVertical: 10,
    marginBottom: 5,
  },
  label: {
    color: COLORS.foiti,
    fontSize: 12,
    fontWeight: "bold",
  },
  input: {
    borderBottomColor: COLORS.foitiGreyLight,
    borderBottomWidth: 1,
    paddingVertical: 4,
    fontSize: 15,
  },

  saveContainer: {
    width,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    marginTop: 10,
  },
  saveButton: {
    backgroundColor: COLORS.foiti,
    paddingHorizontal: 80,
    paddingVertical: 10,
    borderRadius: 3,
  },
});
