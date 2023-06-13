import React, { useState } from "react";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Righteous_400Regular,
} from "@expo-google-fonts/dev";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";

import { View, ScrollView, Text } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import RegisterHeaderOne from "../../src/components/RegisterPage/StepOne/RegisterHeader";
import RegisterFormOne from "../../src/components/RegisterPage/StepOne/RegisterForm";
import Colors from "../../src/utils/colorPalette";
import { styles } from "./styles";

export default function Register() {
  const { post } = useLocalSearchParams();

  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(1);

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
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Stack.Screen
          options={{
            title: "Register",
            headerTitleStyle: {
              fontWeight: "500",
              fontSize: 24,
            },
            headerStyle: { backgroundColor: Colors.Zinc50 },
          }}
        />
        <RegisterHeaderOne />
        <RegisterFormOne />
      </View>
    </ScrollView>
  );
}
