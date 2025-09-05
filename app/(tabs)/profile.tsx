import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function Profile() {
    const router = useRouter();

    return (
        <ScrollView style={styles.container}>
            {/* Informations principales */}
            <View style={styles.cardHeader}>
                <Image
                    source={{
                        uri: 'https://randomuser.me/api/portraits/men/32.jpg',
                    }}
                    style={styles.avatar}
                />
                <Text style={styles.title}>Paul Martin</Text>
                <Text style={styles.subtitle}>Livreur #69</Text>
                <Text style={styles.info}>+261 34 12 345 67</Text>
                <Text style={styles.info}>12 Mars 1992</Text>
                <TouchableOpacity
                    style={styles.editButton}
                    onPress={() => router.push('/modifierProfile')}
                >
                    <MaterialIcons name="edit" size={20} color="#555" />
                    <Text style={styles.editText}>Modifier mes infos</Text>
                </TouchableOpacity>
            </View>

            {/* Bouton navigation */}
            <TouchableOpacity style={styles.button} onPress={() => router.push('/listeLivreurs')}>
                <Text style={styles.buttonText}>Voir la liste des classements</Text>
            </TouchableOpacity>
            {/* CLASSEMENT & SCORE GLOBAL */}
            <View style={styles.row}>
                <View style={styles.card}>
                    <Text style={styles.cardSubtitle}>CLASSEMENT</Text>
                    <Text style={styles.cardValue}>2ème</Text>
                    <Text style={styles.cardText}>sur 280 livreurs</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardSubtitle}>SCORE GLOBAL</Text>
                    <View style={styles.scoreRow}>
                        <View style={styles.scoreItem}>
                            <Text style={styles.cardValue}>87%</Text>
                            <Text style={styles.cardText}>satisfaction</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.scoreItem}>
                            <Text style={styles.cardValue}>11 487</Text>
                            <Text style={styles.cardText}>Livraisons</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* SCORE SEMAINE & SCORE JOUR */}
            <View style={styles.row}>
                <View style={styles.card}>
                    <Text style={styles.cardSubtitle}>SCORE SEMAINE</Text>
                    <View style={styles.scoreRow}>
                        <View style={styles.scoreItem}>
                            <Text style={styles.cardValue}>92%</Text>
                            <Text style={styles.cardText}>satisfaction</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.scoreItem}>
                            <Text style={styles.cardValue}>128</Text>
                            <Text style={styles.cardText}>Livraisons</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardSubtitle}>SCORE JOUR</Text>
                    <View style={styles.scoreRow}>
                        <View style={styles.scoreItem}>
                            <Text style={styles.cardValue}>94%</Text>
                            <Text style={styles.cardText}>satisfaction</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.scoreItem}>
                            <Text style={styles.cardValue}>16</Text>
                            <Text style={styles.cardText}>Livraisons</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
    cardHeader: {
        marginHorizontal: 16,
        marginTop: 60,
        marginBottom: 16,
        borderRadius: 12,
        backgroundColor: 'white',
        padding: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 8 },
    title: { fontSize: 20, fontWeight: 'bold' },
    subtitle: { fontSize: 16, color: 'gray', marginBottom: 8 },
    info: { fontSize: 14, color: '#333' },

    editButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
        backgroundColor: '#eee',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
    editText: {
        marginLeft: 6,
        fontSize: 14,
        color: '#555',
        fontWeight: '600',
    },

    row: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 8 },
    card: {
        flex: 1,
        margin: 8,
        padding: 16,
        borderRadius: 12,
        backgroundColor: 'white',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    cardSubtitle: { fontSize: 12, color: 'gray', marginBottom: 4 },
    cardValue: { fontSize: 22, fontWeight: 'bold' },
    cardText: { fontSize: 12, color: 'gray' },
    scoreRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
    scoreItem: { alignItems: 'center' },
    divider: { width: 1, height: '100%', backgroundColor: '#ddd', marginHorizontal: 16 },
    button: {
        margin: 16,
        padding: 10,
        backgroundColor: '#555555ff',
        borderRadius: 12,
        alignItems: 'center',
    },
    buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});
