import { View } from "react-native";
import CustomText from "../../src/components/Tags/CustomText";

interface expenseLimitProps {}
export default function expenseLimit(props: expenseLimitProps) {
  return (
    <View>
      <CustomText>Expense Limit</CustomText>
    </View>
  );
}
