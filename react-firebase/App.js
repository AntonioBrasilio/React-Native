import { FlatList, Modal, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { db } from './src/firebaseConnection';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import EditModal from './src/EditModal';

const App = () => {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [cargo, setCargo] = useState('');
    const [users, setUsers] = useState([]);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editData, setEditData] = useState({});

    useEffect(() => {
        const load = async () => {
            onSnapshot(collection(db, 'users'), (snapshot) => {
                const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setUsers(data);
            });
        };

        load();
    }, []);

    const createData = async () => {
        await addDoc(collection(db, 'users'), {
            nome,
            idade,
            cargo,
        });
    };

    const deleteData = async (id) => {
        await deleteDoc(doc(db, 'users', id));
    };

    const showEditModal = (data) => {
        setEditData({ ...data });
        setIsModalVisible(true);
    };

    const saveEdit = async (value) => {
        await updateDoc(doc(db, 'users', editData.id), value);

        setIsModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={{ padding: 20, width: '100%' }}>
                <Text>Nome:</Text>
                <TextInput
                    onChangeText={(text) => setNome(text)}
                    style={{ borderWidth: 1, borderColor: '#000' }}
                />
            </View>
            <View style={{ padding: 20, width: '100%' }}>
                <Text>Idade:</Text>
                <TextInput
                    onChangeText={(text) => setIdade(text)}
                    style={{ borderWidth: 1, borderColor: '#000' }}
                />
            </View>
            <View style={{ padding: 20, width: '100%' }}>
                <Text>Cargo:</Text>
                <TextInput
                    onChangeText={(text) => setCargo(text)}
                    style={{ borderWidth: 1, borderColor: '#000' }}
                />
            </View>
            <TouchableOpacity
                style={{ backgroundColor: '#000', paddingVertical: 10, margin: 20, width: '91%', alignItems: 'center' }}
                onPress={() => createData()}>
                <Text style={{ color: '#fff' }}>Criar</Text>
            </TouchableOpacity>

            <FlatList
                style={{ width: '100%', padding: 20 }}
                data={users}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#000' }}>
                        <Text>Nome: {item.nome}</Text>
                        <Text>Idade: {item.idade}</Text>
                        <Text>Cargo: {item.cargo}</Text>
                        <TouchableOpacity
                            onPress={() => deleteData(item.id)}
                            style={{ backgroundColor: '#AA0000', padding: 10, alignItems: 'center', marginTop: 10 }}>
                            <Text style={{ color: '#fff' }}>Deletar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => showEditModal(item)}
                            style={{ backgroundColor: '#0000AA', padding: 10, alignItems: 'center', marginTop: 10 }}>
                            <Text style={{ color: '#fff' }}>Editar</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />

            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="slide">
                <EditModal
                    value={editData}
                    saveEdit={(value) => saveEdit(value)}
                />
            </Modal>
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

