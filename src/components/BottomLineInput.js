import { StyleSheet, Text, View } from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { COLORS } from "../resources/theme";

const BottomLineInput = ({ value, label, setValue }) => {
  return (
    <View>
      <FloatingLabelInput
        label={label}
        value={value}
        onChangeText={setValue}
        containerStyles={{
          borderBottomWidth: 1,
          marginBottom: 20,
          paddingHorizontal: 0,
          paddingVertical: 8,
          backgroundColor: "#fff",
          borderColor: COLORS.foitiGrey,
        }}
        customLabelStyles={{
          colorFocused: COLORS.foiti,
          fontSizeFocused: 13,
          topFocused: -20,
        }}
        labelStyles={{
          backgroundColor: "#fff",
          paddingHorizontal: 0,
        }}
        inputStyles={{
          color: COLORS.foitiGrey,
          paddingHorizontal: 5,
        }}
      />
    </View>
  );
};

export default BottomLineInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
