import {
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";
import CustomText from "../../../../Tags/CustomText";
import Colors from "../../../../../utils/colorPalette";
import { Entypo, Feather } from "@expo/vector-icons";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "expo-router";

interface ManageAccountEditModalProps {}
export default function ManageAccountEditModal(
  props: ManageAccountEditModalProps
) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const route = useRouter();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={styles.modalEditAccount}>
        <View style={styles.modalAccountContent}>
          <View style={styles.modalAccountInputs}>
            <View style={styles.modalAccountInput}>
              <CustomText style={styles.modalAccountLabel}>
                Account name
              </CustomText>

              <Controller
                name="accountName"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    placeholder="Enter account name"
                    keyboardType="ascii-capable"
                    style={styles.modalInput}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
            </View>

            <View style={styles.modalAccountInput}>
              <CustomText style={styles.modalAccountLabel}>
                Choose an icon
              </CustomText>

              <Controller
                name="accountIcon"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TouchableOpacity
                    onPress={() =>
                      route.push("home/manageAccounts/chooseIconToAccount")
                    }
                    style={styles.selectIcon}
                  >
                    <Feather
                      name="plus-circle"
                      size={24}
                      color={Colors.Gray300}
                    />
                    <TextInput
                      placeholder={`Select an Icon`}
                      keyboardType="ascii-capable"
                      style={styles.selectInput}
                      onChangeText={onChange}
                      value={value}
                      editable={false}
                      onPressIn={() =>
                        route.push("home/manageAccounts/chooseIconToAccount")
                      }
                    />
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.modalAccountSubmitBtn}>
            <Entypo name="check" size={24} color={Colors.Zinc50} />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
