import { StyleSheet } from "react-native";
import Colors from "../../../../utils/colorPalette";

export const styles = StyleSheet.create({
  headerRegister: {
    alignSelf: "stretch",
    gap: 20,
  },

  image: {
    alignSelf: "center",
  },

  navRegister: {
    flexDirection: "row",
    color: Colors.Zinc900,
    fontFamily: "Roboto_400Regular",
  },

  navLink: {
    color: Colors.Blue950,
    fontWeight: "600",
  },
});
