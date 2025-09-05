import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function CreationLivreur() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [prenoms, setPrenoms] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleCreateUser = () => {
        if (!name || !prenoms || !email || !password || !confirmPassword) {
            Alert.alert('Erreur', 'Tous les champs sont obligatoires');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Erreur', 'Les mots de passe ne correspondent pas');
            return;
        }

        console.log('Nouvel utilisateur :', { name, prenoms, email, password });

        Alert.alert('Succès', 'Utilisateur créé avec succès !');
        router.replace('/bienvenue');
    };

    return (
        <View style={styles.container}>
            {/* Bouton retour */}
            <TouchableOpacity style={styles.backButton} onPress={() => router.push('/login')}>
                <Ionicons name="arrow-back" size={28} color="black" />
            </TouchableOpacity>

            <Image source={require('../assets/logo.png')} style={styles.logo} />

            <Text style={styles.title}>Créer un utilisateur</Text>

            <TextInput style={styles.input} placeholder="Nom" value={name} onChangeText={setName} />

            <TextInput
                style={styles.input}
                placeholder="Prénoms"
                value={prenoms}
                onChangeText={setPrenoms}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TextInput
                style={styles.input}
                placeholder="Confirmer le mot de passe"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleCreateUser}>
                <Text style={styles.buttonText}>Créer</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#333',
    },
    logo: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: 'black',
        alignSelf: 'center',
        marginTop: -80,
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#494343ff',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    backButton: {
        position: 'absolute',
        top: 60,
        left: 20,
        backgroundColor: '#b8b8b8ff',
        padding: 8,
        borderRadius: 30,
        zIndex: 10,
    },
});
