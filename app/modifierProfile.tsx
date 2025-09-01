import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ModifierProfile() {
  const navigation = useNavigation();
  const [name, setName] = useState("Paul Martin");
  const [phone, setPhone] = useState("+261 34 12 345 67");
  const [birthDate, setBirthDate] = useState("12 Mars 1992");

  const handleSave = () => {
    // Tu pourras appeler ton API ici
    console.log("Infos sauvegardées :", { name, phone, birthDate });
    navigation.goBack(); // Retour au profil
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Modifier mes informations</Text>

      <Text style={styles.label}>Nom complet</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Téléphone</Text>
      <TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />

      <Text style={styles.label}>Date de naissance</Text>
      <TextInput style={styles.input} value={birthDate} onChangeText={setBirthDate} />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Enregistrer</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f5f5f5", marginTop: 60 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 16 },
  label: { fontSize: 14, color: "gray", marginTop: 12 },
  input: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    marginTop: 6,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    marginTop: 24,
    padding: 16,
    backgroundColor: "#555555ff",
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});
