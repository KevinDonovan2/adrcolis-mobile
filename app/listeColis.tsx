import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const contratInfo = {
    id: '1',
    contratNumero: 'X12345',
    magasin: 'Magasin Carrefour',
    creneau: '10h - 12h',
    adresse: '12 Rue de Paris',
    totalColis: 9,
};

const mockColis = [
    { id: 'C1', numero: 'Colis #001', status: 'chargé' },
    { id: 'C2', numero: 'Colis #002', status: 'manquant' },
    { id: 'C3', numero: 'Colis #003', status: 'à scanner' },
    { id: 'C4', numero: 'Colis #004', status: 'chargé' },
    { id: 'C5', numero: 'Colis #005', status: 'à scanner' },
    { id: 'C6', numero: 'Colis #006', status: 'manquant' },
    { id: 'C7', numero: 'Colis #007', status: 'à scanner' },
    { id: 'C8', numero: 'Colis #008', status: 'chargé' },
    { id: 'C9', numero: 'Colis #009', status: 'à scanner' },
];

export default function ListeColis() {
    const router = useRouter();
    const { contratId } = useLocalSearchParams();
    const [colis] = useState(mockColis);

    const renderIcon = (status: string) => {
        switch (status) {
            case 'chargé':
                return <MaterialIcons name="check-circle" size={40} color="green" />;
            case 'manquant':
                return <MaterialIcons name="cancel" size={40} color="red" />;
            case 'à scanner':
                return <MaterialIcons name="arrow-forward" size={40} color="orange" />;
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            {/* En-tête contrat */}
            <View style={styles.header}>
                <View style={styles.column}>
                    <Text style={styles.headerTitle}>Contrat {contratInfo.contratNumero}</Text>
                    <Text style={styles.headerDetail}>🏪 {contratInfo.magasin}</Text>
                    <Text style={styles.headerDetail}>⏰ {contratInfo.creneau}</Text>
                    <Text style={styles.headerDetail}>📍 {contratInfo.adresse}</Text>
                </View>
                {/* Cercle total colis */}
                <View style={styles.circle}>
                    <Text style={styles.circleText}>{contratInfo.totalColis}</Text>
                </View>
            </View>

            {/* Liste des colis */}
            <FlatList
                data={colis}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() =>
                            router.push({ pathname: '/detailColis', params: { colisId: item.id } })
                        }
                    >
                        <Text style={styles.colisText}>{item.numero}</Text>
                        {renderIcon(item.status)}
                    </TouchableOpacity>
                )}
            />

            {/* Icône scan en bas */}
            <TouchableOpacity
                style={styles.scanButton}
                onPress={() => router.push('/scanColisChargement')}
            >
                <MaterialIcons name="qr-code-scanner" size={28} color="white" />
                <Text style={styles.scanButtonText}>Scanner Colis</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    column: { display: 'flex', flexDirection: 'column' },
    container: { flex: 1, backgroundColor: '#f5f5f5', marginTop: 8 },
    header: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    headerTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 6 },
    headerDetail: { fontSize: 14, color: '#555', marginBottom: 2 },
    circle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: '#68666649',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    card: {
        flexDirection: 'row',
        margin: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    colisText: { fontSize: 16, fontWeight: '500', color: '#333' },
    scanButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#555555',
        padding: 14,
        marginBottom: 20,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 12,
        marginTop: 5,
    },
    scanButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
    },
});
