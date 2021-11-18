import { StyleSheet, Platform } from "react-native";
import colors from "./colors";

const styles = StyleSheet.create({
  space: {
    height: "32%",
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
    paddingTop: Platform.OS == "ios" && !Platform.isPad ? 10 : 5,
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
    fontFamily: "NegativeHarmonyBold",
    fontSize: 15,
    marginHorizontal: 2,
    textAlign: "center",
    width: 30,
  },
});

export default styles;
