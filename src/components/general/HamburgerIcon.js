import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';
import { COLOR_BLACK_MAIN } from '../../constants/style';

const HamburgerIcon = () => {
    const [isPressed, setisPressed] = useState(false);
    const opacity = useRef(new Animated.Value(0)).current;
    const rotate = useRef(new Animated.Value(0)).current;
    const rotateX = rotate.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '45deg']
    })
    const rotate2 = useRef(new Animated.Value(0)).current;
    const rotateX2 = rotate2.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '-45deg']
    })

    const translateY = useRef(new Animated.Value(0)).current;
    const translateY_ = translateY.interpolate({
        inputRange: [0, 1],
        outputRange: [0,13]
    });
    const translateY2 = useRef(new Animated.Value(0)).current;
    const translateY2_ = translateY.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -13]
    });

    useEffect(() => {
        Animated.parallel([
            Animated.timing(opacity, {
                toValue: isPressed ? 0 : 1,
                duration: 400,
                useNativeDriver: true
            }),
            Animated.timing(rotate, {
                toValue: isPressed ? 1 : 0,
                duration: 400,
                useNativeDriver: true
            }),
            Animated.timing(rotate2, {
                toValue: isPressed ? 1 : 0,
                duration: 400,
                useNativeDriver: true
            }),
            Animated.timing(translateY, {
                toValue: isPressed ? 1 : 0,
                duration: 400,
                useNativeDriver: true
            }),
            Animated.timing(translateY2, {
                toValue: isPressed ? 1 : 0,
                duration: 400,
                useNativeDriver: true
            })
          ]).start();
        
    }, [isPressed]);

    return (
        <TouchableWithoutFeedback onPress={() => setisPressed(!isPressed)}>
            <View style={{ flexDirection: 'column' }}>
                <Animated.View style={[styles.containerChild, { transform: [{ rotateZ: rotateX}, {translateY:translateY_}] }]} />
                <Animated.View style={[styles.containerChild, { opacity: opacity }, {width:35}]} />
                <Animated.View style={[styles.containerChild, { transform: [{ rotateZ: rotateX2}, {translateY:translateY2_}] }]} />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    containerChild: {
        marginVertical: 4,
        width: 25,
        height: 1,
        backgroundColor: COLOR_BLACK_MAIN
    },
});

export default React.memo(HamburgerIcon);
