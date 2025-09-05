import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ScanLoginScreen() {
    const [permission, requestPermission] = useCameraPermissions();
    const [scanned, setScanned] = useState(false);
    const router = useRouter();

    if (!permission) {
        return (
            <View style={styles.center}>
                <Text>Chargement des permissions...</Text>
            </View>
        );
    }

    if (!permission.granted) {
        return (
            <View style={styles.center}>
                <Text>Accès à la caméra refusé</Text>
                <Button title="Autoriser la caméra" onPress={requestPermission} />
            </View>
        );
    }

    const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
        if (!scanned) {
            setScanned(true);

            // 👉 Redirection vers la page de création livreur
            console.log('Code détecté :', type, data);
            router.push('/creationLivreur');
        }
    };

    return (
        <View style={styles.container}>
            {/* Bouton retour */}
            <TouchableOpacity style={styles.backButton} onPress={() => router.push('/login')}>
                <Ionicons name="arrow-back" size={28} color="black" />
            </TouchableOpacity>

            <Text style={styles.title}>Scanner le QR code pour les utilisateurs</Text>
            <View style={styles.cameraWrapper}>
                <CameraView
                    style={styles.camera}
                    facing="back"
                    barcodeScannerSettings={{
                        barcodeTypes: ['qr', 'ean13', 'code128'],
                    }}
                    onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
                />
            </View>

            {scanned && (
                <View style={styles.buttonContainer}>
                    <Button title="Scanner à nouveau" onPress={() => setScanned(false)} />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 90,
        marginTop: 30,
    },
    backButton: {
        position: 'absolute',
        top: 10,
        left: 20,
        backgroundColor: '#f0f0f0',
        padding: 8,
        borderRadius: 30,
        zIndex: 10,
    },
    title: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        marginTop: 10,
    },
    cameraWrapper: {
        width: '80%',
        height: 300,
        overflow: 'hidden',
        borderRadius: 12,
    },
    camera: {
        flex: 1,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 20,
    },
});
