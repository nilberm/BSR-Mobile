import { ScrollView } from "react-native";

import ManageAccountsHeader from "../../../../src/components/Home/ManageAccounts/Header";
import ManageAccountsCards from "../../../../src/components/Home/ManageAccounts/Cards";

interface ManageAccountsProps {}
export default function ManageAccounts(props: ManageAccountsProps) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <ManageAccountsHeader />
      <ManageAccountsCards />
    </ScrollView>
  );
}
