import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

  const topics = 
    ["Programs Coding Round Code Panic: The I Know This… Why Can’t I Solve It? Survival Guide",
    "AI Knows Everything  Will I Be Replaced… or Just Reviewing Its Mistakes?",
    "Playwright Panic",
     "TypeScript Trouble",
     "Selenium Struggles",
     "Java Jitters",
     "BDD Cucumber TestNG - its Buisness",
     "Git Happens: The 'Oh No, What Did I Just Delete?' Survival Guide",
     "roadmaps",
    ];
 

  // ✅ Clean handler
  const handlePress = (topic: string) => {
    if (topic.toLowerCase() === "roadmaps") {
      router.push("/roadmaps" as const);
    } else {
      router.push(`/topic?name=${topic}` as const);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
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
    fontSize: 26,
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
    textAlign: "center",
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },
});