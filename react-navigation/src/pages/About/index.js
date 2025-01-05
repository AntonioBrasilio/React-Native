import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesmome from 'react-native-vector-icons/FontAwesome';

const AboutScreen = ({ route }) => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.title || 'About Page',
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
                <FontAwesmome
                    name="phone"
                    size={35}
                    color="#000"
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>Voltar</Text>
            </TouchableOpacity>
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

export default AboutScreen;
