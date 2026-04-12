import { useRouter } from "expo-router";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from "react-native";
import { Colors } from "../../constants/theme";
import { useFontSize } from "../../context/FontSizeContext";
import { db } from "../../firebaseConfig";
// import uploadData from "../../uploadData"; // Uncomment if you need to re-upload data to Firestore (remember to comment out after use to avoid duplicates)
type Topic = {
  id: string;
  title: string;
  icon?: string;
};

export default function HomeScreen() {
  const router = useRouter();
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? "light"];
  const { fontSizeMultiplier, increaseFontSize, decreaseFontSize } = useFontSize();

  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // ✅ Prevent double fetch (React Strict Mode fix)
  const [fetched, setFetched] = useState(false);

  // uploadData(); // Call the upload function to populate Firestore (remove/comment out after first run)
  // 📊 Count questions for each topic
  // const countQuestionsPerTopic = async (topicsData: Topic[]) => {
  //   try {
  //     console.log(`\n📚 TOPICS QUESTION COUNT:\n`);
      
  //     for (const topic of topicsData) {
        
  //       const questionsRef = collection(db, "topics", topic.id, "questions");
  //       const snapshot = await getDocs(questionsRef);
  //       const count = snapshot.size;
        
  //       console.log(`  ${topic.title}: ${count} questions`);
  //     }
      
  //     console.log(``);
  //   } catch (error) {
  //     console.error("Error counting questions:", error);
  //   }
  // };

  useEffect(() => {
    if (fetched) return;

    const fetchTopics = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "topics"));
        let data: Topic[] = querySnapshot.docs.map((doc) => {
          const docData = doc.data();

          return {
            id: doc.id,
            title: docData.name || doc.id,
            icon: docData.icon || undefined,
          };
        });

        // ✅ Remove duplicates by ID (safety check)
        const uniqueIds = new Set<string>();
        const uniqueData = data.filter((topic) => {
          if (uniqueIds.has(topic.id)) {
            return false;
          }
          uniqueIds.add(topic.id);
          return true;
        });

        // ✅ Sort topics (optional but clean UI)
        uniqueData.sort((a, b) => a.title.localeCompare(b.title));

        setTopics(uniqueData);
        setFetched(true);
        
        // 📊 Count questions for each topic
        // countQuestionsPerTopic(uniqueData);
      } catch (err) {
        setError("Failed to load topics");
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, [fetched]);

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
      
      {/* 🔥 HEADER */}
      <View
        style={[
          styles.headerContainer,
          { backgroundColor: theme.background },
        ]}
      >
        <Text
          style={[
            styles.title,
            {
              color: theme.text,
              fontSize: 30 * fontSizeMultiplier,
            },
          ]}
        >
          Level Up Zone..!!!
        </Text>

        {/* 🔠 FONT CONTROLS */}
        <View style={styles.fontSizeButtons}>
          <TouchableOpacity
            onPress={decreaseFontSize}
            style={[
              styles.fontButton,
              { backgroundColor: theme.card, borderColor: theme.border },
            ]}
          >
            <Text style={[styles.fontButtonText, { color: theme.text }]}>
              A−
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={increaseFontSize}
            style={[
              styles.fontButton,
              { backgroundColor: theme.card, borderColor: theme.border },
            ]}
          >
            <Text style={[styles.fontButtonText, { color: theme.text }]}>
              A+
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 200 }}>
        {loading && <ActivityIndicator size="large" color={theme.text} />}

        {error && <Text style={{ color: "red" }}>{error}</Text>}

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
              <Text
                style={[
                  styles.buttonText,
                  {
                    color: theme.text,
                    fontSize: 16 * fontSizeMultiplier,
                  },
                ]}
              >
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
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
  },
  title: {
    fontWeight: "bold",
    flex: 1,
  },
  fontSizeButtons: {
    flexDirection: "row",
    gap: 8,
  },
  fontButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
  },
  fontButtonText: {
    fontSize: 14,
    fontWeight: "600",
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
    fontWeight: "600",
  },
});