import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import PostPlaceHeader from "../components/Header/PostPlaceHeader";
import CoverProfile from "../components/Profile/CoverProfile";
import { COLORS } from "../resources/theme";
import { RichEditor } from "react-native-pell-rich-editor";
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
    // console.log(noOflLineArr.length);

    // let length = bio.length;
    setCount(bio.length);
  }, [bio]);

  //   console.log(bio);

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.subHeaderContainer}>
        <View style={{ marginLeft: -4, width }}>
          <PostPlaceHeader
            title="Edit Profile"
            isProfile={false}
            // isEdit={true}
          />
          <CoverProfile isOwnProfile={true} isEdit={true} />
          <View style={styles.inputContainer}>
            <View style={styles.inputBox}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setName(text)}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setUsername(text)}
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
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.label}>Address</Text>
              <TextInput
                style={styles.input}
                value={address}
                onFocus={navigateToAddLocation}
              />
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
