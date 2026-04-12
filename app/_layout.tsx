import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FontSizeProvider } from "../context/FontSizeContext";

export default function RootLayout() {
  return (
    <FontSizeProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen
            name="topic"
            options={{ presentation: "card" }}
          />
        </Stack>
      </GestureHandlerRootView>
    </FontSizeProvider>
  );
}