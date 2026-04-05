import { useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Colors } from "../../constants/theme";

export default function HomeScreen() {
  const router = useRouter();

  const scheme = useColorScheme();
  const theme = Colors[scheme ?? "light"];

  // ✅ FIX: get bottom safe area
  const insets = useSafeAreaInsets();

  const topics = [
    "Coding Chaos",
    "AI Anxiety",
    "Playwright Panic",
    "TypeScript Trouble",
    "Selenium Struggles",
    "Java Jitters",
    "Cucumber Confusion",
    "Git Glitches",
    "SQL Survivors",
    "Roadmap Ruckus",
  ];

  const handlePress = (topic: string) => {
    if (topic.toLowerCase() === "roadmap ruckus") {
      router.push("/roadmaps" as const);
    } else {
      router.push(`/topic?name=${topic}` as const);
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
      edges={["top", "left", "right"]} // ✅ avoid double bottom spacing
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: insets.bottom + 40, // ✅ FIX HERE
        }}
      >
        <Text style={[styles.title, { color: theme.text }]}>
          Level Up Zone..!!
        </Text>

        {topics.map((topic) => (
          <TouchableOpacity
            key={topic}
            style={[
              styles.button,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
            activeOpacity={0.8}
            onPress={() => handlePress(topic)}
          >
            <Text style={[styles.buttonText, { color: theme.text }]}>
              {topic.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },

  button: {
    borderWidth: 1,
    paddingVertical: 16,
    borderRadius: 14,
    marginBottom: 14,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },

  buttonText: {
    textAlign: "left",
    paddingHorizontal: 30,
    fontSize: 16,
    fontWeight: "600",
  },
});