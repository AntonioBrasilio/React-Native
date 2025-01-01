import { Component } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import Person from './src/Person';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

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
            language: 1,
            languages: [
                { key: 1, value: 1, label: 'JavaScript' },
                { key: 2, value: 2, label: 'Java' },
                { key: 3, value: 3, label: 'Python' },
                { key: 4, value: 4, label: 'PHP' },
                { key: 5, value: 5, label: 'C#' },
            ],
            sliderValue: 0,
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

        let languages = this.state.languages.map((item, index) => {
            return (
                <Picker.Item
                    key={index}
                    value={item.value}
                    label={item.label}
                />
            );
        });

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

                <Picker
                    style={{ width: '50%' }}
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                    {languages}
                </Picker>
                <Text>The value from Picker is {this.state.language}</Text>

                <Slider
                    minimumValue={0}
                    maximumValue={100}
                    onValueChange={(value) => this.setState({ sliderValue: value })}
                    minimumTrackTintColor="red"
                    maximumTrackTintColor="blue"
                    style={{ width: '100%' }}
                />
                <Text>The value from Slider is {this.state.sliderValue}</Text>

                <FlatList
                    data={this.state.persons}
                    renderItem={({ item }) => <Person data={item} />}></FlatList>
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
