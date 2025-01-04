import { useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const App = () => {
    const [name, setName] = useState('Antonio');

    const textInputRef = useRef(null);

    const handleClick = () => {
        setName('Antonio Brasílio');
        textInputRef.current.focus();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handleClick()}>
                <Text>Change name</Text>
            </TouchableOpacity>
            <Text>{name}</Text>

            <TextInput ref={textInputRef} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;

