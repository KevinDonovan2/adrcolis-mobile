import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Données simulées pour différents filtres
const mockLivreurs = {
  general: [
    { id: "1", name: "Jean Dupont", classement: "1er", livraisons: 1500 },
    { id: "2", name: "Paul Martin", classement: "2ème", livraisons: 11487 },
    { id: "3", name: "Sarah Rakoto", classement: "3ème", livraisons: 980 },
    { id: "4", name: "Mickael Randria", classement: "4ème", livraisons: 870 },
    { id: "5", name: "Mickael Randria", classement: "5ème", livraisons: 8270 },
    { id: "6", name: "Randria", classement: "6ème", livraisons: 1870 },
    { id: "7", name: "Mickael Randria", classement: "7ème", livraisons: 7870 },
    { id: "8", name: "Mickael Randria", classement: "8ème", livraisons: 9870 },
  ],
  semaine: [
    { id: "1", name: "Jean Dupont", classement: "2ème", livraisons: 120 },
    { id: "2", name: "Paul Martin", classement: "1er", livraisons: 180 },
  ],
  jour: [
    { id: "1", name: "Sarah Rakoto", classement: "1er", livraisons: 15 },
    { id: "2", name: "Jean Dupont", classement: "2ème", livraisons: 10 },
  ],
};

export default function ListeLivreurs() {
  const navigation = useNavigation();
  const [filtre, setFiltre] = useState<"general" | "semaine" | "jour">("general");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Classement des livreurs</Text>

      {/* Onglets */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, filtre === "general" && styles.tabActive]}
          onPress={() => setFiltre("general")}
        >
          <Text
            style={[
              styles.tabText,
              filtre === "general" && styles.tabTextActive,
            ]}
          >
            Général
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, filtre === "semaine" && styles.tabActive]}
          onPress={() => setFiltre("semaine")}
        >
          <Text
            style={[
              styles.tabText,
              filtre === "semaine" && styles.tabTextActive,
            ]}
          >
            Semaine
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, filtre === "jour" && styles.tabActive]}
          onPress={() => setFiltre("jour")}
        >
          <Text
            style={[styles.tabText, filtre === "jour" && styles.tabTextActive]}
          >
            Jour
          </Text>
        </TouchableOpacity>
      </View>

      {/* Liste selon l’onglet actif */}
      <FlatList
        data={mockLivreurs[filtre]}
        showsVerticalScrollIndicator={false} 
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

      {/* Bouton retour */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>⬅ Retour</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", padding: 16, marginTop: 8 },
  title: { fontSize: 29, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
  },
  tabActive: {
    backgroundColor: "#555555",
  },
  tabText: {
    fontSize: 16,
    color: "#333",
  },
  tabTextActive: {
    color: "white",
    fontWeight: "bold",
  },
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
    backgroundColor: "#555555",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});
