import React, { useState } from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    View,
    Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

export default function ModifierProfile() {
    const router = useRouter();
    const [name, setName] = useState('Paul');
    const [lastName, setLastName] = useState('Martin');
    const [phone, setPhone] = useState('+261 34 12 345 67');
    const [birthDate, setBirthDate] = useState('12 Mars 1992');

    const handleSave = () => {
        console.log('Infos sauvegardées :', { name, lastName, phone, birthDate });
        router.back();
    };

    return (
        <ScrollView style={styles.container}>
            {/* Photo + infos */}
            <View style={styles.cardHeader}>
                <Image
                    source={{
                        uri: 'https://randomuser.me/api/portraits/men/32.jpg',
                    }}
                    style={styles.avatar}
                />
                <View style={styles.photoOptions}>
                    <TouchableOpacity style={styles.photoBox}>
                        <MaterialIcons name="photo-camera" size={30} color="#555" />
                        <Text style={styles.photoText}>Prendre une photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.photoBox}>
                        <Entypo name="images" size={30} color="#555" />
                        <Text style={styles.photoText}>Importer une photo</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Inputs */}
            <Text style={styles.label}>Nom</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} />

            <Text style={styles.label}>Prénom</Text>
            <TextInput style={styles.input} value={lastName} onChangeText={setLastName} />

            <Text style={styles.label}>Téléphone</Text>
            <TextInput
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
            />

            <Text style={styles.label}>Date de naissance</Text>
            <TextInput style={styles.input} value={birthDate} onChangeText={setBirthDate} />

            {/* Bouton Enregistrer */}
            <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>Enregistrer</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
    cardHeader: {
        alignItems: 'center',
        marginBottom: 24,
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 12 },
    title: { fontSize: 20, fontWeight: 'bold' },
    info: { fontSize: 14, color: '#333', marginTop: 4 },

    label: { fontSize: 14, color: 'gray', marginTop: 12 },
    input: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 12,
        marginTop: 6,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    button: {
        marginTop: 24,
        marginBottom: 60,
        padding: 16,
        backgroundColor: '#555555ff',
        borderRadius: 12,
        alignItems: 'center',
    },
    buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },

    photoOptions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 5,
        gap: 20,
    },
    photoBox: {
        width: '45%',
        height: 100,
        backgroundColor: 'white',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    photoText: { marginTop: 8, fontSize: 14, color: '#555', textAlign: 'center' },
});
