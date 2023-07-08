import { View } from "react-native";
import ChooseIcon from "../../../../src/components/Home/ManageAccounts/Cards/Modal/ChooseIcon";

interface ChooseIconToAccountProps {}
export default function ChooseIconToAccount(props: ChooseIconToAccountProps) {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ChooseIcon />
    </View>
  );
}
