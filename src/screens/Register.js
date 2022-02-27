import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";

import BoxInput from "../components/BoxInput";
import { images, STYLES, COLORS } from "resources";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
          label="Email"
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

        <BoxInput
          value={confirmPassword}
          label="Confirm Password"
          setValue={setConfirmPassword}
          isPassword={true}
          hideShow={false}
        />
      </View>

      {/* SIGN UP BUTTON START */}
      <View style={tw`py-4`}>
        <TouchableOpacity
          style={[STYLES.button, { backgroundColor: COLORS.foiti }]}
        >
          <Text style={STYLES.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      {/* SIGN UP BUTTON END */}

      {/* SIGN IN BUTTON START */}
      <View style={tw`flex-row`}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: COLORS.foitiLink, marginLeft: 3 }}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
      {/* SIGN IN BUTTON START */}
    </View>
  );
};

export default Register;
