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
import { data } from "../constants/data";
import { Colors } from "../constants/theme";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function TopicScreen() {
  const { name } = useLocalSearchParams();

  const allQuestions = data[name as keyof typeof data] || [];

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const questions = allQuestions.filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase())
  );

  const scheme = useColorScheme();
  const theme = Colors[scheme ?? "light"];

  useEffect(() => {
    const hideSub = Keyboard.addListener("keyboardDidHide", () => {
      setShowSearch(false);
    });

    return () => hideSub.remove();
  }, []);

  const copyCode = (code: string) => {
    Clipboard.setStringAsync(code);
    Alert.alert("Copied!", "Code copied to clipboard");
  };

  // 🔥 PARSER (unchanged)
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

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
        stickyHeaderIndices={[0]}
      >
        {/* 🔥 HEADER */}
<View style={[styles.headerWrapper, { backgroundColor: theme.background }]}>
  <View style={styles.header}>
    <Text style={[styles.title, { color: theme.text }]}>
      {name?.toString().toUpperCase()}
    </Text>

    <TouchableOpacity onPress={() => setShowSearch(!showSearch)}>
      <Ionicons name="search" size={24} color={theme.text} />
    </TouchableOpacity>
  </View>
</View>

{/* 🔍 SEARCH BAR (MUST BE DIRECT CHILD) */}
{showSearch && (
  <View style={[styles.searchSticky, { backgroundColor: theme.background }]}>
    <TextInput
      placeholder="Search questions..."
      placeholderTextColor={theme.icon}
      value={search}
      onChangeText={setSearch}
      style={[
        styles.searchInput,
        {
          backgroundColor: theme.card,
          borderColor: theme.border,
          color: theme.text,
        },
      ]}
      autoFocus
    />
  </View>
)}

        {/* 📄 CONTENT */}
        <View style={styles.content}>
          {questions.length === 0 && (
            <Text style={{ color: theme.icon }}>No results found</Text>
          )}

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

                      <Text style={styles.codeText}>{block.content}</Text>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerWrapper: {
    paddingTop: 10,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,

    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
searchSticky: {
  paddingHorizontal: 20,
  paddingBottom: 10,

  elevation: 3,
  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowRadius: 3,
},
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },

  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  searchInput: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 12,
  },

  content: {
    paddingHorizontal: 20,
  },

  card: {
    marginBottom: 20,
  },

  question: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    marginTop: 10,
  },

  textBox: {
    borderWidth: 1,
    padding: 14,
    borderRadius: 14,
    marginTop: 6,
  },

  answerText: {
    fontSize: 14,
    lineHeight: 22,
  },

  codeBox: {
    backgroundColor: "#1E1E1E",
    padding: 14,
    borderRadius: 14,
    marginTop: 8,
  },

  codeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  codeLabel: {
    color: "#aaa",
    fontSize: 12,
  },

  copyText: {
    color: "#4DA6FF",
    fontSize: 12,
    fontWeight: "600",
  },

  codeText: {
    fontFamily: "monospace",
    fontSize: 13,
    lineHeight: 20,
    color: "#D4D4D4",
  },
});