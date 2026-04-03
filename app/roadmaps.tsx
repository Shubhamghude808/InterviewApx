import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Roadmaps() {
  const router = useRouter();

  const items = ["frontend", "backend", "Quality Assurance"];

  const handlePress = (item: string) => {
    if (item.toLowerCase() === "quality assurance") {
      router.push("/qa"); // 👉 special screen
    } else {
      router.push(`/roadmapDetail?name=${item}` as const);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Roadmaps</Text>

      {items.map((item) => (
        <TouchableOpacity
          key={item}
          style={styles.card}
          onPress={() => handlePress(item)}
        >
          <Text style={styles.text}>{item.toUpperCase()}</Text>
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