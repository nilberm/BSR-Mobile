import { Platform, StyleSheet } from "react-native";
import Colors from "../../../utils/colorPalette";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Zinc50,
    marginHorizontal: 40,
    padding: 10,
    position: "relative",
    top: -50,
    borderRadius: 5,

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

  balance: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 6,
    borderLeftColor: Colors.Green500,
    borderLeftWidth: 5,
  },

  balanceText: {
    gap: 1,
    width: 170,
    position: "relative",
  },

  balanceBlur: {
    backgroundColor: "rgba(212, 215, 222, 0.99)",
    width: 170,
    position: "absolute",
    zIndex: 99,
    height: 26,
    borderRadius: 2,
  },

  balanceValueText: {
    fontWeight: "700",
    fontSize: 20,
  },

  divider: {
    borderBottomColor: Colors.Gray300,
    borderBottomWidth: 1,
    flex: 1,
    marginVertical: 6,
  },

  myAccount: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 14,
  },

  accountIcon: {
    backgroundColor: Colors.Gray300,
    padding: 6,
    borderRadius: 25,
  },

  accountName: {
    fontWeight: "500",
  },

  accountBalance: {
    color: Colors.Blue600,
    fontWeight: "700",
  },

  manageAccountBtn: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    flex: 1,
    backgroundColor: Colors.Green300,
  },

  managerAccountText: {
    fontWeight: "700",
    color: Colors.Green950,
  },
});
