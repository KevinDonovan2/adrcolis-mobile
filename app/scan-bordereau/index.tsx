import { View, Text, StyleSheet } from "react-native";

export default function ScanBordereauScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page Scan Bordereau</Text>
      <Text style={styles.subtitle}>Ici tu pourras scanner un bordereau</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
});
