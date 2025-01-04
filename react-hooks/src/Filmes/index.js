import { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Filmes = ({ data }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{data.nome}</Text>

                <Image
                    source={{ uri: data.foto }}
                    style={{ width: 350, height: 350 }}
                />

                <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity
                        onPress={() => setIsModalVisible(true)}
                        style={styles.readMoreButton}>
                        <Text style={styles.readMoreText}>Leia Mais</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal
                transparent={true}
                visible={isModalVisible}
                animationType="slide">
                <View style={styles.modalContainer}>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => setIsModalVisible(false)}>
                        <Text style={styles.closeText}>Fechar</Text>
                    </TouchableOpacity>
                    <Text style={styles.modalTitle}>{data.nome}</Text>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionText}>Sinopse:</Text>
                        <Text style={styles.descriptionText}>{data.sinopse}</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        alignItems: 'start',
        borderColor: '#000',
        borderWidth: 0.5,
        borderRadius: 5,
        borderBottomWidth: 0,
        marginBottom: 10,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 10,
    },
    readMoreButton: {
        backgroundColor: '#0044FF',
        padding: 10,
        alignItems: 'center',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        marginTop: -55,
        width: 150,
    },
    readMoreText: {
        color: '#fff',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#000',
        marginTop: 200,
        marginHorizontal: 20,
        alignItems: 'center',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    modalTitle: {
        color: '#fff',
        fontSize: 25,
        marginTop: 10,
    },
    descriptionContainer: {
        alignItems: 'flex-start',
    },
    descriptionText: {
        color: '#fff',
        fontSize: 20,
        marginTop: 15,
        marginLeft: 15,
    },
    closeButton: {
        backgroundColor: 'red',
        padding: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    closeText: {
        color: '#fff',
    },
});

export default Filmes;
