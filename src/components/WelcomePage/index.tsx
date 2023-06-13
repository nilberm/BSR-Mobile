import { Pressable, Image, Text, View } from "react-native";
import Colors from "../../utils/colorPalette";
import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  Roboto_400Regular,
  Righteous_400Regular,
} from "@expo-google-fonts/dev";
import { useCallback, useEffect } from "react";
import { useRouter } from "expo-router";
import { styles } from "./styles";

export default function WelcomePage() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Righteous_400Regular,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const router = useRouter();

  if (!fontsLoaded) return null;

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
