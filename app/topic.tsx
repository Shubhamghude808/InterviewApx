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

  // 🔍 SEARCH STATE
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // 🔍 FILTER LOGIC
  const questions = allQuestions.filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase())
  );

  // 🎨 THEME
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? "light"];

  // 🔥 HIDE SEARCH WHEN KEYBOARD CLOSES
  useEffect(() => {
    const hideSub = Keyboard.addListener("keyboardDidHide", () => {
      // setShowSearch(false);
    });

    return () => {
      hideSub.remove();
    };
  }, []);

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

  const colors = [
    "#569CD6",
    "#CE9178",
    "#4EC9B0",
    "#DCDCAA",
    "#C586C0",
    "#9CDCFE",
  ];

  const getColorForKeyword = (word: string) => {
    let hash = 0;
    for (let i = 0; i < word.length; i++) {
      hash = word.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  // 🎨 SYNTAX
  const highlightCode = (code: string) => {
    const keywords = [
      "const", "let", "var", "return", "class", "static", "if", "else",
      "for", "while", "import", "from", "function", "true", "false",
      "Switch", "case", "break", "default", "String", "Set",
      "async", "await", "export", "interface", "type", "enum", "null",
      "public", "private", "protected", "final", "void", "new", "this",
      "extends", "implements",
      "def", "elif", "try", "except", "lambda", "None", "in", "is",
      "and", "or", "not",
      "SELECT", "FROM", "WHERE", "INSERT", "UPDATE", "DELETE", "JOIN",
      "CREATE", "DROP", "ALTER","console", "log", "map", "filter", "reduce", "push", "pop", "shift", "unshift", "slice", "splice", "indexOf", "includes", "length", "Math", "Date", "JSON", "parseInt", "parseFloat", "setTimeout", "setInterval", "clearTimeout", "clearInterval", "Promise", "resolve", "reject", "then", "catch", "finally",
    ];

    return code.split("\n").map((line, lineIndex) => (
      <Text key={lineIndex} style={{ flexWrap: "wrap" }}>
        {line.split(" ").map((word, wordIndex) => {
          let color = "#D4D4D4";

          if (keywords.includes(word)) {
            color = getColorForKeyword(word);
          } else if (word.startsWith("//")) {
            color = "#6A9955";
          } else if (word.includes("'") || word.includes('"')) {
            color = "#CE9178";
          }

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
      

        {/* 🔥 HEADER */}
        <View style={styles.header}>
  <Text style={[styles.title, { color: theme.text }]}>
    {name?.toString().toUpperCase()}
  </Text>

  <TouchableOpacity onPress={() => setShowSearch(!showSearch)}>
    <Ionicons name="search" size={26} color={theme.text} />
  </TouchableOpacity>
</View>

{/* 🔍 SEARCH INPUT */}
{showSearch && (
  <View style={[
    styles.searchContainer,
    { backgroundColor: theme.card, borderColor: theme.border }
  ]}>
    <TextInput
      placeholder="Search questions..."
      placeholderTextColor={theme.icon}
      value={search}
      onChangeText={setSearch}
      returnKeyType="search"
      onSubmitEditing={() => Keyboard.dismiss()}
      style={[styles.searchInput, { color: theme.text }]}
    />
    {search.length > 0 && (
      <TouchableOpacity onPress={() => setSearch("")}>
        <Ionicons name="close-circle" size={20} color={theme.icon} />
      </TouchableOpacity>
    )}
  </View>
)}

{/* ❗ NO RESULTS */}
{questions.length === 0 && (
  <Text style={{ color: theme.icon }}>No results found</Text>
)}



      <ScrollView showsVerticalScrollIndicator={false}>
        {/* 📚 QUESTIONS */}
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
  },

  searchInput: {
  flex: 1,
  paddingVertical: 10,
  fontSize: 15,
},

  card: {
    marginBottom: 20,
  },

  question: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },

  textBox: {
    borderWidth: 1,
    padding: 14,
    borderRadius: 12,
    marginTop: 8,
  },

  answerText: {
    fontSize: 14,
    lineHeight: 20,
  },

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
  },
  searchContainer: {
  flexDirection: "row",
  alignItems: "center",
  borderWidth: 1,
  borderRadius: 10,
  paddingHorizontal: 12,
  marginBottom: 16,
  // marginHorizontal: 20,
},

});