import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function BienvenueScreen() {
  const router = useRouter();
  const username = "John Doe"; 

  return (
    <View style={styles.container}>
      {/* Bouton retour */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.push("/login")}>
        <Ionicons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>

      {/* Logo */}
      <View>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>Bienvenue</Text>
      </View>

      {/* Contenu principal */}
      <View style={styles.content}>
        
        <Text style={styles.subtitle}>votre nom d utilisateur :</Text>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.company}>Vous êtes rattaché à l entreprise</Text>
        <Text style={styles.companyName}>Delivery69</Text>
      </View>

      {/* Bouton suivant */}
      <TouchableOpacity style={styles.nextButton} onPress={() => router.replace("/(tabs)")}>
        <Text style={styles.nextText}>Suivant</Text>
        <Ionicons name="arrow-forward" size={22} color="white" style={{ marginLeft: 8 }} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    gap:100,
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 60,
    left: 20,
    backgroundColor: "#f0f0f0",
    padding: 8,
    borderRadius: 30,
    zIndex: 10,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "black",
    alignSelf: "center",
    marginTop: 100,
  },
  content: {
    alignItems: "center",
    marginTop: -40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop:15,
    textAlign: "center",
    color: "#333",
  },
  username: {
    fontSize: 20,
    fontWeight: "600",
    color: "#494343ff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  company: {
    fontSize: 16,
    color: "#444",
  },
  companyName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#494343ff",
    marginTop: 5,
  },
  nextButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#494343ff",
    padding: 15,
    borderRadius: 30,
    marginBottom: 40,
  },
  nextText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
