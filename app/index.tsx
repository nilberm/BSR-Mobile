import React, { useEffect } from "react";
import WelcomePage from "../src/components/WelcomePage";
import { useRouter } from "expo-router";
import { api } from "../src/services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Page() {
  const router = useRouter();

  const isValidToken = async (token: string) => {
    let request = {
      access_token: token,
    };

    await api.post("validate-token", request).then((res) => {
      if (res.data?.valid) {
        console.log("logging");
        router.push("/home");
      } else {
        console.log("not logging");
      }
    });
  };

  const checkToken = async () => {
    const token = await AsyncStorage.getItem("jwtToken");
    if (token) {
      isValidToken(token);
      console.log("token");
    } else {
      console.log("not token");
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return <WelcomePage />;
}
