import { Stack } from "expo-router";

interface manageAccountsLayoutProps {}
export default function manageAccountsLayout(props: manageAccountsLayoutProps) {
  return (
    <Stack
      initialRouteName="home/manageAccounts/index"
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="editAccountModal"
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="chooseIconToAccount"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
