import { db } from "./firebaseConfig";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import { data } from "./constants/data"; // your file

const uploadData = async () => {
  try {
    for (const topicName in data) {
      // 1. Create topic document
      const topicRef = doc(db, "topics", topicName);

      await setDoc(topicRef, {
        name: topicName,
      });

      // 2. Add questions as subcollection
      const questions = data[topicName];

      for (const item of questions) {
        await addDoc(collection(topicRef, "questions"), {
          question: item.question,
          answer: item.answer,
        });
      }
    }

    console.log("🔥 Data uploaded successfully");
  } catch (error) {
    console.error("❌ Error uploading data:", error);
  }
};

export default uploadData;