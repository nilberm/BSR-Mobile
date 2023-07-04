import { ScrollView, View } from "react-native";
import CustomText from "../../src/components/Tags/CustomText";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Righteous_400Regular,
} from "@expo-google-fonts/dev";
import { useCallback, useEffect } from "react";
import { SplashScreen } from "expo-router";
import Colors from "../../src/utils/colorPalette";
import HomeHeader from "../../src/components/Home/HomeHeader";
import HomeOverall from "../../src/components/Home/HomeOverall";

interface HomeProps {}
export default function Home(props: HomeProps) {
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
      <HomeHeader />
      <HomeOverall />
    </ScrollView>
  );
}
