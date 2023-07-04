import { Image, View } from "react-native";
import CustomText from "../../Tags/CustomText";
import { styles } from "./style";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";

interface HomeHeaderProps {}

export default function HomeHeader(props: HomeHeaderProps) {
  const [userName, setUserName] = useState("User Name");

  const getMe = async () => {
    await api.get("me").then((res) => {
      setUserName(res.data.name);
    });
  };

  useEffect(() => {
    getMe();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require("../../../assets/Images/profile.png")} />
        <View style={styles.textContainer}>
          <CustomText style={styles.greetingText}>Good morning,</CustomText>
          <CustomText style={styles.userNameText}>{userName}</CustomText>
        </View>
      </View>
    </View>
  );
}
