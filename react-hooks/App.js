import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Filmes from './src/Filmes';
import api from './services/api';

const App = () => {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const loadFilmes = async () => {
            const response = await api.get('/r-api/?api=filmes');
            setFilmes(response.data);
        };

        loadFilmes();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={filmes}
                renderItem={({ item }) => <Filmes data={item} />}></FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;

