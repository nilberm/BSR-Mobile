import * as SplashScreen from "expo-splash-screen";
import { Image, Pressable, Text, View } from "react-native";

import {
  Righteous_400Regular,
  Roboto_400Regular,
  useFonts,
} from "@expo-google-fonts/dev";
import { useCallback, useEffect } from "react";
import { styles } from "./styles";
import { useRouter } from "expo-router";

export default function WelcomePage() {
  const router = useRouter();

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Righteous_400Regular,
  });

  useEffect(() => {
    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  async function prepare() {
    await SplashScreen.preventAutoHideAsync();
  }

  return (
    <View style={styles.container} onLayout={onLayout}>
      <View style={styles.backgroundLogo}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/Images/Logo.png")}
          />
        </View>
      </View>
      <View style={styles.mainContent}>
        <Text style={styles.title}>Build Self-Reliance</Text>
        <Text style={styles.subTitle}>
          Organize Your Money and Build Self-Reliance
        </Text>

        <Pressable
          style={styles.buttonContinue}
          onPress={() => router.push("/login")}
        >
          <Text>Get Started for Free</Text>
        </Pressable>
      </View>
    </View>
  );
}
