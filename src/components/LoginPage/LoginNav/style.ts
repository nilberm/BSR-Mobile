import { StyleSheet } from "react-native";
import Colors from "../../../utils/colorPalette";

export const styles = StyleSheet.create({
  bottomContent: {
    marginBottom: 100,
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.Gray300,
    marginHorizontal: 10,
  },
  dividerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.Gray500,
    marginHorizontal: 10,
  },

  navComponent: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },

  loginText: {
    color: Colors.Gray500,
    marginTop: 20,
  },

  loginLink: {
    color: Colors.Blue950,
    fontWeight: "bold",
  },
});
