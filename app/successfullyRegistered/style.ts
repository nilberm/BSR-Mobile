import { StyleSheet } from "react-native";
import Colors from "../../src/utils/colorPalette";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Zinc50,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
    paddingHorizontal: 40,
    gap: 40,
  },

  text: {
    fontWeight: "700",
    fontSize: 28,
    textAlign: "center",
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 14,
    backgroundColor: Colors.Green500,

    overflow: "hidden",
    borderRadius: 100,
    alignSelf: "stretch",
  },

  buttonText: {
    color: Colors.Zinc900,
    fontSize: 16,
    fontWeight: "600",
  },
});
