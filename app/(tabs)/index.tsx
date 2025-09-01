import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* En-tête : Titre et Description */}
      <View style={styles.header}>
        <Text style={styles.title}>Que voulez-vous faire?</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.newSong]}
          onPress={() => router.push("/scan-bordereau")}
        >
          <Text style={styles.buttonDescription}>
            scan bordereau de livraison
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.playlist]}>
          <Text style={styles.buttonDescription}>scan colis chargement</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.favorite]}
        onPress={() => router.push("/trajet")}
        >
          <Text style={styles.buttonDescription}>Trajet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.pop]}>
          <Text style={styles.buttonDescription}>Scan colis dechargement</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.pop]}>
          <Text style={styles.buttonDescription}>PODw</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#b3b3b3',
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 20,
    },
    header: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 50,
    },
    title: {
        fontSize: 28,
        color: 'white',
    },
    description: {
        fontSize: 16,
        color: 'white',
        marginTop: 5,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    searchInput: {
        width: '85%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingLeft: 20,
        fontSize: 16,
        color: '#000',
        marginBottom: 30,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginHorizontal: 10,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    buttonDescription: {
        fontSize: 12,
        color: 'white',
        marginTop: 5,
        textAlign: 'center',
    },
    newSong: {
        backgroundColor: '#006effff',
    },
    playlist: {
        backgroundColor: '#006effff',
    },
    favorite: {
        backgroundColor: '#006effff',
    },
    pop: {
        backgroundColor: '#006effff',
    },
    pagination: {
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    paginationDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: '#FFD700',
        width: 14,
        height: 14,
    },
    inactiveDot: {
        backgroundColor: '#fff',
    },
});
