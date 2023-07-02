import { Tabs } from "expo-router";
import { Pressable } from "react-native";

interface AppLayoutProps {}
export default function AppLayout(props: AppLayoutProps) {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ headerShown: false }} />
      <Tabs.Screen name="report" />
      <Tabs.Screen name="expenseIncome" />
      <Tabs.Screen name="expenseLimit" />
      <Tabs.Screen name="account" />
    </Tabs>
  );
}
