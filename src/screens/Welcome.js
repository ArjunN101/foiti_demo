import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { STYLES, COLORS } from "../resources/theme";
import BottomLineInput from "../components/BottomLineInput";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isMoreThanFiveChar, setIsMorethanFiveChar] = useState(false);

  //USEEFFECT TO SHOW LOADING AND CHECK USERNAME
  useEffect(() => {
    let length = username.length;
    if (length >= 5) {
      setIsMorethanFiveChar(true);

      if (isLoading) {
        setInterval(function () {
          setIsLoading(false);
        }, 5000);
      }
    } else {
      setIsMorethanFiveChar(false);
      setIsLoading(true);
    }
  }, [username]);

  const onSubmit = () => {
    navigation.navigate("Home Navigation");
  };

  // tw`flex-1 bg-white px-10`,
  return (
    <View style={tw`flex-1 bg-white px-10`}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 220,
        }}
      >
        <Text style={[tw`py-7`, STYLES.welcomeHeader]}>Welcome to Foiti</Text>

        <Text style={[tw`text-center`, STYLES.text]}>
          In order to complete your profile we would like you to enter some
          information below
        </Text>
      </View>
      <View style={tw`pt-5 pb-30`}>
        <BottomLineInput value={name} label="Name" setValue={setName} />

        <View>
          <BottomLineInput
            value={username}
            label="Username"
            setValue={setUsername}
          />
          {isMoreThanFiveChar && (
            <View style={styled.loader}>
              {isLoading ? (
                <ActivityIndicator color="#646161" />
              ) : (
                <Feather
                  name="check"
                  style={{ fontSize: 18, color: "#02BC36" }}
                />
              )}
            </View>
          )}
        </View>
      </View>

      {/* SIGN UP BUTTON START */}
      <View style={tw`py-4`}>
        <TouchableOpacity
          onPress={onSubmit}
          style={[STYLES.button, { backgroundColor: COLORS.foiti }]}
        >
          <Text style={STYLES.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      {/* SIGN UP BUTTON END */}
    </View>
  );
};

export default Welcome;

const styled = StyleSheet.create({
  loader: {
    position: "absolute",
    right: 5,
    top: 14,
    color: "#000",
  },
});
