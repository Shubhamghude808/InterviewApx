import { View, Text, ScrollView, StyleSheet, Alert } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { data } from "../constants/data";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Clipboard from "expo-clipboard";

export default function TopicScreen() {
  const { name } = useLocalSearchParams();
  const questions = data[name as keyof typeof data] || [];

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
  "#569CD6", // blue
  "#CE9178", // orange
  "#4EC9B0", // teal
  "#DCDCAA", // yellow
  "#C586C0", // purple
  "#9CDCFE", // light blue
];

const getColorForKeyword = (word: string) => {
  let hash = 0;

  for (let i = 0; i < word.length; i++) {
    hash = word.charCodeAt(i) + ((hash << 5) - hash);
  }

  return colors[Math.abs(hash) % colors.length];
};
  // 🎨 Simple Syntax Highlighter
  const highlightCode = (code: string) => {
    const keywords = [
       // Original JS/TS/Playwright
    "const", "let", "var", "return", "class", "static", "if", "else", 
    "for", "while", "import", "from", "function", "true", "false","Switch", "case", "break", "default","String", "Set",

    // Added for Playwright & Modern JS/TS
    "async", "await", "export", "interface", "type", "enum", "null",

    // Added for Java
    "public", "private", "protected", "final", "void", "new", "this", "extends", "implements",

    // Added for Python
    "def", "elif", "try", "except", "lambda", "None", "in", "is", "and", "or", "not",

    // Added for SQL
    "SELECT", "FROM", "WHERE", "INSERT", "UPDATE", "DELETE", "JOIN", "CREATE", "DROP", "ALTER"
  ];


    return code.split("\n").map((line, lineIndex) => (
    <Text key={lineIndex} style={{ flexWrap: "wrap" }}>
      {line.split(" ").map((word, wordIndex) => {
        let color = "#D4D4D4"; // default

        if (keywords.includes(word)) {
          color = getColorForKeyword(word); // 🎨 random per keyword
        } else if (word.startsWith("//")) {
          color = "#6A9955"; // 🟢 comments
        } else if (word.includes("'") || word.includes('"')) {
          color = "#CE9178"; // 🟠 strings
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
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>
          {name?.toString().toUpperCase()}
        </Text>

        {questions.map((item, index) => {
          const parsed = parseContent(item.answer);

          return (
            <View key={index} style={styles.card}>

              {/* Question */}
              <Text style={styles.question}>
                Q{index + 1}. {item.question}
              </Text>

              {/* Content */}
              {parsed.map((block, i) =>
                block.type === "code" ? (
                  <View key={i} style={styles.codeBox}>

                    {/* Header */}
                    <View style={styles.codeHeader}>
                      <Text style={styles.codeLabel}>Code</Text>

                      <Text
                        style={styles.copyText}
                        onPress={() => copyCode(block.content)}
                      >
                        Copy
                      </Text>
                    </View>

                    {/* Highlighted Code */}
                    <Text style={styles.codeText}>
                      {highlightCode(block.content)}
                    </Text>

                  </View>
                ) : (
                  <View key={i} style={styles.textBox}>
                    <Text style={styles.answerText}>
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
    backgroundColor: "#F5F7FB",
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

  // 📝 Text block
  textBox: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDE3EC",
    padding: 14,
    borderRadius: 12,
    marginTop: 8,
  },

  answerText: {
    color: "#444",
    fontSize: 14,
    lineHeight: 20,
  },

  // 💻 Code block
  codeBox: {
    backgroundColor: "#1E1E1E",
    padding: 14,
    borderRadius: 12,
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