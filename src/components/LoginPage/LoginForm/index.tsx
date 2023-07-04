import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, TextInput, Pressable } from "react-native";
import { styles } from "./style";
import CustomText from "../../Tags/CustomText";
import { useForm, Controller } from "react-hook-form";
import { api } from "../../../services/api";
import { useRouter } from "expo-router";
import ErrorInput from "../../Tags/ErrorsInput";

import ToastManager, { Toast } from "toastify-react-native";

export default function LoginForm() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const storeToken = async (token: string) => {
    try {
      await AsyncStorage.setItem("jwtToken", token);
    } catch (error) {
      console.log("Error to storage Token");
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);

    let request = {
      email: data.email,
      password: data.password,
    };

    await api
      .post("login", request)
      .then((res) => {
        storeToken(res.data.access_token);
        router.push("/home");
      })
      .catch((error) => {
        Toast.error(error.response.data.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.toasfity}>
        <ToastManager
          width={324}
          backdropOpacity={1}
          style={styles.toasfityText}
          duration={4000}
        />
      </View>

      <Text style={styles.formTitle}>Login</Text>

      <View style={styles.formInputs}>
        <CustomText>Email</CustomText>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Required Email",
            pattern: {
              message: "Invalid Email",
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            },
          }}
          render={({ field: { value, onChange } }) => (
            <TextInput
              style={styles.emailInput}
              placeholder="example@mail.com"
              keyboardType="email-address"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.email && <ErrorInput>{errors.email.message}</ErrorInput>}
      </View>

      <View style={styles.formInputs}>
        <CustomText>Password</CustomText>
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Required Password",
          }}
          render={({ field: { value, onChange } }) => (
            <TextInput
              style={styles.passwordInput}
              placeholder="******"
              secureTextEntry={true}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.password && <ErrorInput>{errors.password.message}</ErrorInput>}
      </View>

      {loading ? (
        <Pressable style={styles.loadingBtn}>
          <CustomText style={styles.continueBtnText}>Loading</CustomText>
        </Pressable>
      ) : (
        <Pressable style={styles.continueBtn} onPress={handleSubmit(onSubmit)}>
          <CustomText style={styles.continueBtnText}>Continue</CustomText>
        </Pressable>
      )}
    </View>
  );
}
