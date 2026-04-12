import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/theme";
import { useFontSize } from "../../context/FontSizeContext";

export default function FeedbackScreen() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { fontSizeMultiplier } = useFontSize();

  const scheme = useColorScheme();
  const theme = Colors[scheme ?? "light"];

  const handleSubmit = async () => {
    try {
      const res = await fetch("https://formspree.io/f/mdapkpew", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) {
        Alert.alert("Success", "Thank you for your feedback!");
        setEmail("");
        setMessage("");
      } else {
        Alert.alert("Try again", "Something went wrong!");
      }
    } catch {
      Alert.alert("Error", "Network error");
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
      edges={["top"]}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={{ paddingBottom: 120 }}
          showsVerticalScrollIndicator={false}
        >
          {/* 🔥 TITLE */}
          <Text
            style={[
              styles.title,
              {
                color: theme.text,
                fontSize: 30 * fontSizeMultiplier,
                lineHeight: 36 * fontSizeMultiplier,
                marginBottom: 20 * fontSizeMultiplier,
              },
            ]}
          >
            Share Your Thoughts
          </Text>

          {/* 🔥 EMAIL INPUT */}
          <TextInput
            placeholder="Your Email"
            placeholderTextColor={theme.icon}
            value={email}
            onChangeText={setEmail}
            style={[
              styles.input,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
                color: theme.text,
                fontSize: 14 * fontSizeMultiplier,
                padding: 12 * fontSizeMultiplier,
                marginBottom: 15 * fontSizeMultiplier,
              },
            ]}
          />

          {/* 🔥 MESSAGE INPUT */}
          <TextInput
            placeholder="Your Message"
            placeholderTextColor={theme.icon}
            value={message}
            onChangeText={setMessage}
            multiline
            textAlignVertical="top"
            style={[
              styles.input,
              {
                height: 140 * fontSizeMultiplier,
                backgroundColor: theme.card,
                borderColor: theme.border,
                color: theme.text,
                fontSize: 14 * fontSizeMultiplier,
                padding: 12 * fontSizeMultiplier,
                marginBottom: 15 * fontSizeMultiplier,
              },
            ]}
          />

          {/* 🔥 SUBMIT BUTTON */}
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor:
                  scheme === "dark" ? "#2563EB" : "#4A90E2",
                padding: 15 * fontSizeMultiplier,
                marginTop: 10 * fontSizeMultiplier,
              },
            ]}
            onPress={handleSubmit}
          >
            <Text
              style={[
                styles.buttonText,
                {
                  fontSize: 16 * fontSizeMultiplier,
                  lineHeight: 20 * fontSizeMultiplier,
                },
              ]}
            >
              Submit
            </Text>
          </TouchableOpacity>

          {/* 🔥 CONTACT SECTION */}
          <View
            style={[
              styles.contactContainer,
              {
                borderTopColor: theme.border,
                marginTop: 30 * fontSizeMultiplier,
              },
            ]}
          >
            <Text
              style={[
                styles.contactTitle,
                {
                  color: theme.text,
                  fontSize: 18 * fontSizeMultiplier,
                  lineHeight: 22 * fontSizeMultiplier,
                  marginBottom: 10 * fontSizeMultiplier,
                },
              ]}
            >
              Contact Us
            </Text>

            {/* Dev 1 */}
            <View
              style={[
                styles.devCard,
                {
                  backgroundColor: theme.card,
                  borderColor: theme.border,
                  padding: 12 * fontSizeMultiplier,
                  marginBottom: 10 * fontSizeMultiplier,
                },
              ]}
            >
              <Text
                style={[
                  styles.devName,
                  {
                    color: theme.text,
                    fontSize: 14 * fontSizeMultiplier,
                    lineHeight: 18 * fontSizeMultiplier,
                  },
                ]}
              >
                Shubham Ghude
              </Text>

              <View style={[styles.linkRow, { marginTop: 6 * fontSizeMultiplier }]}>
                <TouchableOpacity
                  onPress={() =>
                    
                    Linking.openURL(
                      "https://www.linkedin.com/in/shubham-ghude"
                    )
                  }
                >
                  <Text
                    style={[
                      styles.devLink,
                      { fontSize: 13 * fontSizeMultiplier, marginTop: 4 * fontSizeMultiplier },
                    ]}
                  >
                    LinkedIn
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      "mailto:shubhamghude808@gmail.com"
                    )
                  }
                >
                  <Text
                    style={[
                      styles.devLink,
                      { fontSize: 13 * fontSizeMultiplier, marginTop: 4 * fontSizeMultiplier },
                    ]}
                  >
                    Email
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Dev 2 */}
            <View
              style={[
                styles.devCard,
                {
                  backgroundColor: theme.card,
                  borderColor: theme.border,
                  padding: 12 * fontSizeMultiplier,
                  marginBottom: 10 * fontSizeMultiplier,
                },
              ]}
            >
              <Text
                style={[
                  styles.devName,
                  {
                    color: theme.text,
                    fontSize: 14 * fontSizeMultiplier,
                    lineHeight: 18 * fontSizeMultiplier,
                  },
                ]}
              >
                Sujay Navghare
              </Text>

              <View style={[styles.linkRow, { marginTop: 6 * fontSizeMultiplier }]}>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      "https://www.linkedin.com/in/sujaynavghare"
                    )
                  }
                >
                  <Text
                    style={[
                      styles.devLink,
                      { fontSize: 13 * fontSizeMultiplier, marginTop: 4 * fontSizeMultiplier },
                    ]}
                  >
                    LinkedIn
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      "mailto:sujaynavghare31@gmail.com"
                    )
                  }
                >
                  <Text
                    style={[
                      styles.devLink,
                      { fontSize: 13 * fontSizeMultiplier, marginTop: 4 * fontSizeMultiplier },
                    ]}
                  >
                    Email
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Footer */}
            <View
              style={[
                styles.devCard,
                {
                  backgroundColor: theme.card,
                  borderColor: theme.border,
                  padding: 12 * fontSizeMultiplier,
                  marginBottom: 10 * fontSizeMultiplier,
                },
              ]}
            >
              <Text
                style={[
                  styles.devName,
                  {
                    color: theme.text,
                    fontSize: 14 * fontSizeMultiplier,
                    lineHeight: 18 * fontSizeMultiplier,
                  },
                ]}
              >
                Built with ❤️ by NSG.ai Labs
              </Text>

              <TouchableOpacity
                onPress={() =>
                  Linking.openURL("mailto:nsg.ailabs@gmail.com")
                }
              >
                <Text
                  style={{
                    color: theme.icon,
                    fontSize: 13 * fontSizeMultiplier,
                    marginTop: 4 * fontSizeMultiplier,
                    lineHeight: 18 * fontSizeMultiplier,
                  }}
                >
                  We're just an email away{" "}
                  <Text
                    style={[
                      styles.devLink,
                      { fontSize: 13 * fontSizeMultiplier },
                    ]}
                  >
                    nsg.ailabs@gmail.com
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
    fontWeight: "bold",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },

  button: {
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },

  contactContainer: {
    marginTop: 30,
    paddingTop: 15,
    borderTopWidth: 1,
  },

  contactTitle: {
    fontWeight: "bold",
    marginBottom: 10,
  },

  devCard: {
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
  },

  devName: {
    fontWeight: "600",
  },

  devLink: {
    color: "#4A90E2",
    marginTop: 4,
    fontWeight: "600",
  },

  linkRow: {
    flexDirection: "row",
    gap: 20,
    marginTop: 6,
  },
});