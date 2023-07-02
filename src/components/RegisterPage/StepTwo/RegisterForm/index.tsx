import { Pressable, TextInput, View } from "react-native";
import CustomText from "../../../Tags/CustomText";
import { styles } from "./style";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { RegisterContext } from "../../../../../app/register/registerContext";
import { Controller, useForm } from "react-hook-form";
import ErrorInput from "../../../Tags/ErrorsInput";
import { api } from "../../../../services/api";
import { Toast } from "toastify-react-native";
import Alert from "../../../Tags/Alert";

interface RegisterFormTwoProps {}

interface FormProps {
  password: string;
  rePassword: string;
}

export default function RegisterFormTwo(props: RegisterFormTwoProps) {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const { registerData, setRegisterData } = useContext(RegisterContext);

  const registerUser = async (data: FormProps) => {
    console.log("register");

    let request = {
      email: registerData.email,
      password: data.password,
      rePassword: data.rePassword,
      name: registerData.name,
      gender: registerData.gender,
      birthday: registerData.birthday,
    };

    console.log(request);

    await api
      .post("user", request)
      .then((res) => {
        console.log("passou");
        setRegisterData({});
        router.push("successfullyRegistered");
      })
      .catch((errors) => {
        Toast.error(errors.response.data.message);
      });
  };

  return (
    <View style={styles.formContainer}>
      <Alert />

      <CustomText style={styles.formTitle}>Sign Up</CustomText>

      <View style={styles.formInputs}>
        <CustomText>Password</CustomText>
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Required Password",
            minLength: {
              value: 4,
              message: "Password must have at least 4 characters",
            },
            maxLength: {
              value: 20,
              message: "Password must have at most 20 characters",
            },
            pattern: {
              value: /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
              message: "Password too weak",
            },
          }}
          render={({ field: { value, onChange } }) => (
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={onChange}
              secureTextEntry={true}
            />
          )}
        />
        {errors.password && <ErrorInput>{errors.password.message}</ErrorInput>}
      </View>

      <View style={styles.formInputs}>
        <CustomText>Confirm Password</CustomText>
        <Controller
          name="rePassword"
          control={control}
          rules={{
            required: "Required Confirm Password",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          }}
          render={({ field: { value, onChange } }) => (
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={onChange}
              secureTextEntry={true}
            />
          )}
        />
        {errors.rePassword && (
          <ErrorInput>{errors.rePassword.message}</ErrorInput>
        )}
      </View>

      <Pressable
        style={styles.continueBtn}
        onPress={handleSubmit(registerUser)}
      >
        <CustomText style={styles.continueBtnText}>Submit</CustomText>
      </Pressable>
    </View>
  );
}
