import {
  KeyboardAvoidingView,
  Modal,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import CustomText from "../../../Tags/CustomText";
import { useEffect, useRef, useState } from "react";
import Colors from "../../../../utils/colorPalette";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "expo-router";

interface ManageAccountsCardsProps {}
export default function ManageAccountsCards(props: ManageAccountsCardsProps) {
  const route = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const inputRef = useRef<TextInput | null>(null);

  const [showEditBalance, setShowEditBalance] = useState(false);

  const openModal = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setShowEditBalance(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cards}>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.topperCard}
            onPress={() => route.push("home/manageAccounts/editAccountModal")}
          >
            <View style={styles.iconAndName}>
              <View style={styles.iconAccount}>
                <Ionicons name="wallet-outline" size={20} color="black" />
              </View>

              <CustomText style={styles.accountName}>
                Initial Account
              </CustomText>
            </View>

            <View style={styles.editAccount}>
              <Entypo name="chevron-right" size={28} color="black" />
            </View>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.bottomCard} onPress={openModal}>
            <View style={styles.balanceTextContent}>
              <CustomText style={styles.balanceText}>
                Current balance:
              </CustomText>
              <CustomText style={styles.balanceValue}>R$ 0,00</CustomText>
            </View>

            <View style={styles.editAccount}>
              <MaterialIcons name="edit" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <TouchableOpacity style={styles.topperCard}>
            <View style={styles.iconAndName}>
              <View style={styles.iconAccount}>
                <Ionicons name="wallet-outline" size={20} color="black" />
              </View>

              <CustomText style={styles.accountName}>
                Initial Account
              </CustomText>
            </View>

            <View style={styles.editAccount}>
              <Entypo name="chevron-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <View style={styles.divider} />

          <TouchableOpacity style={styles.bottomCard}>
            <View>
              <CustomText style={styles.balanceText}>
                Current balance
              </CustomText>
              <CustomText style={styles.balanceValue}>R$ 0,00</CustomText>
            </View>

            <View style={styles.editAccount}>
              <MaterialIcons name="edit" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showEditBalance}
        onRequestClose={() => setShowEditBalance(false)}
      >
        <SafeAreaView style={styles.modalEditBalance}>
          <KeyboardAvoidingView behavior="padding">
            <View style={styles.modalCard}>
              <View style={styles.modalCardBalanceInfo}>
                <View style={styles.modalIcon}></View>
                <CustomText style={styles.modalAccountName}>
                  NuAccount
                </CustomText>
              </View>

              <CustomText style={styles.modalText}>
                Set your new account balance
              </CustomText>

              <Controller
                name="newBalanceValue"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    ref={inputRef}
                    placeholder="R$ 0,00"
                    keyboardType="numeric"
                    style={styles.modalInput}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />

              <TouchableOpacity
                style={styles.modalSubmitBtn}
                onPress={() => setShowEditBalance(false)}
              >
                <Entypo name="check" size={24} color={Colors.Zinc50} />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </Modal>
    </View>
  );
}
