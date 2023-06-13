import React from "react";
import { View, Image, Text } from "react-native";
import CustomText from "../../Tags/CustomText";
import { styles } from "./style";

export default function LoginHeader() {
  return (
    <View style={styles.brandContainer}>
      <View style={styles.brandName}>
        <Image
          style={styles.brandLogo}
          source={require("../../../assets/Images/icons/IconLogo.png")}
        />
        <Text style={styles.brandNameText}>Build Self-Reliance</Text>
      </View>
      <CustomText style={styles.brandSubTitle}>
        Maximize Your Time, Minimize Your Worries
      </CustomText>
    </View>
  );
}
