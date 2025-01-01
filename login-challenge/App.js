import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Switch, Text } from 'react-native';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            sex: 'F',
            sexs: [
                { id: 1, value: 'F', label: 'Female' },
                { id: 2, value: 'M', label: 'Male' },
                { id: 3, value: 'O', label: 'Other' },
            ],
            limit: 500,
            isStudent: false,
        };

        this.submit = this.submit.bind(this);
    }

    submit() {
        const data = this.state;

        if (data.name === '') {
            alert('Fill all fields');
            return;
        } else {
            alert(`Name: ${data.name}\nSex: ${data.sex}\nLimit: ${data.limit}\nStudent: ${data.isStudent ? 'Yes' : 'No'}`);
        }
    }

    render() {
        const sexs = this.state.sexs.map((item) => {
            return (
                <Picker.Item
                    key={item.id}
                    value={item.value}
                    label={item.label}
                />
            );
        });

        return (
            <View style={styles.container}>
                <View style={styles.viewContainer}>
                    <Text>Type your name</Text>
                    <TextInput
                        value={this.state.name}
                        onChangeText={(value) => this.setState({ name: value })}
                        style={{ borderColor: 'black', borderWidth: 1, width: '100%' }}
                        title="Name"
                    />
                </View>
                <View style={styles.viewContainer}>
                    <Text>Select your sex</Text>
                    <Picker
                        value={this.state.sex}
                        onValueChange={(value) => this.setState({ sex: value })}
                        style={{ alignSelf: 'flex-start', width: '100%' }}>
                        {sexs}
                    </Picker>
                </View>
                <View stlye={styles.viewContainer}>
                    <Text>Your bank limit</Text>
                    <View style={styles.inputContainer}>
                        <Slider
                            style={{ width: '100%', height: 40 }}
                            minimumValue={500}
                            maximumValue={5000}
                            onValueChange={(value) => this.setState({ limit: value })}
                            value={this.state.limit}
                        />
                        <Text>Limit: {this.state.limit.toFixed(0)}</Text>
                    </View>
                </View>
                <View style={styles.viewContainer}>
                    <Text>Are you a student?</Text>
                    <Switch
                        style={{ alignSelf: 'flex-start' }}
                        value={this.state.isStudent}
                        onValueChange={(value) => this.setState({ isStudent: value })}
                    />
                </View>
                <Button
                    onPress={() => this.submit()}
                    title="Submit"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E6FA',
        alignItems: 'start',
        justifyContent: 'center',
        padding: 50,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '60%',
    },
    viewContainer: {
        flexDirection: 'column',
        alignItems: 'start',
        marginBottom: 20,
    },
});

export default App;

