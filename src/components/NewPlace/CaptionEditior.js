import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState, useCallback } from "react";
import { RichEditor } from "react-native-pell-rich-editor";
// import { WebView } from "react-native-webview";
import HTMLView from "react-native-htmlview";
import { COLORS } from "../../resources/theme";

const { width, height } = Dimensions.get("screen");

const CaptionEditior = () => {
  const [caption, setCaption] = useState("");
  const [editorHeight, setEditorHeight] = useState(30);
  const handleHeightChange = useCallback((height) => {
    setEditorHeight(height);
  });

  //   console.log(caption.length);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: `https://randomuser.me/api/portraits/women/23.jpg` }}
          style={styles.image}
        />
      </View>
      <View
        style={{
          width: "100%",
        }}
      >
        <RichEditor
          useContainer={false}
          containerStyle={[styles.richEditor]}
          style={styles.rich}
          placeholder={"Write a caption..."}
          onBlur={() => {
            return;
          }}
          onChange={(text) => {
            setCaption(text);
          }}
          //   initialHeight={100}
          onHeightChange={handleHeightChange}
        />
      </View>
    </View>
  );
};

export default CaptionEditior;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    width,
    alignItems: "flex-start",
  },
  imageContainer: {
    height: 41,
    width: 41,
    borderRadius: 41 / 2,
    backgroundColor: COLORS.foitiGreyLight,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
    resizeMode: "cover",
    alignItems: "center",
  },
  richEditor: {
    width: width - 72,
    height: 200,
    // height: 50,
    borderColor: COLORS.foitiGreyLight,
    borderWidth: 0.3,
    marginLeft: 10,
    color: COLORS.foitiGrey,
    borderRadius: 2,
  },
  rich: {
    fontSize: 18,
  },
});
