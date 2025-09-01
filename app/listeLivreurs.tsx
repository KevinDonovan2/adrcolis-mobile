import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const mockLivreurs = [
  { id: "1", name: "Jean Dupont", classement: "1er", livraisons: 1500 },
  { id: "2", name: "Paul Martin", classement: "3ème", livraisons: 11487 },
  { id: "3", name: "Sarah Rakoto", classement: "5ème", livraisons: 980 },
  { id: "4", name: "Mickael Randria", classement: "7ème", livraisons: 870 },
];

export default function ListeLivreurs() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Classement des livreurs</Text>

      <FlatList
        data={mockLivreurs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.details}>
              {item.classement} - {item.livraisons} livraisons
            </Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>⬅ Retour</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", padding: 16, marginTop: 60 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  name: { fontSize: 18, fontWeight: "bold" },
  details: { fontSize: 14, color: "gray" },
  button: {
    marginTop: 20,
    backgroundColor: "#555555ff",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});
