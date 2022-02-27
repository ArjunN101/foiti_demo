import { View, Text } from "react-native";
import tw from "twrnc";
import { COLORS } from "../resources/theme";

const CustomHorizontalLine = ({ middleText }) => {
  return (
    <>
      <View style={tw`flex-row items-center`}>
        <View
          style={{ flex: 1, height: 1, backgroundColor: COLORS.foitiLine }}
        />
        <View>
          <Text
            style={{ width: 30, textAlign: "center", color: COLORS.foitiLine }}
          >
            {middleText}
          </Text>
        </View>
        <View
          style={{ flex: 1, height: 1, backgroundColor: COLORS.foitiLine }}
        />
      </View>
    </>
  );
};

export default CustomHorizontalLine;
