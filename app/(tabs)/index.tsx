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

  useEffect(() => {
    if (fetched) return;

    const fetchTopics = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "topics"));
        // console.log("RAW Firestore Docs:",
        //             querySnapshot.docs.map((doc) => ({
        //               id: doc.id,
        //               ...doc.data(),
        //   })));
        let data: Topic[] = querySnapshot.docs.map((doc) => {
          const docData = doc.data();

          return {
            id: doc.id,
            title: docData.name || doc.id,
            icon: docData.icon || undefined,
          };
        });
// console.log("Mapped Topics:", data);
        // ✅ Remove duplicates (safety)
        const uniqueData = Array.from(
          new Map(data.map((item) => [item.id, item])).values()
        );

        // ✅ Sort topics (optional but clean UI)
        uniqueData.sort((a, b) => a.title.localeCompare(b.title));
        // console.log("Fetched topics:", uniqueData);
        setTopics(uniqueData);
        setFetched(true);
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