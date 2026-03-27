import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
     "Git Happens: The 'Oh No, What Did I Just Delete?' Survival Guide"
    ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Topics</Text>

      {topics.map((topic) => (
        <TouchableOpacity
          key={topic}
          style={styles.button}
          onPress={() => router.push(`/topic?name=${topic}`)}
        >
          <Text style={styles.buttonText}>
            {topic.toUpperCase()}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 15, marginTop: 5 },
//   title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },

//   button: {
//     padding: 15,
//     borderWidth: 2,
//     borderRadius: 10,
//     marginBottom: 15,
//   },

//   buttonText: {
//     textAlign: "center",
//     fontSize: 16,
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
    backgroundColor: "#F5F7FB",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1A1A1A",
    paddingLeft: 10
  },

  button: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDE3EC",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  buttonText: {
    textAlign: "center",
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
});