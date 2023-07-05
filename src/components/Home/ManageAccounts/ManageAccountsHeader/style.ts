import { Platform, StyleSheet } from "react-native";
import Colors from "../../../../utils/colorPalette";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.Green500,
    paddingTop: Platform.OS === "android" && 40,
    paddingBottom: 18,
    paddingHorizontal: 10,
  },

  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  headerIcon: {},
  headerTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: Colors.Zinc50,
  },
  headerActionBtn: {},
});
