import * as Clipboard from "expo-clipboard";
import { useLocalSearchParams } from "expo-router";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { data } from "../constants/data";
import { Colors } from "../constants/theme";

export default function TopicScreen() {
  const { name } = useLocalSearchParams();
  const questions = data[name as keyof typeof data] || [];

  // ✅ THEME SETUP
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? "light"];

  // 📋 Copy function
  const copyCode = (code: string) => {
    Clipboard.setStringAsync(code);
    Alert.alert("Copied!", "Code copied to clipboard");
  };

  // 🧠 Parse ``` blocks
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

  // 🎨 Syntax Highlighter
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
      "CREATE", "DROP", "ALTER"
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
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <Text style={[styles.title, { color: theme.text }]}>
          {name?.toString().toUpperCase()}
        </Text>

        {questions.map((item, index) => {
          const parsed = parseContent(item.answer);

          return (
            <View key={index} style={styles.card}>

              {/* Question */}
              <Text style={[styles.question, { color: theme.text }]}>
                Q{index + 1}. {item.question}
              </Text>

              {/* Content */}
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

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
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
});