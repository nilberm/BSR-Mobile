import React from "react";

import { View, Text, TextInput, Pressable } from "react-native";
import { styles } from "./style";
import CustomText from "../../Tags/CustomText";

export default function LoginForm() {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>Login</Text>

      <View style={styles.formInputs}>
        <CustomText>Email</CustomText>
        <TextInput
          style={styles.emailInput}
          placeholder="example@mail.com"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.formInputs}>
        <CustomText>Password</CustomText>
        <TextInput
          style={styles.passwordInput}
          placeholder="******"
          secureTextEntry={true}
        />
      </View>

      <Pressable style={styles.continueBtn}>
        <CustomText style={styles.continueBtnText}>Continue</CustomText>
      </Pressable>
    </View>
  );
}
