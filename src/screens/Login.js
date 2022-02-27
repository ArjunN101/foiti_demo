import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import BoxInput from "../components/BoxInput";
import { images, STYLES, COLORS } from "resources";
import CustomHorizontalLine from "../components/CustomHorizontalLine";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    navigation.navigate("Welcome");
  };

  return (
    <View style={tw`bg-white h-full px-10`}>
      {/* <BoxInput value={email} label="Email" setValue={setEmail} /> */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 220,
        }}
      >
        <Image source={images.logo} style={STYLES.logo} />
      </View>
      <View>
        <BoxInput
          value={email}
          label="Email or Username"
          setValue={setEmail}
          isPassword={false}
          maskType="phone"
        />
        <BoxInput
          value={password}
          label="Password"
          setValue={setPassword}
          isPassword={true}
          hideShow={true}
        />
      </View>

      {/* FORGOT PASSWORD START */}
      <TouchableOpacity>
        <Text style={{ color: COLORS.foitiLink }}>Forgot Password ?</Text>
      </TouchableOpacity>
      {/* FORGOT PASSWORD END */}

      {/* SIGN IN BUTTON START */}
      <View style={tw`py-4`}>
        <TouchableOpacity
          onPress={signIn}
          style={[STYLES.button, { backgroundColor: COLORS.foiti }]}
        >
          <Text style={STYLES.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      {/* SIGN IN BUTTON END */}

      {/* SIGN UP BUTTON START */}
      <View style={tw`flex-row`}>
        <Text>New to Foiti?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={{ color: COLORS.foitiLink, marginLeft: 3 }}>
            Sign up now ?
          </Text>
        </TouchableOpacity>
      </View>
      {/* SIGN UP BUTTON START */}

      <View style={tw`py-5`}>
        <CustomHorizontalLine middleText="OR" />
      </View>

      {/* LOGIN WITH FACEBOOK BUTTON START */}
      <View style={tw`py-2`}>
        <TouchableOpacity
          style={[STYLES.button, { backgroundColor: COLORS.facebook }]}
        >
          <MaterialIcons name="facebook" style={styles.icon} />
          <Text style={STYLES.buttonText}>Login with Facebook</Text>
        </TouchableOpacity>
      </View>
      {/* LOGIN WITH FACEBOOK BUTTON END */}

      {/* LOGIN WITH GOOGLE BUTTON START */}
      <View style={tw`py-2`}>
        <TouchableOpacity
          style={[STYLES.button, { backgroundColor: COLORS.google }]}
        >
          <FontAwesome5
            name="google"
            style={[styles.icon, styles.googleIcon]}
          />
          <Text style={STYLES.buttonText}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
      {/* LOGIN WITH GOOGLE BUTTON END */}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    left: 5,
    fontSize: 40,
    color: "#fff",
  },
  googleIcon: {
    color: COLORS.foitiBlue,
    fontSize: 30,
    padding: 5,
    backgroundColor: "#fff",
  },
});
