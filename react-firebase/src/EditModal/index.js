import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const EditModal = ({ value, saveEdit }) => {
    const [data, setData] = useState(value);

    return (
        <View style={{ flex: 1, backgroundColor: '#000', marginTop: 150, marginHorizontal: 10, alignItems: 'center', borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
            <Text style={{ fontSize: 20, marginBottom: 20 }}>Edit Modal</Text>
            <View style={{ padding: 20, width: '100%' }}>
                <Text style={{ color: '#fff' }}>Nome</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: '#fff', color: '#fff' }}
                    placeholder="Nome"
                    value={data.nome}
                    onChangeText={(text) => setData({ ...data, nome: text })}
                />
            </View>
            <View style={{ padding: 20, width: '100%' }}>
                <Text style={{ color: '#fff' }}>Idade</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: '#fff', color: '#fff' }}
                    placeholder="Idade"
                    value={data.idade}
                    onChangeText={(text) => setData({ ...data, idade: text })}
                />
            </View>
            <View style={{ padding: 20, width: '100%' }}>
                <Text style={{ color: '#fff' }}>Cargo</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: '#fff', color: '#fff' }}
                    placeholder="Cargo"
                    value={data.cargo}
                    onChangeText={(text) => setData({ ...data, cargo: text })}
                />
            </View>
            <TouchableOpacity
                style={{ backgroundColor: '#fff', paddingVertical: 10, margin: 20, width: '91%', alignItems: 'center' }}
                onPress={() => saveEdit(data)}>
                <Text style={{ color: '#000' }}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EditModal;
