import React, { useState } from "react";
import { Linking, useColorScheme } from "react-native";

import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/theme";

export default function FeedbackScreen() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // ✅ theme setup
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? "light"];

  const handleSubmit = async () => {
    try {
      const res = await fetch("https://formspree.io/f/mdapkpew", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          message,
        }),
      });

      if (res.ok) {
        Alert.alert("Success", "Thank you for your feedback!");
        setEmail("");
        setMessage("");
      } else {
        Alert.alert("Try again", "Something went wrong! Please check your email id");
      }
    } catch (error) {
      Alert.alert("Error", "Network error");
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      
      <View>
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
          textAlignVertical="top"
          multiline
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
      backgroundColor: scheme === "dark" ? "#2563EB" : "#4A90E2",
    },
  ]}
  onPress={handleSubmit}
>
  <Text style={styles.buttonText}>Submit</Text>
</TouchableOpacity>
      </View>

      {/* Bottom Section */}
      <View
        style={[
          styles.contactContainer,
          { borderTopColor: theme.border 
            
          },
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

          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.linkedin.com/in/shubham-ghude")
            }
          >
            <Text style={styles.devLink}>LinkedIn</Text>
          </TouchableOpacity>
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

          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.linkedin.com/in/sujaynavghare")
            }
          >
            <Text style={styles.devLink}>LinkedIn</Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },

  title: {
    fontSize: 26,
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
    // backgroundColor: "#4A90E2", // keep accent same
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },

  contactContainer: {
    marginTop: 40,
    paddingTop: 20,
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
  },
});