import { Image, Pressable, View } from "react-native";
import CustomText from "../../src/components/Tags/CustomText";
import { useRouter } from "expo-router";
import { styles } from "./style";

interface SuccessfullyRegisteredProps {}
export default function SuccessfullyRegistered(
  props: SuccessfullyRegisteredProps
) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../src/assets/Images/headerRegisteredSuccessfully.png")}
      />

      <CustomText style={styles.text}>
        Registration completed successfully
      </CustomText>

      <Pressable style={styles.button}>
        <CustomText
          style={styles.buttonText}
          onPress={() => router.push("home")}
        >
          Enter
        </CustomText>
      </Pressable>
    </View>
  );
}
