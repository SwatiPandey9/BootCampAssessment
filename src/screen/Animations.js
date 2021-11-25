import React, {useRef, useState} from 'react'
import { View, Text , SafeAreaView, StyleSheet, Animated, Dimensions} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const {height,width} = Dimensions.get('window')

const Animations = () => {
    // const [value, setvalue] = useState(0)
    const globalAnimatedValue = useRef(new Animated.Value(0)).current;
    const animatedValue = useRef(new Animated.ValueXY({x:0, y:0})).current;
    const scaleValue = useRef(new Animated.Value(1)).current;
    const rotateValue = useRef(new Animated.Value(0)).current;


    const moveHorizontal = () => {
       const horizontalAnimation =  Animated.timing(animatedValue, {
            toValue: {x: width-100, y:height-200},
            duration:2000,
            useNativeDriver: true,
        });
        horizontalAnimation.start();
    }

    // const translateHorizontal = () => {
    //     const scaleAnimation = Animated.timing(scaleValue, {
    //         toValue: 2,
    //         duration: 2000,
    //         useNativeDriver: true,
    //     });
    //     scaleAnimation.start();
    // }

    const scaleBox = () => {
        const scaleAnimation = Animated.timing(scaleValue, {
            toValue: 2,
            duration: 2000,
            useNativeDriver: true,
        });
        scaleAnimation.start();
    }

    const animatedStyle = {
        transform: [
            {
            translateX: animatedValue.x,
            },
            {
            translateY: animatedValue.y,
            },
            {
                scale: scaleValue,
            },
            {
                rotate: rotateValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '45deg']
                })
            },
        ],
    }

    const rotateBox = () => {
        const rotateAnimation = Animated.timing(rotateValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        });
        rotateAnimation.start();

    }

    const globalAnimatedStyle = {
        transform: [
            {
            translateX: globalAnimatedValue.interpolate({
                inputRange:[0, 1],
                outputRange:[0, width - 100],
            }),
            },
            {
            translateY: globalAnimatedValue.interpolate({
                inputRange:[0, 1],
                outputRange:[0, height - 200],
            }),
            },
            {
                scale: globalAnimatedValue.interpolate({
                    inputRange:[0, 1],
                    outputRange:[1, 2],
                }),
            },
            {
                rotate: globalAnimatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '45deg']
                })
            },
        ],
    }

    const globalAnimate = () => {
        const globalAnimation = Animated.timing(globalAnimatedValue, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
        });
        globalAnimation.start();
    }

    return (
        <SafeAreaView style={styles.conatiner}>
        
        {/* Here we are doing everything separetely ------------------------------------------- */}

        <TouchableOpacity onPress={moveHorizontal}>
            <Text>Move Horizontal</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={scaleBox}>
            <Text>Increase Size</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={rotateBox}>
            <Text>Rotate Box</Text>
        </TouchableOpacity>


        {/* Here we are doing global Animation ----------------------------------------------- */}
        
        <TouchableOpacity onPress={globalAnimate}>
            <Text>Global Animation</Text>
        </TouchableOpacity>

        {/* Below is a Animated Value --------------------------------------------------------- */}
        <Animated.View style={[styles.box, animatedStyle]}>
        </Animated.View>

        <Animated.View style={[styles.globalBox, globalAnimatedStyle]}>
        </Animated.View>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    conatiner:{
        flex:1
    },
    box:{
        height:height/10,
        width:width/5,
        backgroundColor:'yellow'
    },
    globalBox:{
        height:height/10,
        width:width/5,
        backgroundColor:'green'
    }
})


export default Animations