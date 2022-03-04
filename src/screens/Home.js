import React, { useRef } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import axios from "axios";

import { COLORS, FOITI_CONTS } from "resources";
import HomeHeader from "../components/Header/HomeHeader";
import { DEV_BACKEND_URL } from "@env";
import Post from "../components/Post/Post";
import { getCloser } from "../utils/getCloser";
import { DEMOPOSTS } from "../utils/demo";

const { diffClamp } = Animated;
const headerHeight = 55;

const Home = () => {
  //CODE FOR ANIMATING HEARDER COMPONENT START
  const ref = useRef(null);
  const scrollY = useRef(new Animated.Value(0));

  const handleScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            y: scrollY.current,
          },
        },
      },
    ],
    { useNativeDriver: true }
  );

  const scrollYClamped = diffClamp(scrollY.current, 0, headerHeight);

  const translateY = scrollYClamped.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -headerHeight],
  });

  const translateYNumber = useRef();

  translateY.addListener(({ value }) => {
    translateYNumber.current = value;
  });

  const handleSnap = ({ nativeEvent }) => {
    const offsetY = nativeEvent.contentOffset.y;
    if (
      !(
        translateYNumber.current === 0 ||
        translateYNumber.current === -headerHeight
      )
    ) {
      if (ref.current) {
        ref.current.scrollToOffset({
          offset:
            getCloser(translateYNumber.current, -headerHeight, 0) ===
            -headerHeight
              ? offsetY + headerHeight / 2
              : offsetY - headerHeight / 2,
        });
      }
    }
  };
  //CODE FOR ANIMATING HEARDER COMPONENT END

  //RENDER FOR USER THAT HAS NO FOLLOWER
  const _renderSuggestionText = () => (
    <View style={{ marginTop: headerHeight }}>
      <View
        style={{
          paddingHorizontal: 25,
          paddingVertical: 60,
          backgroundColor: "#ededed",
        }}
      >
        <Text style={{ textAlign: "center" }}>
          Looks like you have not followed anyone. Why don't you start by
          exploring?
        </Text>
      </View>
      <View
        style={{
          paddingVertical: 10,
          paddingLeft: FOITI_CONTS.padding + 5,
          borderBottomWidth: 0.5,
          borderBottomColor: COLORS.foitiGreyLight,
        }}
      >
        <View>
          <Text style={{ fontWeight: "bold" }}>Suggested Posts</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ backgroundColor: "white" }}>
      <Animated.View
        style={[styles.haderPosition, { transform: [{ translateY }] }]}
      >
        <HomeHeader />
      </Animated.View>

      {/* IF USER HAS NOT FOLLOWED OTHER USERS START */}
      <Animated.FlatList
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll} //For hidding header on scroll
        onMomentumScrollEnd={handleSnap} //For hendling snap
        data={DEMOPOSTS}
        ListHeaderComponent={_renderSuggestionText}
        renderItem={(item) => <Post post={item} />}
        keyExtractor={(index) => {
          return index.id;
        }}
        ref={ref}
      />
      {/* IF USER HAS NOT FOLLOWED OTHER USERS END */}

      {/* IF USER HAS FOLLWED OTHER USERS START */}
      {/* IF USER HAS FOLLWED OTHER USERS END */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  haderPosition: {
    flex: 1,
    position: "absolute",
    elevation: 4,
    backgroundColor: "#fff",
    zIndex: 10,
    height: headerHeight,
  },
});
