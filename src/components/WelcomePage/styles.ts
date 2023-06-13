import { StyleSheet } from "react-native";
import Colors from "../../utils/colorPalette";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundLogo: {
    backgroundColor: Colors.Blue950,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomRightRadius: 125,
    borderBottomLeftRadius: 125,
    marginBottom: 60,
  },

  logoContainer: {
    position: "absolute",
    bottom: -60,
  },

  logo: {
    resizeMode: "contain",
  },

  mainContent: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 35,
  },

  title: {
    fontFamily: "Righteous_400Regular",
    fontSize: 40,
    paddingTop: 50,
  },

  subTitle: {
    fontFamily: "Roboto_400Regular",
    fontSize: 15,
    textAlign: "center",
  },

  buttonContinue: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.Green300,
    width: 200,
    height: 50,
    overflow: "hidden",
    borderRadius: 100,
  },
});
