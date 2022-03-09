import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";

import Header from "../components/NewPlace/Header";
import { COLORS } from "../resources/theme";
import { Rating } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("screen");

const Review = () => {
  const navigation = useNavigation();
  const [postActive, setPostActive] = useState(false);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    if (rating > 0) {
      setPostActive(true);
    } else {
      setPostActive(false);
    }
  }, [review, rating]);

  const ratingCompleted = (rating) => {
    setRating(rating);
  };

  const onSkip = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Home Navigation" }],
    });

    // if (navigation.canGoBack()) {
    //   navigation.goBack();
    // } else {
    //   navigation.navigate("Home Navigation");
    // }
  };

  const onPost = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Home Navigation" }],
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", height }}>
      <Header
        backStatus={false}
        title="Review"
        activeStatus={postActive}
        onPost={onPost}
      />
      <ScrollView style={{ paddingHorizontal: 10 }}>
        <View style={styles.body}>
          <View>
            <Text>
              This is the first ever post of{" "}
              <Text style={{ fontWeight: "bold" }}>Umiam Lake.</Text> Your
              review would help the community.
            </Text>
          </View>
          {/* <View style={styles.contributionContainer}>
            <Text style={styles.contributionText}>
              Please note your every review will be counted as a contribution
            </Text>
          </View> */}
          <View style={styles.ratingContainer}>
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
              How would you rate your experience?
            </Text>
            <View style={{ justifyContent: "flex-start" }}>
              <Rating
                type="custom"
                startingValue={0}
                ratingCount={5}
                ratingColor="#19AA99"
                ratingBackgroundColor={COLORS.foitiDisabled}
                tintColor="#fff"
                style={{
                  BackgroundColor: "#fff",
                  alignItems: "flex-start",
                }}
                onFinishRating={ratingCompleted}
                imageSize={30}
              />
            </View>
          </View>
          <View style={styles.reviewContainer}>
            <Text style={{ fontWeight: "bold" }}>Write Your Review</Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder="The world is waiting for your review, share the experience you had in Umiam Lake"
                multiline={true}
                numberOfLines={5}
                onChangeText={(text) => setReview(text)}
              />
            </View>
          </View>
        </View>
        <View style={styles.skipContainer}>
          <TouchableOpacity style={styles.skipButton} onPress={onSkip}>
            <Text style={{ fontWeight: "bold", color: "#fff" }}>Skip</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    minHeight: height - 130,
  },
  contributionContainer: {
    paddingVertical: 20,
    marginBottom: 20,
  },
  contributionText: {
    color: COLORS.foitiGreyLight,
    fontStyle: "italic",
  },
  ratingContainer: {
    paddingVertical: 30,
    marginBottom: 10,
  },
  reviewContainer: {
    paddingVertical: 10,
  },
  input: {
    marginTop: 10,
    textAlignVertical: "top",
  },
  skipContainer: {
    width,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  skipButton: {
    backgroundColor: COLORS.foitiGrey,
    paddingHorizontal: 30,
    paddingVertical: 7,
    borderRadius: 3,
    marginBottom: 20,
  },
});
