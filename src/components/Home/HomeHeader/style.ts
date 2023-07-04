import { Platform, StyleSheet } from "react-native";
import Colors from "../../../utils/colorPalette";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Green500,
    alignItems: "flex-start",
    paddingTop: Platform.OS === "ios" ? 100 : 60,
    paddingBottom: 70,
    paddingHorizontal: 40,
    gap: 40,
  },
  content: {
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {},

  greetingText: {
    color: Colors.Zinc50,
  },
  userNameText: {
    color: Colors.Zinc50,
    fontWeight: "700",
    fontSize: 18,
  },
});
