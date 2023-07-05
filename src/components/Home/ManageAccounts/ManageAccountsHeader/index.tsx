import { Pressable, SafeAreaView, TouchableOpacity, View } from "react-native";
import CustomText from "../../../Tags/CustomText";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./style";
import Colors from "../../../../utils/colorPalette";
import { useRouter } from "expo-router";

interface ManageAccountsHeaderProps {}
export default function ManageAccountsHeader(props: ManageAccountsHeaderProps) {
  const route = useRouter();

  return (
    <SafeAreaView style={{ backgroundColor: Colors.Green500 }}>
      <View style={styles.container}>
        <View style={styles.headerContent}>
          <Pressable style={styles.headerIcon} onPress={() => route.back()}>
            <Entypo name="chevron-left" size={28} color={Colors.Zinc50} />
          </Pressable>
          <CustomText style={styles.headerTitle}>Account</CustomText>
        </View>
        <TouchableOpacity style={styles.headerActionBtn}>
          <Entypo name="plus" size={28} color={Colors.Zinc50} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
