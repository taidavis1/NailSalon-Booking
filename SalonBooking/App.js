import React, { useRef, useEffect, useState } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Platform, AppRegistry , TouchableWithoutFeedback} from 'react-native';
import LottieView from 'lottie-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/views/HomeScreen';
import AdminScreen from './src/views/AdminScreen';
import Drawer from './src/Components/Drawer';
import 'react-native-gesture-handler';
export default function App() {
    const animationRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const timerRef = useRef();
    function toHomeScreen() {
        setIsLoading(!isLoading);
        console.log(isLoading);
    }
    const resetTimer = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
            setIsLoading(false);
        },120000); // 2 minutes
    };
    useEffect(() => {
        if (animationRef.current){
            animationRef.current.play();
        }
        resetTimer();
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);
    return (
        <NavigationContainer>
            <TouchableWithoutFeedback onPress={resetTimer}>
                {
                    !isLoading
                    ?
                    <>
                        <View className = "bg-slate-300 flex-1">
                            <View className="flex flex-row items-baseline max-h-screen">
                                <LottieView 
                                    ref={(animation) => {
                                        animationRef.current = animation;
                                    }}
                                    loop
                                    autoPlay
                                    style={styles.centered}
                                    source={require('./assets/animations/animation_nails.json')}
                                />
                            </View>
                            <View className="flex flex-row justify-center mt-2">
                                <View className="flex flex-col justify-center mt-5 text-center items-center">
                                    <Text className="italic text-3xl" style={styles.subtitle}>Tai Nails</Text>
                                    <Text className = "text-2xl ml-4" style={styles.title}>Welcome to Our Salon</Text>
                                    <View>
                                        <TouchableOpacity
                                            className="bg-[#fa6192] items-center capitalize text-white text-center px-5 py-3 mt-5 rounded"
                                            onPress={() => toHomeScreen()}
                                        >
                                            <Text className="text-xl">Check In</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </>
                    :
                    <Drawer/>
                }
            </TouchableWithoutFeedback>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    centered: {
        width: 500,
        height: 500,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        marginVertical: 2,
    },
    subtitle: {
        color: "#888",
    },
});
