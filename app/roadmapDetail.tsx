import { View, Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function RoadmapDetail() {
  const { name } = useLocalSearchParams();

  const images: any = {
    frontend: require("../assets/images/frontend.png"),
    backend: require("../assets/images/backend.png"),
    manual: require("../assets/images/manualqa.png"),
    automation: require("../assets/images/Automationqa.png"),

  };

  return (
    <View style={styles.container}>
      <Image source={images[name as string]} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});