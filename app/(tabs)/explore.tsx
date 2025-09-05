import { View, Text, StyleSheet } from 'react-native';

export default function TabTwoScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Page appel</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f8f8',
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
    },
});
