import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function QA() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Quality Assurance</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/roadmapDetail?name=manual")}
      >
        <Text style={styles.text}>MANUAL QA</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/roadmapDetail?name=automation")}
      >
        <Text style={styles.text}>AUTOMATION QA</Text>
      </TouchableOpacity>
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
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#DDE3EC",
  },
  text: {
    textAlign: "center",
    fontWeight: "600",
  },
});