import { useRouter } from "expo-router";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants/theme";
import { useFontSize } from "../context/FontSizeContext";

export default function Roadmaps() {
  const router = useRouter();
  const { fontSizeMultiplier } = useFontSize();

  // ✅ THEME SETUP
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? "light"];

  const items = ["frontend", "backend", "Quality Assurance"];

  const handlePress = (item: string) => {
    if (item.toLowerCase() === "quality assurance") {
      router.push("/qa");
    } else {
      router.push(`/roadmapDetail?name=${item}` as const);
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <Text style={[styles.title, { color: theme.text, fontSize: 26 * fontSizeMultiplier }]}>
        Roadmaps
      </Text>

      {items.map((item) => (
        <TouchableOpacity
          key={item}
          style={[
            styles.card,
            {
              backgroundColor:
                scheme === "dark" ? "#1E2228" : theme.card,
              borderColor: theme.border,
            },
          ]}
          onPress={() => handlePress(item)}
        >
          <Text style={[styles.text, { color: theme.text, fontSize: 16 * fontSizeMultiplier }]}>
            {item.toUpperCase()}
          </Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
  },

  text: {
    textAlign: "center",
    fontWeight: "600",
  },
});