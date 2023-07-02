import { Stack } from "expo-router";
import { RegisterProvider } from "./registerContext";

interface LayoutRegisterProps {}
export default function LayoutRegister(props: LayoutRegisterProps) {
  return (
    <RegisterProvider>
      <Stack initialRouteName="Sign Up" />
    </RegisterProvider>
  );
}
