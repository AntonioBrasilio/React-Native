import { StackActions, useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const ContactScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.dispatch(StackActions.popToTop())}>
                <Text>Voltar ao início</Text>
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

export default ContactScreen;
