import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { data } from "../constants/data";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TopicScreen() {
  const { name } = useLocalSearchParams();
  const questions = data[name as keyof typeof data] || [];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>
          {name?.toString().toUpperCase()}
        </Text>

        {questions.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.question}>
              Q{index + 1}. {item.question}
            </Text>

            <View style={styles.answerBox}>
              <Text>{item.answer}</Text>
            </View>
          </View>
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
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1A1A1A",
    textAlign: "center",
  },

  card: {
    marginBottom: 20,
  },

  question: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },

  answerBox: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDE3EC",
    padding: 15,
    borderRadius: 12,
  },

  answer: {
    color: "#555",
  },

});