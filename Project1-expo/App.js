import { Component } from 'react';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPhrase: '',
            image: require('./assets/biscoito.png'),
        };
    }

    render() {
        const phrases = [
            'Siga os bons e aprenda com eles.',
            'O bom-senso vale mais do que muito conhecimento.',
            'O riso é a menor distância entre duas pessoas.',
            'Deixe de lado as preocupações e seja feliz.',
            'Realize o óbvio, pense no improvável e conquiste o impossível.',
            'Acredite em milagres, mas não dependa deles.',
            'A maior barreira para o sucesso é o medo do fracasso.',
        ];

        return (
            <View style={styles.container}>
                <Image
                    source={this.state.image}
                    style={{ width: 250, height: 250 }}
                />

                <Text style={{ marginVertical: 10 }}>{this.state.selectedPhrase}</Text>

                <TouchableOpacity
                    style={{ backgroundColor: 'lightblue', padding: 10, borderRadius: 5 }}
                    onPress={() => {
                        this.setState({
                            selectedPhrase: phrases[Math.floor(Math.random() * phrases.length)],
                            image: require('./assets/biscoitoAberto.png'),
                        });
                    }}>
                    <View>
                        <Text>Quebrar biscoito</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export default App;

