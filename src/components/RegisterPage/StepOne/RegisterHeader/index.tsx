import { Image, Pressable, View } from "react-native";
import { styles } from "./style";
import CustomText from "../../../Tags/CustomText";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

interface RegisterHeaderOneProps {}
export default function RegisterHeaderOne(props: RegisterHeaderOneProps) {
  const router = useRouter();

  return (
    <View style={styles.headerRegister}>
      <Image
        style={styles.image}
        source={require("../../../../assets/Images/headerRegisterOne.png")}
      />

      <View style={styles.navRegister}>
        <CustomText>Joined us before? </CustomText>
        <Pressable onPress={() => router.push("/login")}>
          <CustomText style={styles.navLink}>Login</CustomText>
        </Pressable>
      </View>
    </View>
  );
}
