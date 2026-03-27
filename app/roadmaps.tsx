import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Roadmaps() {
  const router = useRouter();

  const items = ["frontend", "backend", "Quality Assurancee"];

  const handlePress = (item: string) => {
    if (item.toLowerCase() === "quality assurance") {
      router.push("/qa"); // 👉 special screen
    } else {
      router.push(`/roadmapDetail?name=${item}` as const);
    }
  };

  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
    backgroundColor: "#F5F7FB",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
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