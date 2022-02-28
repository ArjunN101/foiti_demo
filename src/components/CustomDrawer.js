import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import { DrawerContentScrollView } from "@react-navigation/drawer";
import { COLORS } from "resources";
import NavButton from "./NavButton";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 10 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            paddingHorizontal: 10,
            paddingBottom: 10,
            borderBottomWidth: 0.5,
            borderBottomColor: COLORS.foitiGreyLight,
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => console.log("Profile Pressed")}
          >
            <View style={{ marginLeft: 10 }}>
              <Image
                source={{
                  uri: "https://randomuser.me/api/portraits/women/67.jpg",
                }}
                style={styles.avatar}
              />
              <Text style={styles.name}>Olivia Atkinson</Text>
              <Text style={styles.username}>@OliviaAtkinsonOfficial</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderBottomWidth: 0.5,
            borderBottomColor: COLORS.foitiGreyLight,
          }}
        >
          <NavButton
            icon="plus-circle"
            title="Post"
            onTab={() => console.log("Pressed1")}
          />
          <NavButton
            icon="bookmark"
            title="Saved"
            onTab={() => console.log("Pressed2")}
          />
          <NavButton
            icon="bell"
            title="Notifications"
            onTab={() => console.log("Pressed3")}
          />
          <NavButton
            icon="settings"
            title="Settings"
            onTab={() => console.log("Pressed4")}
          />
        </View>
        <View
          style={{
            paddingVertical: 15,
            paddingHorizontal: 20,
          }}
        >
          <TouchableOpacity style={{ paddingVertical: 5 }}>
            <Text style={{ color: COLORS.foitiGrey }}>
              Community Guidelines
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ paddingVertical: 5 }}>
            <Text style={{ color: COLORS.foitiGrey }}>Terms of Service</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ paddingVertical: 5 }}>
            <Text style={{ color: COLORS.foitiGrey }}>Feedback</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ paddingVertical: 5 }}>
            <Text style={{ color: COLORS.foitiGrey }}>Help Center</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingVertical: 20,
            paddingHorizontal: 10,
          }}
        >
          <NavButton title="Log Out" onTab={() => console.log("Pressed4")} />
        </View>
        {/* <DrawerItemList {...props} /> */}
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  avatar: {
    height: 50,
    width: 50,
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 25,
  },
  name: {
    paddingVertical: 2,
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "RobotoBlack",
  },
  username: {
    color: COLORS.foitiGrey,
  },
});
