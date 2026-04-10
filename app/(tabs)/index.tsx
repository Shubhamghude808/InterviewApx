import { useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  ActivityIndicator,
  View,
} from "react-native";
import { Colors } from "../../constants/theme";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

type Topic = {
  id: string;
  title: string;
  icon?: string;
};

export default function HomeScreen() {
  const router = useRouter();
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? "light"];

  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "topics"));
        const data: Topic[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Topic, "id">),
        }));
        setTopics(data);
      } catch (err) {
        setError("Failed to load topics");
      } finally {
        setLoading(false);
      }
    };
    fetchTopics();
  }, []);

  const handlePress = (topic: Topic) => {
    if (clicked) return;
    setClicked(topic.id);
    if (topic.title.toLowerCase() === "roadmap ruckus") {
      router.push("/roadmaps");
    } else {
      router.push({ pathname: "/topic", params: { name: topic.title } });
    }
    setTimeout(() => setClicked(null), 800);
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <Text style={[styles.title, { color: theme.text, paddingHorizontal: 20, paddingTop: 20 }]}>
      Level Up Zone..!!!
    </Text>
      <ScrollView
        contentContainerStyle={{ padding: 20, paddingBottom: 200 }}
      >

        {loading && <ActivityIndicator size="large" color={theme.text} />}
        {error && <Text style={{ color: "red" }}>{error}</Text>}

        {!loading && topics.map((topic) => (
          <TouchableOpacity
            key={topic.id}
            style={[styles.button, {
              backgroundColor: theme.card,
              borderColor: theme.border,
              opacity: clicked === topic.id ? 0.6 : 1,
            }]}
            activeOpacity={0.8}
            disabled={!!clicked}
            onPress={() => handlePress(topic)}
          >
            <Text style={[styles.buttonText, { color: theme.text }]}>
              {topic.icon ? `${topic.icon} ` : ""}
              {topic.title.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 40,
  },
  button: {
    borderWidth: 1,
    paddingVertical: 16,
    borderRadius: 14,
    marginBottom: 14,
    elevation: 2,
  },
  buttonText: {
    textAlign: "left",
    paddingHorizontal: 30,
    fontSize: 16,
    fontWeight: "600",
  },
});