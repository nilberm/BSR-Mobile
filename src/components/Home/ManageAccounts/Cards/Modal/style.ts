import { StyleSheet } from "react-native";
import Colors from "../../../../../utils/colorPalette";

export const styles = StyleSheet.create({
  modalEditAccount: {
    flex: 1,
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: Colors.Zinc50,
    width: "100%",
  },

  modalAccountContent: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 80,
    alignItems: "center",
    width: "100%",
  },

  modalAccountInputs: {
    gap: 30,
    alignSelf: "flex-start",
    paddingHorizontal: 30,
    width: "100%",
  },

  modalAccountLabel: {
    fontSize: 24,
    fontWeight: "500",
  },

  modalAccountInput: {},

  modalInput: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.Gray300,
    fontSize: 20,
    height: 40,
    width: "100%",
  },

  selectIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.Gray300,
  },

  selectInput: {
    fontSize: 20,
    height: 40,
    width: "100%",
    color: Colors.Red700,
  },

  modalAccountSubmitBtn: {
    backgroundColor: Colors.Green500,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    width: 65,
    paddingVertical: 15,
  },
});
