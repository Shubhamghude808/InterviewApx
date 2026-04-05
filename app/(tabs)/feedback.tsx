import React, { useState } from "react";
import {
  Alert, Linking, StyleSheet,
  Text,
  TextInput,
  TouchableOpacity, useColorScheme, View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/theme";

export default function FeedbackScreen() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
      edges={["top"]} // ✅ removes bottom gap
    >
      {/* 🔥 TOP CONTENT */}
      <View style={styles.topContent}>
        <Text style={[styles.title, { color: theme.text }]}>
          Share Your Thoughts
        </Text>

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
            },
          ]}
        />

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
              height: 120,
              backgroundColor: theme.card,
              borderColor: theme.border,
              color: theme.text,
            },
          ]}
        />

        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor:
                scheme === "dark" ? "#2563EB" : "#4A90E2",
            },
          ]}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      {/* 🔥 BOTTOM CONTACT */}
      <View
        style={[
          styles.contactContainer,
          { borderTopColor: theme.border },
        ]}
      >
        <Text style={[styles.contactTitle, { color: theme.text }]}>
          Contact Us
        </Text>

        {/* Dev 1 */}
        <View
          style={[
            styles.devCard,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
        >
          <Text style={[styles.devName, { color: theme.text }]}>
            Shubham Ghude
          </Text>

          <View style={styles.linkRow}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://www.linkedin.com/in/shubham-ghude")
              }
            >
              <Text style={styles.devLink}>LinkedIn</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                Linking.openURL("mailto:shubhamghude808@gmail.com")
              }
            >
              <Text style={styles.devLink}>Email</Text>
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
            },
          ]}
        >
          <Text style={[styles.devName, { color: theme.text }]}>
            Sujay Navghare
          </Text>

          <View style={styles.linkRow}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://www.linkedin.com/in/sujaynavghare")
              }
            >
              <Text style={styles.devLink}>LinkedIn</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                Linking.openURL("mailto:sujaynavghare31@gmail.com")
              }
            >
              <Text style={styles.devLink}>Email</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.devCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
          <Text style={[styles.devName, { color: theme.text }]}>
            Built with ❤️ by NSG.ai Labs
          </Text>
          <TouchableOpacity onPress={() => Linking.openURL("mailto:nsg.aiLabs@gmail.com")}>
            <Text style={{ color: theme.icon, fontSize: 13, marginTop: 4 }}>
              We're just an email away{" "}
              <Text style={styles.devLink}>nsg.ailabs@gmail.com</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  topContent: {
    flex: 1, // 🔥 pushes contact section down properly
  },

  title: {
    fontSize: 30,
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
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },

  contactContainer: {
    paddingTop: 15,
    borderTopWidth: 1,
  },

  contactTitle: {
    fontSize: 18,
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
    fontSize: 14,
    fontWeight: "600",
  },

  devLink: {
    fontSize: 13,
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