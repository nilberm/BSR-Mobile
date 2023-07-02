import {
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CustomText from "../../../Tags/CustomText";
import { styles } from "./style";
import { useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { RegisterContext } from "../../../../../app/register/registerContext";
import { Controller, useForm } from "react-hook-form";
import ErrorInput from "../../../Tags/ErrorsInput";
import DateTimePicker from "@react-native-community/datetimepicker";

interface RegisterFormOneProps {}

interface FormProps {
  name: string;
  email: string;
  birthday: string;
  gender: string;
}

export default function RegisterFormOne(props: RegisterFormOneProps) {
  const dayjs = require("dayjs");
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { setRegisterData } = useContext(RegisterContext);

  const [showPickDate, setShowPickDate] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showPickGender, setShowPickGender] = useState(false);

  const onChangeDate = ({ type }, selectedDate) => {
    if (type === "set") {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatePicker();
        setValue("birthday", dayjs(currentDate).format("DD/MM/YYYY"));
      }
    } else {
      toggleDatePicker();
    }
  };

  const confirmIOSDate = () => {
    setValue("birthday", dayjs(date).format("DD/MM/YYYY"));
    toggleDatePicker();
  };

  const onGenderSelect = (data: string) => {
    setValue("gender", data);

    toggleGenderPicker();
  };

  const toggleDatePicker = () => {
    setShowPickDate(!showPickDate);
  };

  const toggleGenderPicker = () => {
    setShowPickGender(!showPickGender);
  };

  const handleNextStep = (data: FormProps) => {
    setRegisterData(data);

    router.push("/register/stepTwo");
  };

  return (
    <View style={styles.formContainer}>
      <CustomText style={styles.formTitle}>Sign Up</CustomText>

      <View style={styles.formInputs}>
        <CustomText>Name</CustomText>
        <Controller
          name="name"
          control={control}
          rules={{
            required: "Required Name",
          }}
          render={({ field: { value, onChange } }) => (
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.name && <ErrorInput>{errors.name.message}</ErrorInput>}
      </View>

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
              style={styles.input}
              keyboardType="email-address"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.email && <ErrorInput>{errors.email.message}</ErrorInput>}
      </View>

      <View style={styles.formInputs}>
        <CustomText>Birthday</CustomText>

        {showPickDate && (
          <DateTimePicker
            value={date}
            onChange={onChangeDate}
            display="spinner"
            maximumDate={new Date(2005, 10, 20)}
          />
        )}

        {showPickDate && Platform.OS === "ios" && (
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <TouchableOpacity onPress={toggleDatePicker}>
              <CustomText style={styles.cancelDate}>Cancel</CustomText>
            </TouchableOpacity>

            <TouchableOpacity onPress={confirmIOSDate}>
              <CustomText style={styles.confirmDate}>Confirm</CustomText>
            </TouchableOpacity>
          </View>
        )}

        <Controller
          name="birthday"
          control={control}
          rules={{
            required: "Required Birthday",
          }}
          render={({ field: { value, onChange } }) => (
            <>
              {!showPickDate && (
                <Pressable onPress={toggleDatePicker}>
                  <TextInput
                    style={styles.input}
                    value={value}
                    placeholder={`${dayjs().format("DD/MM/YYYY")}`}
                    onChangeText={onChange}
                    editable={false}
                    onPressIn={toggleDatePicker}
                  />
                </Pressable>
              )}
            </>
          )}
        />
        {errors.birthday && <ErrorInput>{errors.birthday.message}</ErrorInput>}
      </View>

      <View style={styles.formInputs}>
        <CustomText>Gender</CustomText>
        <Controller
          name="gender"
          control={control}
          rules={{
            required: "Required Gender",
          }}
          render={({ field: { value, onChange } }) => (
            <Pressable onPressIn={toggleGenderPicker}>
              <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChange}
                editable={false}
                onPressIn={toggleGenderPicker}
              />
            </Pressable>
          )}
        />
        {errors.gender && <ErrorInput>{errors.gender.message}</ErrorInput>}
      </View>

      <Pressable
        style={styles.continueBtn}
        onPress={handleSubmit(handleNextStep)}
      >
        <CustomText style={styles.continueBtnText}>Continue</CustomText>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showPickGender}
        onRequestClose={() => setShowPickGender(false)}
      >
        <SafeAreaView style={styles.modalGender}>
          <TouchableOpacity
            style={styles.emptyArea}
            onPress={toggleGenderPicker}
          ></TouchableOpacity>
          <View style={styles.modalOptions}>
            <TouchableOpacity
              style={styles.genderButton}
              onPress={() => onGenderSelect("Male")}
            >
              <CustomText style={styles.genderButtonText}>Male</CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.genderButton}
              onPress={() => onGenderSelect("Female")}
            >
              <CustomText style={styles.genderButtonText}>Female</CustomText>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
}
