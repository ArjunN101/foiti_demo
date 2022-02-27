import { StyleSheet, Text, View } from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { COLORS } from "../resources/theme";

const BoxInput = ({ value, label, setValue, isPassword, hideShow }) => {
  return (
    <View>
      <FloatingLabelInput
        label={label}
        value={value}
        onChangeText={setValue}
        isPassword={isPassword}
        customShowPasswordComponent={hideShow && <Text>Show</Text>}
        customHidePasswordComponent={hideShow && <Text>Hide</Text>}
        containerStyles={{
          borderWidth: 1,
          marginBottom: 15,
          paddingHorizontal: 5,
          paddingVertical: 8,
          backgroundColor: "#fff",
          borderColor: COLORS.foitiGrey,
        }}
        customLabelStyles={{
          colorFocused: COLORS.foiti,
          fontSizeFocused: 10,
          topFocused: -15,
        }}
        labelStyles={{
          backgroundColor: "#fff",
          paddingHorizontal: 2,
        }}
        inputStyles={{
          color: COLORS.foitiGrey,
          paddingHorizontal: 5,
        }}
      />
    </View>
  );
};

export default BoxInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
