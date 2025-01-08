import { StyleSheet, Text, View } from 'react-native';
import { db } from './src/firebaseConnection';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const App = () => {
    const [nome, setNome] = useState('');

    useEffect(() => {
        async function load() {
            // const docRef = doc(db, 'users', '1');
            // const docSnap = await getDoc(docRef);

            // if (docSnap.exists()) {
            //     setNome(docSnap.data().nome);
            // } else {
            //     console.log('Documento não encontrado');
            // }

            onSnapshot(doc(db, 'users', '1'), (doc) => {
                if (doc.exists()) {
                    setNome(doc.data().nome);
                } else {
                    console.log('Documento não encontrado');
                }
            });
        }

        load();
    }, []);

    return (
        <View style={styles.container}>
            <Text>Nome: {nome}</Text>
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

