import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { PADDING_HORIZONTAL_HOME } from '../../constants/style';

const ProductSlider = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (props.items) {
            setItems(props.items);
        }
    });

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                overScrollMode="never"
                scrollEventThrottle={16}
                contentContainerStyle={{
                    paddingHorizontal: PADDING_HORIZONTAL_HOME - 5
                }}
            >
                {
                    items.map(item => {
                        return <View key={item.id} style={styles.singleItem}>
                            <Image source={item.image} resizeMode="center" style={styles.image} />
                            <View style={styles.nameTagContainer}>
                                <TouchableOpacity onPress={() => props.addToCart(item.name)}>
                                    <MaterialCommunityIcon name="plus-box" color="white" size={20} />
                                </TouchableOpacity>
                                <Text style={styles.nameTag}>{item.name}</Text>
                            </View>
                        </View>
                    })
                }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 60
    },
    singleItem: {
        backgroundColor: '#f6f6f6',
        margin: 10,
        width: 140,
        height: 235,
        borderRadius: 10,
        elevation: 4
    },
    image: {
        width: 140,
        height: 200
    },
    nameTagContainer: {
        height: 35,
        backgroundColor: '#707892',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    nameTag: {
        color: 'white',
        fontSize: 12,
        marginLeft: 5
    }
});

export default React.memo(ProductSlider);
