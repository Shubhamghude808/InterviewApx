import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { data } from "../../constants/data";

export default function ExploreScreen() {
  const { topic } = useLocalSearchParams();

  const questions = data[topic as keyof typeof data] || [];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        {topic?.toString().toUpperCase()}
      </Text>

      {questions.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.question}>
            Q{index + 1}. {item.question}
          </Text>

          <View style={styles.answerBox}>
            <Text style={styles.answer}>
              {item.answer}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    marginBottom: 20,
  },

  question: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },

  answerBox: {
    borderWidth: 2,
    padding: 15,
    borderRadius: 10,
  },

  answer: {
    fontSize: 14,
  },
});