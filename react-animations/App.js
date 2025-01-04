import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

const App = () => {
    const animatedWidth = useRef(new Animated.Value(30)).current;
    const animatedHeight = useRef(new Animated.Value(50)).current;

    const animatedInterpolation = animatedWidth.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%'],
    });

    const animatedInterpolationHeight = animatedHeight.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%'],
    });

    useEffect(() => {
        const widthAnimation = Animated.timing(animatedWidth, {
            toValue: 150,
            duration: 2000,
            useNativeDriver: false,
        });
        const heightAnimation = Animated.timing(animatedHeight, {
            toValue: 100,
            duration: 2000,
            useNativeDriver: false,
        });
        const widthAnimationToZero = Animated.timing(animatedWidth, {
            toValue: 30,
            duration: 2000,
            useNativeDriver: false,
        });
        const heightAnimationToZero = Animated.timing(animatedHeight, {
            toValue: 10,
            duration: 2000,
            useNativeDriver: false,
        });
        const sequenceAnimation = Animated.sequence([widthAnimation, heightAnimation, widthAnimationToZero, heightAnimationToZero]);

        Animated.loop(sequenceAnimation).start();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.animatedView, { width: animatedInterpolation, height: animatedInterpolationHeight }]}>
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

