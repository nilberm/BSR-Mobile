import { useRouter } from "expo-router";
import { View } from "react-native";
import ManageAccountEditModal from "../../../../src/components/Home/ManageAccounts/Cards/Modal";

interface EditAccountModalProps {}
export default function EditAccountModal(props: EditAccountModalProps) {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ManageAccountEditModal />
    </View>
  );
}
