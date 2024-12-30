import { Component } from 'react';
import { Button, Image, Text, View } from 'react-native';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
        };

        this.login = this.login.bind(this);
    }

    login(name) {
        this.setState({ name });
    }

    render() {
        const img = 'https://sujeitoprogramador.com/steve.png';

        return (
            <View style={{ marginTop: 50 }}>
                <Button
                    style={{ margin: 15 }}
                    title="Login"
                    onPress={() => this.login('Antonio')}
                />
                <Text style={{ color: '#FF0000', fontSize: 25, margin: 15 }}>{this.state.name}</Text>

                <Jobs
                    width={100}
                    height={100}
                    name="Steve Jobs"
                    img={img}
                />
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

export default App;

