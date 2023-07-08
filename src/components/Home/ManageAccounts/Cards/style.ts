import { StyleSheet } from "react-native";
import Colors from "../../../../utils/colorPalette";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Slate100,
  },
  cards: {
    gap: 20,
    marginVertical: 20,
  },
  card: {
    backgroundColor: Colors.Zinc50,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,

    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },

  topperCard: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    marginVertical: 10,
  },

  iconAndName: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  iconAccount: {
    backgroundColor: Colors.Gray300,
    padding: 5,
    borderRadius: 25,
  },
  accountName: {
    fontSize: 16,
    fontWeight: "500",
  },

  editAccount: {},

  divider: {
    borderBottomColor: Colors.Gray300,
    borderBottomWidth: 1,
    flex: 1,
    marginVertical: 10,
  },

  bottomCard: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  balanceTextContent: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  balanceText: {
    fontWeight: "700",
  },
  balanceValue: {
    fontWeight: "700",
    color: Colors.Blue600,
  },

  editBalance: {},

  // --- Modal Edit Balance ---
  modalEditBalance: {
    flex: 1,
    backgroundColor: "#00000099",
    justifyContent: "center",
    alignItems: "center",
  },

  modalCard: {
    backgroundColor: Colors.Zinc50,
    paddingHorizontal: 40,
    paddingVertical: 20,
    marginBottom: 40,
    borderRadius: 10,
    alignItems: "center",
    gap: 10,

    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },

  modalCardBalanceInfo: {
    gap: 10,
    alignItems: "center",
    paddingTop: 40,
  },

  modalIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.Gray300,
  },

  modalAccountName: {
    fontWeight: "700",
  },

  modalText: {
    color: Colors.Gray700,
    marginBottom: 10,
  },

  modalInput: {
    borderColor: "#ddd",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: "stretch",
    borderRadius: 10,
    overflow: "hidden",

    marginBottom: 10,
  },

  modalSubmitBtn: {
    backgroundColor: Colors.Green500,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 25,

    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
