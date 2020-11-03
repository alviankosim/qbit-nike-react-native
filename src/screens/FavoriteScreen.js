import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavoriteScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Hello, this is Favorite Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    }
});

export default React.memo(FavoriteScreen);