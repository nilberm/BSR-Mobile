import { View, Pressable } from "react-native";
import CustomText from "../../Tags/CustomText";
import { styles } from "./style";
import { useRouter } from "expo-router";

export default function LoginNav() {
  const router = useRouter();

  return (
    <View style={styles.bottomContent}>
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <CustomText style={styles.dividerText}>or</CustomText>
        <View style={styles.divider} />
      </View>

      <View style={styles.navComponent}>
        <CustomText style={styles.loginText}>
          New to Build Self-Reliance?{" "}
        </CustomText>
        <Pressable onPress={() => router.push("/register/")}>
          <CustomText style={styles.loginLink}>Register</CustomText>
        </Pressable>
      </View>
    </View>
  );
}
