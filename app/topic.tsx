import * as Clipboard from "expo-clipboard";
import { useLocalSearchParams } from "expo-router";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants/theme";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

// 🔥 FIRESTORE
import {
  collection,
  getDocs,
  query,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

export default function TopicScreen() {
  const { name } = useLocalSearchParams();

  // 🔥 STATE
  const [allQuestions, setAllQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [lastDoc, setLastDoc] = useState<any>(null);
  const [hasMore, setHasMore] = useState(true);

  // 🔍 SEARCH
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // 🎨 THEME
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? "light"];

  // 🔥 INITIAL FETCH
  const fetchInitial = async () => {
  try {
    const q = query(
      collection(db, "topics", name as string, "questions"),
      limit(10)
    );

    const snapshot = await getDocs(q);

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setAllQuestions(data);
    setLastDoc(snapshot.docs[snapshot.docs.length - 1]);

    // 🚀 start background fetch
    fetchRemaining(snapshot.docs[snapshot.docs.length - 1]);

  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  // 🔥 LOAD MORE
  const fetchRemaining = async (lastVisibleDoc: any) => {
  if (!lastVisibleDoc) return;

  setLoadingMore(true);

  try {
    let currentLastDoc = lastVisibleDoc;
    let allNewData: any[] = [];

    while (true) {
      const q = query(
        collection(db, "topics", name as string, "questions"),
        startAfter(currentLastDoc),
        limit(20) // batch size
      );

      const snapshot = await getDocs(q);

      if (snapshot.empty) break;

      const batch = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      allNewData = [...allNewData, ...batch];

      currentLastDoc = snapshot.docs[snapshot.docs.length - 1];

      if (snapshot.docs.length < 20) break;
    }

    // 🚀 append all at once
    setAllQuestions((prev) => [...prev, ...allNewData]);

  } catch (error) {
    console.error(error);
  } finally {
    setLoadingMore(false);
  }
};

  useEffect(() => {
    if (name) fetchInitial();
  }, [name]);

  // 🔍 FILTER
  const questions = allQuestions.filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase())
  );

  // 📋 COPY
  const copyCode = (code: string) => {
    Clipboard.setStringAsync(code);
    Alert.alert("Copied!", "Code copied to clipboard");
  };

  // 🧠 PARSE
  const parseContent = (text: string) => {
    const parts = text.split(/```[\s\S]*?```/g);
    const codeBlocks = text.match(/```([\s\S]*?)```/g) || [];

    let result: { type: "text" | "code"; content: string }[] = [];

    parts.forEach((part, index) => {
      if (part.trim()) {
        result.push({ type: "text", content: part.trim() });
      }

      if (codeBlocks[index]) {
        const code = codeBlocks[index]
          .replace(/```[a-z]*\n?/i, "")
          .replace(/```/, "")
          .trim();

        result.push({ type: "code", content: code });
      }
    });

    return result;
  };

  // 🎨 CODE HIGHLIGHT
  const highlightCode = (code: string) => {
    const keywords = ["const", "let", "return", "class", "if", "else", "for", "while"];

    return code.split("\n").map((line, lineIndex) => (
      <Text key={lineIndex}>
        {line.split(" ").map((word, wordIndex) => {
          let color = "#D4D4D4";

          if (keywords.includes(word)) color = "#569CD6";
          else if (word.startsWith("//")) color = "#6A9955";
          else if (word.includes("'") || word.includes('"')) color = "#CE9178";

          return (
            <Text key={wordIndex} style={{ color }}>
              {word + " "}
            </Text>
          );
        })}
        {"\n"}
      </Text>
    ));
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.text }]}>
          {name ? name.toString().toUpperCase() : "LOADING..."}
        </Text>

        <TouchableOpacity onPress={() => setShowSearch(!showSearch)}>
          <Ionicons name="search" size={26} color={theme.text} />
        </TouchableOpacity>
      </View>

      {/* SEARCH */}
      {showSearch && (
        <View
          style={[
            styles.searchContainer,
            { backgroundColor: theme.card, borderColor: theme.border },
          ]}
        >
          <TextInput
            placeholder="Search questions..."
            placeholderTextColor={theme.icon}
            value={search}
            onChangeText={setSearch}
            style={[styles.searchInput, { color: theme.text }]}
          />
        </View>
      )}

      {/* NO RESULTS */}
      {!loading && questions.length === 0 && (
        <Text style={{ color: theme.icon }}>No results found</Text>
      )}

      <ScrollView
        showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={({ nativeEvent }) => {
          const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;

          const isEndReached =
            layoutMeasurement.height + contentOffset.y >=
            contentSize.height - 20;

          if (isEndReached) fetchRemaining(lastDoc);
        }}
      >
        {/* 🔥 SKELETON */}
        {loading ? (
          <>
            {[1, 2, 3].map((_, i) => (
              <View key={i} style={{ marginBottom: 20 }}>
                <View style={{ height: 20, backgroundColor: "#333", borderRadius: 4, marginBottom: 10 }} />
                <View style={{ height: 80, backgroundColor: "#333", borderRadius: 10 }} />
              </View>
            ))}
          </>
        ) : (
          <>
            {questions.map((item, index) => {
              const parsed = parseContent(item.answer);

              return (
                <View key={index} style={styles.card}>
                  <Text style={[styles.question, { color: theme.text }]}>
                    Q{index + 1}. {item.question}
                  </Text>

                  {parsed.map((block, i) =>
                    block.type === "code" ? (
                      <View key={i} style={styles.codeBox}>
                        <View style={styles.codeHeader}>
                          <Text style={styles.codeLabel}>Code</Text>

                          <Text
                            style={styles.copyText}
                            onPress={() => copyCode(block.content)}
                          >
                            Copy
                          </Text>
                        </View>

                        <Text style={styles.codeText}>
                          {highlightCode(block.content)}
                        </Text>
                      </View>
                    ) : (
                      <View
                        key={i}
                        style={[
                          styles.textBox,
                          {
                            backgroundColor:
                              scheme === "dark" ? "#1E2228" : theme.card,
                            borderColor: theme.border,
                          },
                        ]}
                      >
                        <Text style={[styles.answerText, { color: theme.text }]}>
                          {block.content}
                        </Text>
                      </View>
                    )
                  )}
                </View>
              );
            })}

            {/* 🔥 LOAD MORE */}
            {loadingMore && (
              <Text style={{ textAlign: "center", marginVertical: 10 }}>
                Loading more...
              </Text>
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  title: { fontSize: 26, fontWeight: "bold" },

  searchInput: { flex: 1, paddingVertical: 10 },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 16,
  },

  card: { marginBottom: 20 },

  question: { fontSize: 16, fontWeight: "600", marginBottom: 8 },

  textBox: {
    borderWidth: 1,
    padding: 14,
    borderRadius: 12,
    marginTop: 8,
  },

  answerText: { fontSize: 14, lineHeight: 20 },

  codeBox: {
    backgroundColor: "#1E1E1E",
    padding: 14,
    borderRadius: 15,
    marginTop: 8,
  },

  codeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  codeLabel: { color: "#aaa", fontSize: 12 },

  copyText: {
    color: "#4DA6FF",
    fontSize: 12,
    fontWeight: "600",
  },

  codeText: {
    fontFamily: "monospace",
    fontSize: 13,
    lineHeight: 20,
  },
});