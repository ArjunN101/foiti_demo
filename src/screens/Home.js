import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import axios from "axios";

import { COLORS, FOITI_CONTS } from "resources";
import HomeHeader from "../components/HomeHeader";
import { DEV_BACKEND_URL } from "@env";
import SuggestedCreators from "../components/SuggestedCreators";
import Post from "../components/Post";
import { getCloser } from "../utils/getCloser";

const { diffClamp } = Animated;
const headerHeight = 55;

const Home = () => {
  const DATA = [
    {
      uri: "https://images.unsplash.com/photo-1614085101945-74f6dde22e28",
      caption:
        "This is what holidays, travels, vacations are about. It is not really rest or even leisure we chase. We strain to renew our capacity to wonder, to shock ourselves into astonishment once again.",
    },
    {
      uri: "https://nypost.com/wp-content/uploads/sites/2/2020/08/new-york-06.jpg?quality=80&strip=all",
      caption:
        "Travel as much as you can, travel as far as you can, travel and find yourself.",
    },
    {
      uri: "https://images.unsplash.com/photo-1546412414-e1885259563a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHViYWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      caption:
        "Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind.",
    },
    {
      uri: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      caption:
        "I don’t know where I’m going from here but I promise it won’t be boring.",
    },
    {
      uri: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      uri: "https://s3-eu-west-1.amazonaws.com/eflanguagesblog/wp-content/uploads/2019/10/17085823/10-things-you-should-know-before-moving-to-New-York_568x464.jpg",
      caption:
        "Once the travel bug bites there is no known antidote, and I know that I shall be happily infected until the end of my life.",
    },
  ];

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
        data={DATA}
        ListHeaderComponent={_renderSuggestionText}
        renderItem={(item) => <Post post={item} />}
        keyExtractor={(item) => item.index}
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
