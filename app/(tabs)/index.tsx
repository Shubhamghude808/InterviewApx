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
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Colors } from "../../constants/theme";
import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

// ✅ Type for topic
type Topic = {
  id: string;
  title: string;
  icon?: string;
};

export default function HomeScreen() {
  const router = useRouter();
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? "light"];
  const insets = useSafeAreaInsets();

  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // 🔥 Fetch topics
  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "topics"));

        const data: Topic[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Topic, "id">),
        }));

        console.log("🔥 FIREBASE DATA:", data);

        setTopics(data);
      } catch (err) {
        console.log("❌ Error:", err);
        setError("Failed to load topics");
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  // ✅ Handle click safely
  const handlePress = (topic: Topic) => {
    if (clicked) return;

    setClicked(topic.id);

    if (topic.title.toLowerCase() === "roadmap ruckus") {
      router.push("/roadmaps");
    } else {
      router.push({
        pathname: "/topic",
        params: { name: topic.title },
      });
    }

    setTimeout(() => setClicked(null), 800);
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
      edges={["top", "left", "right"]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: insets.bottom + 40,
        }}
      >
        <Text style={[styles.title, { color: theme.text }]}>
          Level Up Zone..!!
        </Text>

        {/* 🔄 Loading */}
        {loading && (
          <ActivityIndicator size="large" color={theme.text} />
        )}

        {/* ❌ Error */}
        {error && (
          <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
        )}

        {/* 📭 Empty */}
        {!loading && topics.length === 0 && !error && (
          <Text style={{ color: theme.text }}>No topics found</Text>
        )}

        {/* ✅ Topics */}
        {!loading &&
          topics.map((topic) => (
            <TouchableOpacity
              key={topic.id}
              style={[
                styles.button,
                {
                  backgroundColor: theme.card,
                  borderColor: theme.border,
                  opacity: clicked === topic.id ? 0.6 : 1,
                },
              ]}
              activeOpacity={0.8}
              disabled={!!clicked}
              onPress={() => handlePress(topic)}
            >
              <Text style={[styles.buttonText, { color: theme.text }]}>
                {/* ✅ icon support */}
                {topic.icon ? `${topic.icon} ` : ""}
                {topic.title.toUpperCase()}
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
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },

  button: {
    borderWidth: 1,
    paddingVertical: 16,
    borderRadius: 14,
    marginBottom: 14,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },

  buttonText: {
    textAlign: "left",
    paddingHorizontal: 30,
    fontSize: 16,
    fontWeight: "600",
  },
});