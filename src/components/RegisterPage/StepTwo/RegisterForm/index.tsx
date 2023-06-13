import { Pressable, TextInput, View } from "react-native";
import CustomText from "../../../Tags/CustomText";
import { styles } from "./style";
import { useRouter } from "expo-router";

interface RegisterFormTwoProps {}
export default function RegisterFormTwo(props: RegisterFormTwoProps) {
  const router = useRouter();
  return (
    <View style={styles.formContainer}>
      <CustomText style={styles.formTitle}>Sign Up</CustomText>

      <View style={styles.formInputs}>
        <CustomText>Password</CustomText>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.formInputs}>
        <CustomText>Confirm Password</CustomText>
        <TextInput style={styles.input} />
      </View>

      <Pressable
        style={styles.continueBtn}
        onPress={() => router.push("/successfullyRegistered")}
      >
        <CustomText style={styles.continueBtnText}>Submit</CustomText>
      </Pressable>
    </View>
  );
}
