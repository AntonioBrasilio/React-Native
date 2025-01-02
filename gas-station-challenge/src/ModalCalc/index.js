import { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class ModalCalc extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.data,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/gas.png')} />

                <Text style={{ color: 'lightgreen', fontSize: 20, marginTop: 20 }}>Melhor opção: {this.state.data.bestOption}</Text>

                <Text style={{ color: '#fff', fontSize: 18, marginTop: 20 }}>Com os preços:</Text>
                <Text style={{ color: '#fff', fontSize: 18, marginTop: 20 }}>Álcool: R$ {this.state.data.alcohol}</Text>
                <Text style={{ color: '#fff', fontSize: 18 }}>Gasolina: R$ {this.state.data.gasoline}</Text>

                <TouchableOpacity
                    onPress={() => this.props.closeModal()}
                    style={{ marginTop: 20 }}>
                    <Text
                        style={{
                            color: '#ffa500',
                            borderColor: '#ffa500',
                            borderWidth: 2,
                            fontSize: 18,
                            backgroundColor: '#000',
                            padding: 10,
                            borderRadius: 5,
                            textAlign: 'center',
                        }}>
                        Calcular novamente
                    </Text>
                </TouchableOpacity>
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
});

export default ModalCalc;
