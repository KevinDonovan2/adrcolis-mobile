import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

const mockContrats = [
  {
    id: "1",
    contratNumero: "X12345",
    magasin: "Magasin Carrefour",
    creneau: "10h - 12h",
    adresse: "12 Rue de Paris",
    nbColis: 9,
    status: "En cours",
  },
  {
    id: "2",
    contratNumero: "Y67890",
    magasin: "Magasin Jumbo",
    creneau: "14h - 16h",
    adresse: "45 Avenue de l’Indépendance",
    nbColis: 8,
    status: "Livré",
  },
  {
    id: "3",
    contratNumero: "Y67890",
    magasin: "Magasin Jumbo",
    creneau: "14h - 16h",
    adresse: "45 Avenue de l’Indépendance",
    nbColis: 8,
    status: "Livré",
  },
  {
    id: "4",
    contratNumero: "Y67890",
    magasin: "Magasin Jumbo",
    creneau: "14h - 16h",
    adresse: "45 Avenue de l’Indépendance",
    nbColis: 8,
    status: "Livré",
  },
  {
    id: "5",
    contratNumero: "Y67890",
    magasin: "Magasin Jumbo",
    creneau: "14h - 16h",
    adresse: "45 Avenue de l’Indépendance",
    nbColis: 8,
    status: "Livré",
  },
  {
    id: "6",
    contratNumero: "Y67890",
    magasin: "Magasin Jumbo",
    creneau: "14h - 16h",
    adresse: "45 Avenue de l’Indépendance",
    nbColis: 8,
    status: "Livré",
  },
];

export default function ListeContrats() {
  const router = useRouter();
  const [contrats] = useState(mockContrats);

  return (
    <View style={styles.container}>
      <FlatList
        data={contrats}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push({ pathname: "/listeColis", params: { contratId: item.id } })}
          >
            {/* Titre */}
            <Text style={styles.title}>
              Livraison n° {index + 1} - Contrat {item.contratNumero}
            </Text>

            {/* Détails */}
            <Text style={styles.detail}>🏪 {item.magasin}</Text>
            <Text style={styles.detail}>⏰ {item.creneau}</Text>
            <Text style={styles.detail}>📍 {item.adresse}</Text>

            {/* Ligne Colis + Status */}
            <View style={styles.bottomRow}>
              <View style={styles.colisButton}>
                <Text style={styles.colisText}>{item.nbColis} colis</Text>
              </View>
              <Text style={styles.status}>{item.status}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", padding: 16, marginTop: 8 },
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
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  detail: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  colisButton: {
    backgroundColor: "#eee",
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  colisText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#333",
  },
  status: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#007BFF",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#555555",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});
