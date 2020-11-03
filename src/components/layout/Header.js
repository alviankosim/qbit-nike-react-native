import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PADDING_HORIZONTAL_HOME } from '../../constants/style';
import HamburgerIcon from '../general/HamburgerIcon';
import CartIcon from '../shopping/CartIcon';

const Header = (props) => {

    return (
        <View style={styles.container}>
            <HamburgerIcon />
            <CartIcon qty={props.cartQty} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:PADDING_HORIZONTAL_HOME,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        height: 60
    },
});

export default React.memo(Header);
