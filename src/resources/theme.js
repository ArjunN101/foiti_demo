import { Dimensions } from "react-native";
import Constants from "expo-constants";

const { width, height } = Dimensions.get("window");
const StatusBarHeight = Constants.statusBarHeight;

export const COLORS = {
  foiti: "#E45527",
  // foitiGrey: "#646161",
  foitiGrey: "#656565",
  foitiGreyLight: "#C5C5C5",
  foitiBlue: "#1877F2",
  facebook: "#1877F2",
  google: "#4285F4",
  foitiRating: "#19AA99",
  foitiDisabled: "#C5C5C5",
  foitiLink: "#00AED4",
  foitiLine: "#E5E5E5",
  foitiBlack: "#5050505",
};

export const FOITI_CONTS = {
  padding: 10,
  iconSize: 18,
};

export const STYLES = {
  logo: {
    height: 35,
    width: 100,
    resizeMode: "contain",
  },
  headerLogo: {
    width: 70,
    height: 25,
    resizeMode: "contain",
    marginLeft: 6,
  },
  text: {
    fontSize: 16,
    fontFamily: "RobotoRegular",
    color: COLORS.foitiGrey,
  },
  welcomeHeader: {
    fontSize: 24,
    fontFamily: "RobotoRegular",
    color: COLORS.foitiGrey,
  },
  button: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "RobotoRegular",
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  skipStatusBar: {
    paddingTop: StatusBarHeight,
    backgroundColor: "#fff",
  },
};

const appTheme = { COLORS, STYLES, FOITI_CONTS };

export default appTheme;
