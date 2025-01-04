import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Modal, StyleSheet, Text, View } from 'react-native';
import Filmes from './src/Filmes';
import api from './services/api';

const App = () => {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadFilmes = async () => {
            const response = await api.get('/r-api/?api=filmes');
            setFilmes(response.data);
            setLoading(false);
        };

        loadFilmes();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    size="large"
                    color="#000"
                />
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <FlatList
                    data={filmes}
                    renderItem={({ item }) => <Filmes data={item} />}></FlatList>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
});

export default App;

