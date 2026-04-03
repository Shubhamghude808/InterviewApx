import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  const topics = 
    ["Coding Chaos",
    "AI Anxiety",
    "Playwright Panic",
     "TypeScript Trouble",
     "Selenium Struggles",
     "Java Jitters",
     "Cucumber Confusion",
     "Git Glitches",
     "Roadmap Ruckus",
    ];



  // ✅ Clean handler
  const handlePress = (topic: string) => {
    if (topic.toLowerCase() === "roadmap ruckus") {
      router.push("/roadmaps" as const);
    } else {
      router.push(`/topic?name=${topic}` as const);
    }
  };

  return (
  <SafeAreaView style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Topics</Text>

      {topics.map((topic) => (
        <TouchableOpacity
          key={topic}
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => handlePress(topic)}
        >
          <Text style={styles.buttonText}>
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
    padding: 20,
    backgroundColor: "#F5F7FB", // ✅ soft background
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1A1A1A",
  },

  button: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDE3EC",
    paddingVertical: 16,
    borderRadius: 14,
    marginBottom: 14,

    // ✅ subtle shadow (looks premium)
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },

  buttonText: {
    textAlign: "left",
    paddingHorizontal: 30,
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },
});