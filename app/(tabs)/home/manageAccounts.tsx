import { ScrollView } from "react-native";

import ManageAccountsHeader from "../../../src/components/Home/ManageAccounts/ManageAccountsHeader";
import ManageAccountsCards from "../../../src/components/Home/ManageAccounts/ManageAccountsCards";

interface ManageAccountsProps {}
export default function ManageAccounts(props: ManageAccountsProps) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <ManageAccountsHeader />
      <ManageAccountsCards />
    </ScrollView>
  );
}
