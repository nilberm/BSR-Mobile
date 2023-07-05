import { Stack } from "expo-router";

interface LayoutHomeProps {}
export default function LayoutHome(props: LayoutHomeProps) {
  return (
    <Stack
      initialRouteName="home/index"
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    />
  );
}
