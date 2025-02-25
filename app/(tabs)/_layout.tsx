import { Tabs } from "expo-router";
import { Image } from "react-native";
import { Briefcase, House, FileText } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 65,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarActiveTintColor: "#0066FF",
        tabBarInactiveTintColor: "#71727A",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <House
              size={24}
              color={focused ? "#0066FF" : "#71727A"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: "Portfolio",
          tabBarIcon: ({ focused }) => (
            <Briefcase
              size={24}
              color={focused ? "#0066FF" : "#71727A"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="insurance"
        options={{
          title: "Insurance",
          tabBarIcon: ({ focused }) => (
            <FileText
              size={24}
              color={focused ? "#0066FF" : "#71727A"}
            />
          ),
        }}
      />
    </Tabs>
  );
} 