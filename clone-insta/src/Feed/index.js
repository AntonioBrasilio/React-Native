import { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: this.props.data,
        };

        this.handleLike = this.handleLike.bind(this);
    }

    handleLike() {
        let likeada = this.state.feed.likeada;
        this.setState({
            feed: {
                ...this.state.feed,
                likeada: !likeada,
            },
        });
    }

    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Image
                        style={styles.image}
                        source={{ uri: this.state.feed.imgperfil }}
                    />
                    <Text style={styles.name}>{this.state.feed.nome}</Text>
                </View>
                <Image
                    style={styles.post}
                    source={{ uri: this.state.feed.imgPublicacao }}
                />
                <View style={styles.likeArea}>
                    <TouchableOpacity onPress={() => this.handleLike()}>
                        <Image
                            style={styles.icon}
                            source={this.state.feed.likeada ? require('../img/likeada.png') : require('../img/like.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={styles.icon}
                            source={require('../img/send.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.description}>
                    <Text style={styles.descriptionName}>{this.state.feed.nome}</Text>
                    <Text>{this.state.feed.descricao}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    name: {
        fontSize: 22,
        textAlign: 'left',
        color: '#000',
    },
    post: {
        width: '100%',
        height: 400,
    },
    likeArea: {
        flexDirection: 'row',
        padding: 5,
    },
    description: {
        flexDirection: 'row',
        alignItens: 'center',
        padding: 5,
    },
    descriptionName: {
        fontWeight: 'bold',
        marginRight: 5,
    },
    icon: {
        width: 25,
        height: 25,
    },
});

export default Feed;
