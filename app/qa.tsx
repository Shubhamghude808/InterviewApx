import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function QA() {
  const router = useRouter();

  return (
    <View style={styles.container}>
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