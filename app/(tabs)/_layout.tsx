import { Tabs } from "expo-router";
import { IconSymbol } from '@/components/ui/icon-symbol';
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        // 👇 THIS removes weird tab styling (including arrow)
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },

        // 👇 IMPORTANT (removes dropdown feel)
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
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="feedback"
        options={{
          title: 'Feedback',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}