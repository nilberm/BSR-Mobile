import { StyleSheet } from "react-native";
import Colors from "../../../utils/colorPalette";

export const styles = StyleSheet.create({
  toasfity: {
    flex: 1,
    position: "relative",
    top: -200,
  },

  toasfityText: {
    paddingRight: 40,

    display: "flex",
    gap: 10,
    maxWidth: 324,
    height: 80,
  },

  formContainer: {
    alignSelf: "stretch",
    gap: 20,
  },

  formTitle: {
    fontFamily: "Roboto_700Bold",
    fontWeight: "700",
    fontSize: 30,
  },

  formInputs: {
    alignSelf: "stretch",
    gap: 10,
  },

  emailInput: {
    borderColor: "#ddd",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 14,
    alignSelf: "stretch",
    borderRadius: 30,
    overflow: "hidden",
  },

  passwordInput: {
    borderColor: "#ddd",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 14,
    alignSelf: "stretch",
    borderRadius: 30,
    overflow: "hidden",
  },

  continueBtn: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 14,
    backgroundColor: Colors.Green500,
    overflow: "hidden",
    borderRadius: 100,
    alignSelf: "stretch",
    marginTop: 40,
  },

  continueBtnText: {
    color: Colors.Zinc900,
  },

  loadingBtn: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 14,
    overflow: "hidden",
    borderRadius: 100,
    alignSelf: "stretch",
    marginTop: 40,
    backgroundColor: Colors.Gray500,
  },
});
