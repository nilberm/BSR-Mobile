import { TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import CustomText from "../../Tags/CustomText";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useRouter } from "expo-router";

interface HomeOverallProps {}
export default function HomeOverall(props: HomeOverallProps) {
  const route = useRouter();

  const [showBalance, setShowBalance] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.balance}>
        <View style={styles.balanceText}>
          <CustomText>overall balance</CustomText>

          <View>
            {!showBalance && <View style={styles.balanceBlur}></View>}

            <CustomText style={styles.balanceValueText}>R$ 0,00</CustomText>
          </View>
        </View>

        <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
          {showBalance ? (
            <Ionicons name="eye-outline" size={24} color="black" />
          ) : (
            <Ionicons name="eye-off-outline" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      <CustomText style={{ fontWeight: "700" }}>My accounts</CustomText>

      <View style={styles.myAccount}>
        <View style={{ flexDirection: "row", gap: 14, alignItems: "center" }}>
          <View style={styles.accountIcon}>
            <Ionicons name="wallet-outline" size={20} color="black" />
          </View>
          <CustomText style={styles.accountName}>Initial Account</CustomText>
        </View>
        <CustomText style={styles.accountBalance}>R$ 0,00</CustomText>
      </View>

      <TouchableOpacity
        style={styles.manageAccountBtn}
        onPress={() => route.push("home/manageAccounts/")}
      >
        <CustomText style={styles.managerAccountText}>
          Manage accounts
        </CustomText>
      </TouchableOpacity>
    </View>
  );
}
