import { Component } from 'react';
import { Text, View } from 'react-native';

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

export default Person;
