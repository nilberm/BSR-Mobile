import { Image, View } from "react-native";
import { styles } from "./style";

interface RegisterHeaderTwoProps {}
export default function RegisterHeaderTwo(props: RegisterHeaderTwoProps) {
  return (
    <View style={styles.headerRegister}>
      <Image
        style={styles.image}
        source={require("../../../../assets/Images/headerRegisterTwo.png")}
      />
    </View>
  );
}
