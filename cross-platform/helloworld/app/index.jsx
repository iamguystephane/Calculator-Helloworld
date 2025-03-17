import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Stylesheet } from "react-native";

export default function Helloworld() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText> Hello world </ThemedText>
    </ThemedView>
  );
}

const styles = Stylesheet.create({
  container: {
    width: 100,
    height: 100,
    display: "grid",
    placeContent: "center",
  },
});
