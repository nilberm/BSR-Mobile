import { StyleSheet } from "react-native";
import Colors from "../../../../../../utils/colorPalette";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 20,
  },

  title: {
    textAlign: "center",
    marginTop: 20,

    fontSize: 20,
    fontWeight: "600",
  },

  searchDivider: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: Colors.Gray300,
    paddingVertical: 5,
  },

  searchContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: Colors.Gray300,
    borderRadius: 5,

    width: "100%",

    justifyContent: "space-between",
  },

  searchInput: {
    flex: 1,
    alignSelf: "stretch",

    paddingHorizontal: 10,
  },

  searchIcon: {
    padding: 5,
  },

  genericIcons: {
    paddingVertical: 10,
    gap: 10,
  },

  genericIconsTitle: {
    color: Colors.Gray500,
  },

  bankIcons: {
    paddingVertical: 10,
    gap: 10,
  },

  bankIconsTitle: {
    color: Colors.Gray500,
  },

  cardOption: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,

    borderBottomWidth: 1,
    borderColor: Colors.Gray300,

    paddingTop: 10,
    paddingBottom: 15,
  },

  cardIcon: {
    backgroundColor: Colors.Gray300,
    padding: 8,
    borderRadius: 25,
  },

  cardName: {
    fontWeight: "500",
    fontSize: 16,
  },
});
