import { StyleSheet } from "react-native";
import Colors from "../../../../utils/colorPalette";

export const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignSelf: "stretch",
    gap: 20,
    position: "relative",
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

  cancelDate: {
    fontSize: 16,
  },

  confirmDate: {
    fontSize: 16,
    backgroundColor: Colors.Green300,
    padding: 6,
    borderRadius: 5,
    overflow: "hidden",
  },

  continueBtn: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 14,
    backgroundColor: Colors.Green300,
    overflow: "hidden",
    borderRadius: 100,
    alignSelf: "stretch",
    marginTop: 40,
    marginBottom: 40,
  },

  continueBtnText: {
    color: Colors.Blue950,
    fontWeight: "500",
  },

  modalGender: {
    zIndex: 9,
    flex: 1,
  },

  emptyArea: {
    flex: 1,
    zIndex: 9,
  },

  modalOptions: {
    gap: 10,
    backgroundColor: Colors.Zinc50,
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginVertical: 20,
    marginLeft: 10,
    marginRight: 10,

    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    elevation: 4,
  },

  genderButton: {
    zIndex: 99,
    backgroundColor: Colors.Blue950,
  },

  genderButtonText: {
    color: Colors.Zinc50,
    paddingVertical: 10,
    textAlign: "center",
  },
});
