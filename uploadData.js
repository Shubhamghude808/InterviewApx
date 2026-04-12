//Unused file to upload data to Firestore. Run once and then comment this file.
import { doc, setDoc } from "firebase/firestore";
import { data } from "./constants/data";
import { db } from "./firebaseConfig";

const uploadData = async () => {
  try {
    for (const topicName in data) {
      // ✅ 1. Create topic document
      const topicRef = doc(db, "topics", topicName);

      await setDoc(topicRef, {
        name: topicName,
      });

      const questions = data[topicName];

      for (const item of questions) {
        // 🔥 CREATE UNIQUE CLEAN ID
        const cleanId = item.question
          .trim()
          .toLowerCase()
          .replace(/\s+/g, " ")
          .replace(/[^\w\s]/gi, ""); // remove special chars

        const questionRef = doc(topicRef, "questions", cleanId);

        // ✅ 2. Use setDoc (NO DUPLICATES)
        await setDoc(questionRef, {
          question: item.question,
          answer: item.answer,
        });
      }
    }

    console.log("🔥 Data uploaded successfully (NO DUPLICATES)");
  } catch (error) {
    console.error("❌ Error uploading data:", error);
  }
};

export default uploadData;