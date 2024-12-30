import { Component } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
        };

        this.login = this.login.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
    }

    login(name) {
        this.setState({ name });
    }

    handleChangeText(event) {
        this.setState({ name: event });
    }

    render() {
        const img = 'https://sujeitoprogramador.com/steve.png';

        return (
            <View style={[{ marginTop: 50 }, styles.container]}>
                <TextInput
                    onChangeText={this.handleChangeText}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, margin: 15 }}
                />
                <Button
                    style={{ margin: 15 }}
                    title="Login"
                    onPress={() => this.login('Antonio')}
                />
                <Text style={{ color: '#FF0000', fontSize: 25, margin: 15 }}>{this.state.name}</Text>
            </View>
        );
    }
}

class Jobs extends Component {
    render() {
        const { width, height, name, img } = this.props;

        return (
            <View>
                <Image
                    source={{ uri: img }}
                    style={{ width, height }}
                />
                <Text>{name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;

