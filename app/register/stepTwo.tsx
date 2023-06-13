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
import { styles } from "./styles";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import RegisterHeaderTwo from "../../src/components/RegisterPage/StepTwo/RegisterHeader";
import RegisterFormTwo from "../../src/components/RegisterPage/StepTwo/RegisterForm";
import Colors from "../../src/utils/colorPalette";

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
            title: "Finalize",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "500",
              fontSize: 24,
            },
            headerStyle: { backgroundColor: Colors.Zinc50 },
          }}
        />
        <RegisterHeaderTwo />
        <RegisterFormTwo />
      </View>
    </ScrollView>
  );
}
