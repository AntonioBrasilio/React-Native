import { Component } from 'react';
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, Modal } from 'react-native';
import ModalCalc from './src/ModalCalc';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alcohol: 0,
            gasoline: 0,
            bestOption: '',
            isModalVisible: false,
        };

        this.calculate = this.calculate.bind(this);
    }

    calculate() {
        const { alcohol, gasoline } = this.state;

        const result = alcohol / gasoline;

        if (result < 0.7) {
            this.setState({ bestOption: 'Álcool' });
        } else {
            this.setState({ bestOption: 'Gasolina' });
        }

        this.setState({ isModalVisible: true });
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./assets/logo.png')} />
                <Text style={{ color: '#ffa500', fontSize: 20, marginTop: 20 }}>Qual a melhor opção?</Text>

                <View style={styles.inputContainer}>
                    <Text style={{ color: '#ffa500', fontSize: 18 }}>Álcool (preço por litro)</Text>
                    <TextInput
                        onChangeText={(text) => this.setState({ alcohol: text })}
                        keyboardType="numeric"
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={{ color: '#ffa500', fontSize: 18 }}>Gasolina (preço por litro)</Text>
                    <TextInput
                        onChangeText={(text) => this.setState({ gasoline: text })}
                        keyboardType="numeric"
                        style={styles.input}
                    />
                </View>

                <TouchableOpacity
                    onPress={() => this.calculate()}
                    style={styles.button}>
                    <Text style={{ color: '#fff', fontSize: 18, backgroundColor: '#ffa500', padding: 10, borderRadius: 5, textAlign: 'center' }}>Calcular</Text>
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    visible={this.state.isModalVisible}>
                    <ModalCalc
                        closeModal={() => this.setState({ isModalVisible: false })}
                        data={this.state}
                    />
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 10,
    },
    input: {
        color: '#fff',
        fontSize: 18,
        backgroundColor: '#333',
        padding: 10,
        borderRadius: 5,
        width: '100%',
    },
    button: {
        width: '100%',
    },
});

export default App;

