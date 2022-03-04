import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Pressable,
  Text,
  FlatList,
  Touchable,
} from "react-native";
import React, { useState } from "react";
import { COLORS, FOITI_CONTS } from "../resources/theme";
import PostPlaceHeader from "../components/Header/PostPlaceHeader";
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import PostEngagement from "../components/Post/PostEngagement";
import UserDetails from "../components/UserDetails";
import BoxPostComponent from "../components/Post/BoxPostComponent";
import { DEMOPOSTS } from "../utils/demo";
import Image from "react-native-scalable-image";
import CustomText from "../components/CustomText";

const { width, height } = Dimensions.get("screen");

const PostImage = ({ post }) => (
  <View>
    <Image
      source={{
        uri: `${post.uri}`,
      }}
      width={width}
    />
    {/* <TouchableOpacity style={styles.reportIcon}>
      <MaterialCommunityIcons
        name="dots-vertical"
        style={{ fontSize: 25, color: COLORS.foitiGrey }}
      />
    </TouchableOpacity> */}
  </View>
);

const FlatListHeader = ({ post }) => (
  <View>
    <PostPlaceHeader />
    <View style={{ marginLeft: -4, width }}>
      <PostImage post={post} />
    </View>
    <PostEngagement />
    <UserDetails />

    <View style={[styles.placeConatiner, { width, marginLeft: -4 }]}>
      <View style={{ width: width - 160 }}>
        {/* <Text numberOfLines={1} style={{ fontWeight: "bold" }}>
          Cherrapunji
        </Text> */}
        <CustomText textType="bold" numberOfLines={1}>
          Cherrapunji
        </CustomText>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <SimpleLineIcons
            name="location-pin"
            style={{ color: COLORS.foitiGrey, fontSize: 9 }}
          />
          <Text numberOfLines={1} style={{ fontSize: 12, marginLeft: 3 }}>
            East Khasi Hills, Shillong, Meghalaya, India
          </Text>
        </View>
      </View>
      <View>
        <Pressable style={styles.directionContainer}>
          <MaterialCommunityIcons
            name="directions"
            style={{
              color: COLORS.foitiGrey,
              marginRight: 5,
              fontSize: 12,
            }}
          />
          {/* <Text>Directions</Text> */}
          <CustomText textType="regular" style={{ fontSize: 12 }}>
            Directions
          </CustomText>
        </Pressable>
      </View>
    </View>
    <View
      style={{
        paddingTop: FOITI_CONTS.padding + 10,
        paddingBottom: FOITI_CONTS.padding + 2,
        paddingHorizontal: FOITI_CONTS.padding + 5,
      }}
    >
      <Text style={{ fontWeight: "bold", color: COLORS.foitiGrey }}>
        More Photos By Aaranghya Garg
      </Text>
    </View>
  </View>
);

const ViewAllPotos = () => (
  <View
    style={{
      paddingVertical: 10,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <TouchableOpacity style={styles.footerButton}>
      <SimpleLineIcons
        name="camera"
        style={{ color: "#fff", fontSize: 14, marginRight: 8 }}
      />
      {/* <Text style={[{ color: "#fff", fontSize: 16 }, { fontWeight: "bold" }]}>
        View All Photos
      </Text> */}
      <CustomText textType="bold" style={[{ color: "#fff", fontSize: 14 }]}>
        View All Photos
      </CustomText>
    </TouchableOpacity>
  </View>
);

const BottomSheetComponent = ({ isVisible }) => {
  <BottomSheet modalProps={{}} isVisible={isVisible}>
    <View>
      <Touchable>
        <Text>Share</Text>
      </Touchable>
    </View>
    <View>
      <Touchable>
        <Text>Report</Text>
      </Touchable>
    </View>
  </BottomSheet>;
};

const Post = ({ route, navigation }) => {
  const { post } = route.params;

  const [isVisible, setIsVisible] = useState(false);
  const [noData, setNoData] = useState(false);

  // const openBottomSheet = () => {
  //   console.log("Bottom Sheet");
  // };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View>
        <FlatList
          contentContainerStyle={{ paddingHorizontal: 4 }}
          ListHeaderComponent={<FlatListHeader post={post} />}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: 4,
          }}
          numColumns={2}
          data={DEMOPOSTS}
          renderItem={(item) => (
            <BoxPostComponent
              item={item.item}
              onPress={() => console.warn("Pressed")}
            />
          )}
          keyExtractor={(item) => item.id}
          ListFooterComponent={!noData ? <ViewAllPotos /> : <View />}
        />
      </View>
      {/* <BottomSheetComponent isVisible=(isVisible)/> */}
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    fontSize: 28,
    color: COLORS.foitiGrey,
  },
  reportIcon: {
    position: "absolute",
    top: 5,
    right: 2,
  },
  placeConatiner: {
    backgroundColor: "#ededed",
    paddingVertical: FOITI_CONTS.padding + 2,
    paddingHorizontal: FOITI_CONTS.padding + 7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  directionContainer: {
    borderBottomColor: "#000",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  footerButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.foitiGrey,
    width: Dimensions.get("window").width / 2,
    paddingVertical: 6,
    borderRadius: 2,
  },
  buttonContent: {
    color: "#fff",
  },
});
