import { Component } from 'react';
import { Button, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPhrase: '',
            image: require('./assets/biscoito.png'),
            time: '00:00:00',
            persons: [
                { id: 1, name: 'João', age: 20 },
                { id: 2, name: 'Maria', age: 30 },
                { id: 3, name: 'José', age: 40 },
                { id: 4, name: 'Joana', age: 50 },
            ],
        };

        this.breakCookie = this.breakCookie.bind(this);
    }

    breakCookie(phrases) {
        clearInterval(this.setInterval);
        this.setState({
            selectedPhrase: phrases[Math.floor(Math.random() * phrases.length)],
            image: require('./assets/biscoitoAberto.png'),
        });

        let time = 1;
        this.setInterval = setInterval(() => {
            time++;
            let miliseconds = time % 60;
            let seconds = Math.floor(time / 60) % 60;
            let minutes = Math.floor(time / 3600);
            this.setState({
                time: `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}:${miliseconds < 10 ? '0' + miliseconds : miliseconds}`,
            });
        });
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
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', height: 150, width: '100%', marginRight: 50 }}>
                    <Image
                        style={{ width: 50, height: 60, marginRight: 10, alignItems: 'center' }}
                        source={require('./assets/cronometro.png')}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>{this.state.time}</Text>
                </View>

                <Image
                    source={this.state.image}
                    style={{ width: 250, height: 250 }}
                />

                <Text style={{ marginVertical: 10 }}>{this.state.selectedPhrase}</Text>

                <TouchableOpacity
                    style={{ backgroundColor: 'lightblue', padding: 10, borderRadius: 5 }}
                    onPress={() => this.breakCookie(phrases)}>
                    <View>
                        <Text>Break cookie</Text>
                    </View>
                </TouchableOpacity>

                <FlatList
                    data={this.state.persons}
                    renderItem={({ item }) => <Person data={item} />}></FlatList>
            </View>
        );
    }
}

class Person extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'lightgray', marginVertical: 10, padding: 10, borderRadius: 5 }}>
                <Text>Name: {this.props.data.name}</Text>
                <Text>Age: {this.props.data.age}</Text>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D8BFD8',
    },
};

export default App;

