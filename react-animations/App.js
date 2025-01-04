import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

const App = () => {
    const animatedWidth = useRef(new Animated.Value(150)).current;
    const animatedHeight = useRef(new Animated.Value(50)).current;

    useEffect(() => {
        const widthAnimation = Animated.timing(animatedWidth, {
            toValue: 300,
            duration: 2000,
            useNativeDriver: false,
        });
        const heightAnimation = Animated.timing(animatedHeight, {
            toValue: 300,
            duration: 2000,
            useNativeDriver: false,
        });
        Animated.sequence([widthAnimation, heightAnimation]).start(); // Can be parallel too
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.animatedView, { width: animatedWidth, height: animatedHeight }]}>
                <Text style={styles.text}>Loading...</Text>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animatedView: {
        backgroundColor: 'steelblue',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
    },
});

export default App;

