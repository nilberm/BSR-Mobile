import { StyleSheet } from "react-native";
import Colors from "../../../../utils/colorPalette";

export const styles = StyleSheet.create({
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

  input: {
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
    backgroundColor: Colors.Gray300,
    overflow: "hidden",
    borderRadius: 100,
    alignSelf: "stretch",
    marginTop: 40,
    marginBottom: 40,
  },

  continueBtnText: {
    color: Colors.Gray500,
  },
});
