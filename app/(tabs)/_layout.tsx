import { Tabs } from "expo-router";
import { Pressable } from "react-native";

interface AppLayoutProps {}
export default function AppLayout(props: AppLayoutProps) {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="config" />
    </Tabs>
  );
}
