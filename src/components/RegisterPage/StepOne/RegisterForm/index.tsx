import { Pressable, TextInput, View } from "react-native";
import CustomText from "../../../Tags/CustomText";
import { styles } from "./style";
import { useRouter } from "expo-router";

interface RegisterFormOneProps {}
export default function RegisterFormOne(props: RegisterFormOneProps) {
  const router = useRouter();
  return (
    <View style={styles.formContainer}>
      <CustomText style={styles.formTitle}>Sign Up</CustomText>

      <View style={styles.formInputs}>
        <CustomText>Name</CustomText>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.formInputs}>
        <CustomText>Email</CustomText>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.formInputs}>
        <CustomText>Birthday</CustomText>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.formInputs}>
        <CustomText>Gender</CustomText>
        <TextInput style={styles.input} />
      </View>

      <Pressable
        style={styles.continueBtn}
        onPress={() => router.push("/register/stepTwo")}
      >
        <CustomText style={styles.continueBtnText}>Continue</CustomText>
      </Pressable>
    </View>
  );
}
