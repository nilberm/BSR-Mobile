import { View } from "react-native";
import CustomText from "../../src/components/Tags/CustomText";

interface expenseIncomeProps {}
export default function expenseIncome(props: expenseIncomeProps) {
  return (
    <View>
      <CustomText>Expense / Income</CustomText>
    </View>
  );
}
