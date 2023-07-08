import { ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import CustomText from "../../../../../Tags/CustomText";
import { Ionicons } from "@expo/vector-icons";
import { Controller, useForm } from "react-hook-form";

interface ChooseIconProps {}
export default function ChooseIcon(props: ChooseIconProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const tempObj = [
    {
      name: "Wallet",
      icon: "wallet-outline",
    },
    {
      name: "Wallet",
      icon: "wallet-outline",
    },
    {
      name: "Wallet",
      icon: "wallet-outline",
    },
    {
      name: "Wallet",
      icon: "wallet-outline",
    },
    {
      name: "Wallet",
      icon: "wallet-outline",
    },
    {
      name: "Wallet",
      icon: "wallet-outline",
    },
  ];

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.content}>
        <CustomText style={styles.title}>Select an Icon</CustomText>

        <View style={styles.searchDivider}>
          <View style={styles.searchContent}>
            <Controller
              name="searchIcon"
              control={control}
              render={({ field: { value, onChange } }) => (
                <TextInput
                  placeholder="Search for an Icon"
                  keyboardType="ascii-capable"
                  style={styles.searchInput}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            <View style={styles.searchIcon}>
              <Ionicons name="md-search" size={24} color="black" />
            </View>
          </View>
        </View>

        <View style={styles.genericIcons}>
          <CustomText style={styles.genericIconsTitle}>
            Generic Icons
          </CustomText>

          {tempObj &&
            tempObj.map((card, index) => {
              return (
                <TouchableOpacity key={index} style={styles.cardOption}>
                  <View style={styles.cardIcon}>
                    <Ionicons name={"wallet-outline"} size={30} color="black" />
                  </View>
                  <CustomText style={styles.cardName}>{card.name}</CustomText>
                </TouchableOpacity>
              );
            })}
        </View>

        <View style={styles.bankIcons}>
          <CustomText style={styles.bankIconsTitle}>
            Banking institutions icons
          </CustomText>

          {tempObj &&
            tempObj.map((card, index) => {
              return (
                <View key={index} style={styles.cardOption}>
                  <View style={styles.cardIcon}>
                    <Ionicons name={"wallet-outline"} size={30} color="black" />
                  </View>
                  <CustomText style={styles.cardName}>{card.name}</CustomText>
                </View>
              );
            })}
        </View>
      </View>
    </ScrollView>
  );
}
