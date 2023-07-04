import { Tabs } from "expo-router";
import { Entypo, FontAwesome, Ionicons, Octicons } from "@expo/vector-icons";
import Colors from "../../src/utils/colorPalette";

interface AppLayoutProps {}
export default function AppLayout(props: AppLayoutProps) {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ focused, color, size }) => {
            return <Entypo name="home" size={size} color={color} />;
          },
          tabBarActiveTintColor: Colors.Green500,
          tabBarInactiveTintColor: Colors.Zinc900,
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ focused, color, size }) => {
            return <Entypo name="bar-graph" size={size} color={color} />;
          },
          tabBarActiveTintColor: Colors.Green500,
          tabBarInactiveTintColor: Colors.Zinc900,
        }}
      />
      <Tabs.Screen
        name="expenseIncome"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ focused, color, size }) => {
            return <Entypo name="circle-with-plus" size={size} color={color} />;
          },

          tabBarActiveTintColor: Colors.Green500,
          tabBarInactiveTintColor: Colors.Zinc900,
        }}
      />
      <Tabs.Screen
        name="expenseLimit"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ focused, color, size }) => {
            return <FontAwesome name="dollar" size={size} color={color} />;
          },
          tabBarActiveTintColor: Colors.Green500,
          tabBarInactiveTintColor: Colors.Zinc900,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="settings-sharp" size={size} color={color} />;
          },
          tabBarActiveTintColor: Colors.Green500,
          tabBarInactiveTintColor: Colors.Zinc900,
        }}
      />
    </Tabs>
  );
}
