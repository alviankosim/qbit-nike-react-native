import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLOR_BLACK_MAIN } from '../../constants/style';

const CartIcon = (prop) => {
    const [cartQty, setCartQty] = useState('0');

    useEffect(() => {
        //Handling item more than 100
        if (prop.qty < 100) {
            setCartQty(prop.qty.toString());
        } else {
            setCartQty('99+');
        }
    },[prop.qty]);

    return (
        <TouchableWithoutFeedback>
            <View>
                <View style={styles.badgeIcon}>
                    <Text style={{fontSize:8, color:'white'}}>{cartQty}</Text>
                </View>
                <MaterialCommunityIcon name="cart" size={30} color={COLOR_BLACK_MAIN} />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    badgeIcon: {
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor:'#ff6961', 
        width:15, 
        height:15, 
        borderRadius:15, 
        position:'absolute', 
        zIndex:1, 
        right:0, 
        top:-5
    }
});

export default React.memo(CartIcon);
