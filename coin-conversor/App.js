import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import api from './services/api';

const App = () => {
    const [moedas, setMoedas] = useState([]);
    const [moedaSelecionada, setMoedaSelecionada] = useState('USD');
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState(0);
    const [result, setResult] = useState(0);

    useEffect(() => {
        api.get('all').then((res) => {
            setMoedas(Object.keys(res.data));
            setLoading(false);
        });
    });

    const convert = () => {
        api.get(`all/${moedaSelecionada}-BRL`).then((res) => {
            const price = res.data[moedaSelecionada].high;
            setResult((parseFloat(value) * parseFloat(price)).toFixed(2));
            Keyboard.dismiss();
        });
    };

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    size="large"
                    color="#fff"
                />
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.conversorCard}>
                    <Text style={styles.pickerTitle}>Selecione sua moeda</Text>
                    <Picker
                        selectedValue={moedaSelecionada}
                        onValueChange={(itemValue) => setMoedaSelecionada(itemValue)}
                        value={moedaSelecionada}
                        data={moedas}
                        style={styles.pickerContent}>
                        {moedas.map((moeda) => (
                            <Picker.Item
                                key={moeda}
                                label={moeda}
                                value={moeda}
                            />
                        ))}
                    </Picker>
                    <View style={styles.buttonArea}>
                        <Text style={styles.conversorTitle}>Digite um valor para converter em (R$)</Text>
                        <TextInput
                            style={styles.textInput}
                            value={value}
                            keyboardType="numeric"
                            placeholder="Ex: 100"
                            onChangeText={(val) => setValue(val)}
                        />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => convert()}>
                            <Text>Converter</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {result > 0 && (
                    <View style={styles.resultCard}>
                        <Text style={styles.resultText}>
                            {value} {moedaSelecionada}
                        </Text>
                        <Text>Corresponde a</Text>
                        <Text style={styles.resultText}>R$ {result}</Text>
                    </View>
                )}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        paddingTop: 70,
    },
    conversorCard: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    pickerTitle: {
        textAlign: 'start',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        marginLeft: 20,
    },
    pickerContent: {
        width: '90%',
        marginLeft: 20,
    },
    buttonArea: {
        width: '100%',
        borderTopColor: '#121212',
        borderTopWidth: 1,
    },
    textInput: {
        width: '90%',
        fontSize: 20,
        marginLeft: 20,
    },
    conversorTitle: {
        textAlign: 'start',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        marginLeft: 20,
    },
    button: {
        width: '100%',
        backgroundColor: '#ff0000',
        padding: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    resultCard: {
        width: '90%',
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    resultText: {
        fontSize: 25,
        fontWeight: 'bold',
    },
});

export default App;

