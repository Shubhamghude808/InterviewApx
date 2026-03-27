import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FeedbackScreen() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Feedback</Text>

      <TextInput
        placeholder="Your Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Your Message"
        value={message}
        onChangeText={setMessage}
        textAlignVertical="top" 
        style={[styles.input, { height: 120 }]}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F7FB", // ✅ soft background
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1A1A1A",
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#DDE3EC",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#4A90E2",
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
  textArea: {
  backgroundColor: "#fff",
  borderWidth: 1,
  borderColor: "#DDE3EC",
  padding: 12,
  borderRadius: 10,
  marginBottom: 15,
  height: 120,
  textAlignVertical: "top", // 👈 also safe to add here
},
});