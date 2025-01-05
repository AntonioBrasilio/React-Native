import { StyleSheet, Text, View } from 'react-native';
import FontAwesmome from 'react-native-vector-icons/FontAwesome';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <FontAwesmome
                name="home"
                size={35}
                color="#000"
            />
            <FontAwesmome
                name="search"
                size={35}
                color="#000"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

