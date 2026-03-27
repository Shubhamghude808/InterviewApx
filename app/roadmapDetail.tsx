import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";

const imagesMap: Record<string, any> = {
  frontend: require("../assets/images/frontend.png"),
  backend: require("../assets/images/backend.png"),
  manual: require("../assets/images/manualqa.png"),
  automation: require("../assets/images/Automationqa.png"),
};

export default function RoadmapDetail() {
  const { name } = useLocalSearchParams();
  const router = useRouter();

  const source = imagesMap[name as string];
  const resolvedUri = require("../assets/images/frontend.png"); // fallback shape

  // react-native-image-zoom-viewer needs { url: string }
  // For local assets, resolve the URI at runtime
  const { uri } = require("react-native").Image.resolveAssetSource(source);

  const images = [{ url: uri }];

  return (
    <View style={styles.container}>
      <ImageViewer
        imageUrls={images}
        index={0}
        onCancel={() => router.back()}
        enableSwipeDown
        useNativeDriver
        backgroundColor="#000"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});