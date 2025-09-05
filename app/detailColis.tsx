import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const colisInfo = {
    id: 'C1',
    numero: 'Colis #001',
    poids: '2.5 kg',
    dimension: '30x20x15 cm',
    statut: 'À scanner',
};

export default function DetailColis() {
    const [selected, setSelected] = useState<string | null>(null);

    const signalements = ['Colis détérioré', 'Colis ouvert', 'Colis manquant'];

    return (
        <View style={styles.container}>
            {/* En-tête colis */}
            <View style={styles.header}>
                <View style={styles.column}>
                    <Text style={styles.headerTitle}>{colisInfo.numero}</Text>
                    <Text style={styles.headerDetail}>⚖️ {colisInfo.poids}</Text>
                    <Text style={styles.headerDetail}>📦 {colisInfo.dimension}</Text>
                    <Text style={styles.headerDetail}>📋 Statut : {colisInfo.statut}</Text>
                </View>
                {/* Cercle avec l'ID du colis */}
                <View style={styles.circle}>
                    <Text style={styles.circleText}>{colisInfo.id}</Text>
                </View>
            </View>

            {/* Texte signalement */}
            <View style={styles.centerContent}>
                <Text style={styles.infoText}>Signalez une anomalie sur ce colis</Text>

                {/* Boutons signalements */}
                {signalements.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.signalButton,
                            selected === item && styles.signalButtonSelected,
                        ]}
                        onPress={() => setSelected(item)}
                    >
                        <Text
                            style={[
                                styles.signalText,
                                selected === item && styles.signalTextSelected,
                            ]}
                        >
                            {item}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Bouton valider */}
            <TouchableOpacity
                style={styles.validateButton}
                onPress={() => alert(`Signalement choisi: ${selected || 'aucun'}`)}
            >
                <Text style={styles.validateText}>Valider</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    column: { display: 'flex', flexDirection: 'column' },
    container: { flex: 1, backgroundColor: '#f5f5f5', marginTop: 8 },
    header: {
        backgroundColor: 'white',
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
    circleText: { fontSize: 16, fontWeight: 'bold', color: 'black' },

    centerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    infoText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },

    signalButton: {
        width: 200,
        paddingVertical: 12,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#555',
        marginVertical: 8,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    signalButtonSelected: {
        backgroundColor: '#555',
    },
    signalText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#555',
    },
    signalTextSelected: {
        color: 'white',
    },

    validateButton: {
        backgroundColor: '#28a745',
        padding: 14,
        borderRadius: 12,
        alignItems: 'center',
        margin: 16,
    },
    validateText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
