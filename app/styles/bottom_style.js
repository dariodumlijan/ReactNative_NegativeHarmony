import { Dimensions, StyleSheet } from "react-native";
import { isApple, isPad } from "../utils";
import colors from "./colors";

const screenHeight = Dimensions.get("window").height;
const smallScreenHeight = screenHeight <= 700;

const bottom = StyleSheet.create({
  space: {
    height: smallScreenHeight ? "35%" : "32%",
    position: "relative",
    width: "100%",
  },

  wrapper: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    bottom: "-15%",
    elevation: 0,
    height: "100%",
    justifyContent: "flex-start",
    left: "-5%",
    paddingBottom: "17%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: isApple && !isPad ? 10 : 5,
    position: "absolute",
    width: "110%",
    zIndex: 1,
  },

  scale: {
    display: "flex",
    flexDirection: "row",
    height: "26%",
    justifyContent: "space-evenly",
  },

  scaleText: {
    fontFamily: "NegativeHarmonyBold",
    fontSize: 15,
    textAlign: "center",
    width: 30,
  },

  axis: {
    backgroundColor: colors.blue,
    borderRadius: 6,
    height: 6,
    marginBottom: 10,
    marginTop: 10,
    width: "100%",
  },

  chord: {
    display: "flex",
    flexDirection: "row",
    height: "26%",
    justifyContent: "center",
  },

  chordName: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "50%",
  },

  tonic: {
    fontFamily: "NegativeHarmonyBold",
    fontSize: 26,
    marginRight: 3,
  },

  name: {
    color: colors.positiveText,
    fontFamily: "NegativeHarmonyBold",
    fontSize: 16,
    marginLeft: 3,
  },

  notes: {
    alignItems: "flex-end",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "50%",
  },

  notesText: {
    display: "flex",
    flexShrink: 1,
    flexWrap: "wrap",
    fontFamily: "NegativeHarmonyBold",
    fontSize: 15,
    marginHorizontal: 2,
    textAlign: "center",
    width: 30,
  },
});

export default bottom;
