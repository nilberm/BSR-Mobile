import React from "react";
import { ScrollView, View } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Righteous_400Regular,
} from "@expo-google-fonts/dev";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";
import LoginHeader from "../../src/components/LoginPage/LoginHeader";
import LoginForm from "../../src/components/LoginPage/LoginForm";
import LoginNav from "../../src/components/LoginPage/LoginNav";
import { styles } from "./styles";

export default function Login() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
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

  if (!fontsLoaded) return null;

  return (
    <ScrollView style={{ flex: 1 }} onLayout={onLayout}>
      <View style={styles.container}>
        <LoginHeader />
        <LoginForm />
        <LoginNav />
      </View>
    </ScrollView>
  );
}
