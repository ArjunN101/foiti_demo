import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import React, { useRef } from "react";

import HomeHeader from "../components/Header/HomeHeader";
import BoxPostComponent from "../components/Post/BoxPostComponent";
const windowWidth = Dimensions.get("window").width;
import { getCloser } from "../utils/getCloser";
import { DEMOPOSTS } from "../utils/demo";
import { useNavigation } from "@react-navigation/native";

const { diffClamp } = Animated;
const headerHeight = 55;

const Explore = () => {
  //CODE FOR ANIMATING HEARDER COMPONENT START
  const ref = useRef(null);
  const itemRef = useRef(null);
  const scrollY = useRef(new Animated.Value(0));
  const navigation = useNavigation();

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

  const onPress = (item) => {
    navigation.navigate("Explore", {
      screen: "Explore Post",
      params: { post: item },
    });
    // console.log("first");
    // console.log(item);
  };

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <View style={{ backgroundColor: "white" }}>
      <Animated.View
        style={[styles.haderPosition, { transform: [{ translateY }] }]}
      >
        <HomeHeader />
      </Animated.View>
      <View style={{ paddingHorizontal: 4 }}>
        <Animated.FlatList
          ListHeaderComponent={
            <View style={{ height: headerHeight, backgroundColor: "#fff" }} />
          }
          onScroll={handleScroll} //For hidding header on scroll
          onMomentumScrollEnd={handleSnap} //For hendling snap
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: 4,
          }}
          ref={ref}
          numColumns={2}
          data={DEMOPOSTS}
          renderItem={(item) => (
            <BoxPostComponent item={item.item} onPress={onPress} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  haderPosition: {
    flex: 1,
    position: "absolute",
    elevation: 4,
    backgroundColor: "#fff",
    zIndex: 10,
    height: headerHeight,
  },
  locationName: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    width: "100%",
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    bottom: 0,
    left: 0,
  },
  image: {
    width: (windowWidth - 12) / 2,
    height: (windowWidth - 12) / 2,
    resizeMode: "cover",
  },
});
