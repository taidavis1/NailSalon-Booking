import React, { useRef, useEffect, useState } from 'react';
import { Button, StyleSheet, View, Text, SafeAreaView, Alert, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

export default function App() {
    const animationRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    function toHomeScreen() {
        setIsLoading(!isLoading);
        console.log(isLoading);
    }
    useEffect(() => {
        if (animationRef.current){
            animationRef.current.play();
        }
    }, []);
    return (
        <SafeAreaView className = "bg-slate-400/75 flex-1">
            {
                !isLoading
                    ?
                    <View>
                        <View className="flex flex-row items-baseline max-h-screen ">
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
                    :
                    <View className="flex flex-row justify-center mt-2">
                        <View className="flex flex-col justify-center mt-5 text-center items-center">
                            <Text className="text-lg" style={styles.subtitle}>Home Navigation Screen</Text>
                        </View>
                    </View>
            }
        </SafeAreaView>
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
