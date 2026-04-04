import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from "@/constants/theme";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

export default function TabLayout() {

  // ✅ theme setup
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? "light"];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarShowLabel: true,

        // ✅ DARK MODE FIX
        tabBarStyle: {
          height: 60,
          backgroundColor: theme.background,
          borderTopColor: theme.border, // subtle divider
        },

        tabBarLabelStyle: {
          fontSize: 14,
        },

        // ✅ icon + text colors
        tabBarActiveTintColor: theme.tint,
        tabBarInactiveTintColor: theme.icon,

        tabBarItemStyle: {
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="feedback"
        options={{
          title: 'Feedback',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}