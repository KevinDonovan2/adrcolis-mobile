import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function ScanColisDechargementScreen() {
    const [permission, requestPermission] = useCameraPermissions();
    const [scanned, setScanned] = useState(false);

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
            Alert.alert('Code détecté', `Type: ${type}\nData: ${data}`);
            console.log('Code détecté :', type, data);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Scanner le code-barres de colis de déchargement</Text>
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
        paddingTop: 50,
    },
    title: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
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
    topOverlay: {
        top: 0,
        left: 0,
        right: 0,
        height: 40,
    },
    bottomOverlay: {
        bottom: 0,
        left: 0,
        right: 0,
        height: 40,
    },
    leftOverlay: {
        top: 40,
        bottom: 40,
        left: 0,
        width: 40,
    },
    rightOverlay: {
        top: 40,
        bottom: 40,
        right: 0,
        width: 40,
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
