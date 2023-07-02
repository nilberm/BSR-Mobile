import { View, StyleSheet } from "react-native";
import ToastManager from "toastify-react-native";

interface AlertProps {}

export default function Alert(props: AlertProps) {
  return (
    <ToastManager
      backdropOpacity={1}
      style={styles.toastContainer}
      duration={4000}
      width={320}
      position={"center"}
      positionValue={200}
    />
  );
}

const styles = StyleSheet.create({
  toastContainer: {
    paddingRight: 40,
    display: "flex",
    gap: 10,
    maxWidth: 324,
    height: 80,

    flex: 1,
    position: "absolute",
    top: 0,
    zIndex: 99,
  },
});
