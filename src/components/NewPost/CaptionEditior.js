import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { RichEditor } from "react-native-pell-rich-editor";
import { COLORS } from "../../resources/theme";

const CaptionEditior = () => {
  const [caption, setCaption] = useState("");
  return (
    <View>
      <View>
        <Text>dsd</Text>
      </View>
      <View>
        <RichEditor
          containerStyle={styles.richEditor}
          ref={Richtext}
          style={styles.rich}
          placeholder={"Wrie a caption"}
          onChange={(text) => setArticale(text)}
          // editorInitializedCallback={editorInitializedCallback}
          // onHeightChange={handleHeightChange}
        />
      </View>
    </View>
  );
};

export default CaptionEditior;

const styles = StyleSheet.create({
  richEditor: {
    borderBottomColor: COLORS.foiti,
  },
  rich: {
    fontSize: 18,
  },
});
