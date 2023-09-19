import React, { useRef, useEffect, useState } from 'react';
import { Button, StyleSheet, View, Text, SafeAreaView, Alert, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

export default function App() {
    const animation = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    function toHomeScreen() {
        setIsLoading(!isLoading);
        console.log(isLoading);
    }
    useEffect(() => { }, []);

    return (
        <SafeAreaView>
            {
                !isLoading
                    ?
                    <View>
                        <View className="flex flex-row items-baseline max-h-screen ">
                            <LottieView
                                autoPlay
                                loop
                                style={styles.centered}
                                source={require('./assets/animations/animation_nails.json')}
                            />
                        </View>
                        <View className="flex flex-row justify-center mt-2">
                            <View className="flex flex-col justify-center mt-5 text-center items-center">
                                <Text className="italic" style={styles.subtitle}>Tai Nails</Text>
                                <Text style={styles.title}>Welcome to Our Salon</Text>
                                <View>
                                    <TouchableOpacity
                                        className="bg-[#fa6192] text-white text-center items-center w-[100px] h-[50px] mt-5 rounded"
                                        onPress={() => toHomeScreen()}
                                    >
                                        <Text className="mt-3 text-lg">Check In</Text>
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
        fontSize: 18,
        marginVertical: 2,
    },
    subtitle: {
        fontSize: 16,
        color: "#888",
    },
});
