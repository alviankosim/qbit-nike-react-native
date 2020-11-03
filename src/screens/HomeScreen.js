import React, {useState} from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

//custom component
import Header from '../components/layout/Header';
import Carousel from '../components/general/Carousel';
import ProductSlider from '../components/shopping/ProductSlider';

import Toast from '../helpers/Toast';
import { COLOR_BLACK_MAIN, PADDING_HORIZONTAL_HOME } from "../constants/style";

const HomeScreen = () => {
    const [cartQty, setCartQty] = useState(0);
    const carouselItems = [
        { id: 1, image: require('../../assets/images/hero/hero-1.png') },
        { id: 2, image: require('../../assets/images/hero/hero-1.png') },
        { id: 3, image: require('../../assets/images/hero/hero-1.png') }
    ];
    const productItems = [
        { id: 1, name: 'Air Force', image: require('../../assets/images/items/air-force-1-07-shoe-qvvx9f.jpg') },
        { id: 2, name: 'Air Zoom', image: require('../../assets/images/items/air-zoom-tempo-next-running-shoe-chNfdw.jpg') },
        { id: 3, name: 'Blazer Mid', image: require('../../assets/images/items/blazer-mid-77-vintage-shoe-dNWPTj.jpg') },
        { id: 4, name: 'Lebron 18', image: require('../../assets/images/items/lebron-18-basketball-shoe-JNqV61.jpg') },
        { id: 5, name: 'Metcon 6', image: require('../../assets/images/items/metcon-6-training-shoe-mW5Pwg.jpg') },
        { id: 6, name: 'Overbreak', image: require('../../assets/images/items/overbreak-sp-shoe-08sGT8.jpg') }
    ];

    const handleAddQty = (itemName) => {
        setCartQty(cartQty + 1);
        Toast.show(`${itemName} added`, Toast.SHORT);
    }

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imageBackground} resizeMode="stretch" source={require('../../assets/images/bg-qbit.png')}>
                <Header cartQty={cartQty} />
                <Text style={styles.menuTitle}>Nike App Store</Text>
                <Carousel items={carouselItems} />
                <ProductSlider addToCart={handleAddQty} items={productItems} />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    imageBackground: { 
        width: '100%', 
        height: '100%', 
        flex: 1 
    },
    menuTitle: { 
        paddingHorizontal: PADDING_HORIZONTAL_HOME, 
        fontWeight: 'bold', 
        fontSize: 20, 
        color: COLOR_BLACK_MAIN, 
        marginVertical: 30 
    }
});

export default React.memo(HomeScreen);