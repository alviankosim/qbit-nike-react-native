import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import { COLOR_BLACK_MAIN } from '../../constants/style';

const CARD_WIDTH = Dimensions.get('window').width * 0.8
const CARD_HEIGHT = Dimensions.get('window').height * 0.15
const SPACING_FOR_CARD = Dimensions.get('window').width * 0.1 - 10

const Carousel = (props) => {
    const [items, setItems] = useState([]);
    const [curIndex, setCurIndex] = useState(0);

    const handleScroll = (event) => {
        //Calculating the index using offset/card width and the margin
        setCurIndex(Math.ceil(event.nativeEvent.contentOffset.x / (CARD_WIDTH + 10)));
    }

    useEffect(() => {
        if (props.items) {
            setItems(props.items);
        }
    }, []);

    return (
        <View>
            <View style={{ height: CARD_HEIGHT + 8, }}>
                <ScrollView
                    overScrollMode="never"
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    pagingEnabled
                    decelerationRate={0}
                    snapToInterval={CARD_WIDTH + 10}
                    snapToAlignment='center'
                    contentContainerStyle={{
                        paddingHorizontal: SPACING_FOR_CARD
                    }}
                    onMomentumScrollEnd={handleScroll}
                >
                    {
                        items.map(item => {
                            return <View
                                key={item.id}
                                style={styles.singleCarouselContainer}>
                                <Image style={styles.image} source={item.image} />
                            </View>
                        })
                    }
                </ScrollView>
            </View>
            <View style={styles.dotContainer}>
                {
                    items.map((item, index) => <View key={item.id} style={
                        [
                            styles.singleDot,
                            { backgroundColor: curIndex == index ? COLOR_BLACK_MAIN : 'transparent' }
                        ]
                    } />)
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dotContainer: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    singleDot: {
        width: 8,
        height: 8,
        borderRadius: 10,
        margin: 5,
        borderWidth: 1
    },
    singleCarouselContainer: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    image: {
        width: '100%',
        height: CARD_HEIGHT,
        borderRadius: 10
    }
});

export default React.memo(Carousel);