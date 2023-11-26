import * as React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    ImageBackground,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { useFonts } from "expo-font";
import {Roboto_700Bold_Italic , Roboto_300Light_Italic} from "@expo-google-fonts/roboto";
import {Tangerine_400Regular , Tangerine_700Bold} from "@expo-google-fonts/tangerine";
import Background1 from "../img/bg-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import io from "socket.io-client"
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

export default function HomeScreen({ navigation }) {
    const [phoneArray, setPhoneArray] = React.useState([]);
    const [phone, setPhone] = React.useState("");

    const socket = io.connect("http://24.199.101.67:8080");

    const [fontsLoaded] = useFonts({
        Roboto_700Bold_Italic,
        Tangerine_400Regular,
        Tangerine_700Bold,
        Roboto_300Light_Italic
    });


    function DismissKeyboard() {
        Keyboard.dismiss();
    }

    function handlePhoneNumber(number) {
        setPhoneArray(oldArray => [...oldArray, number]);
    }

    function deleteNumber() {
        setPhoneArray(oldArray => {
            let updatedAray = [...oldArray];
            updatedAray.pop();
            return updatedAray;
        });
    }

    const handleChecking = (resp) => {
        alert(resp);
        setPhone("");
        setPhoneArray([]);
    }

    async function sendCheckIn() {
        if (!phone) {
            Alert.alert("Please Enter Full Your Information !");
            return false;
        }
        else if (phone.length != 10){
            Alert.alert("Phone Number not in correct format");
            return false
        }
        try {

            socket.emit('check_in', {phone: phone});
            socket.on('check_data_app' , handleChecking);

        } catch (error) {
            console.error(error);
        }
    }

    React.useEffect(() => {
        setPhone(phoneArray.join(""));
    }, [phoneArray]);

    return (
        <View>
            <ImageBackground className="w-full h-full" source={Background1}>
                <TouchableWithoutFeedback
                    onPress={() => {
                        DismissKeyboard();
                    }}
                >
                    <View className="flex-1 justify-center items-center">
                        <View className="flex py-4 shadow-md backdrop-blur-lg bg-white/60 w-3/4 flex-col justify-center items-center space-y-6 rounded-lg">
                            {phone
                                ?
                                <View className="flex flex-row gap-2 justify-center items-center">
                                    <TextInput
                                        className="text-2xl mb-3"
                                        keyboardType="default"
                                        placeholder={phone}
                                        value={phone}
                                    />
                                    <TouchableOpacity onPress={() => deleteNumber()}>
                                        <FontAwesomeIcon icon={faDeleteLeft} size={40}></FontAwesomeIcon>
                                    </TouchableOpacity>
                                </View>
                                :
                                <Text style = {{fontFamily: "Roboto_300Light_Italic"}} className = "text-2xl">Fill your number to check in</Text>
                            }
                            <View className="flex flex-row gap-5">
                                <TouchableOpacity
                                    className="
                                    flex flex-row justify-center text-center
                                    border-2 border-sky-400 py-4 px-2 w-[100px] h-[100px] rounded-full
                                    "
                                    onPress={() => handlePhoneNumber(1)}
                                >
                                    <View className="flex flex-col justify-center text-center">
                                        <Text className = "text-2xl">1</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    className="
                                    flex flex-row justify-center text-center 
                                    border-2 border-sky-400 text-xl py-4 px-2 w-[100px] h-[100px] rounded-full
                                    "
                                    onPress={() => handlePhoneNumber(2)}
                                >
                                    <View className="flex flex-col justify-center text-center">
                                        <Text className = "text-2xl">2</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    className="
                                    flex flex-row justify-center text-center 
                                    border-2 border-sky-400 text-xl py-4 px-2 w-[100px] h-[100px] rounded-full
                                "
                                    onPress={() => handlePhoneNumber(3)}
                                >
                                    <View className="flex flex-col justify-center text-center">
                                        <Text className = "text-2xl">3</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View className="flex flex-row gap-6">
                                <TouchableOpacity
                                    className="
                                    flex flex-row justify-center text-center 
                                    border-2 border-sky-400 text-xl py-4 px-2 w-[100px] h-[100px] rounded-full
                                "
                                    onPress={() => handlePhoneNumber(4)}
                                >
                                    <View className="flex flex-col justify-center text-center">
                                        <Text className = "text-2xl">4</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    className="
                                    flex flex-row justify-center text-center 
                                    border-2 border-sky-400 text-xl py-4 px-2 w-[100px] h-[100px] rounded-full
                                "
                                    onPress={() => handlePhoneNumber(5)}
                                >
                                    <View className="flex flex-col justify-center text-center">
                                        <Text className = "text-2xl">5</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    className="
                                    flex flex-row justify-center text-center 
                                    border-2 border-sky-400 text-xl py-4 px-2 w-[100px] h-[100px] rounded-full
                                "
                                    onPress={() => handlePhoneNumber(6)}
                                >
                                    <View className="flex flex-col justify-center text-center">
                                        <Text className = "text-2xl">6</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View className="flex flex-row gap-6">
                                <TouchableOpacity
                                    className="
                                    flex flex-row justify-center text-center 
                                    border-2 border-sky-400 text-xl py-4 px-2 w-[100px] h-[100px] rounded-full
                                "
                                    onPress={() => handlePhoneNumber(7)}
                                >
                                    <View className="flex flex-col justify-center text-center">
                                        <Text className = "text-2xl">7</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    className="
                                    flex flex-row justify-center text-center 
                                    border-2 border-sky-400 text-xl py-4 px-2 w-[100px] h-[100px] rounded-full
                                "
                                    onPress={() => handlePhoneNumber(8)}
                                >
                                    <View className="flex flex-col justify-center text-center">
                                        <Text className = "text-2xl">8</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    className="
                                    flex flex-row justify-center text-center 
                                    border-2 border-sky-400 text-xl py-4 px-2 w-[100px] h-[100px] rounded-full
                                "
                                    onPress={() => handlePhoneNumber(9)}
                                >
                                    <View className="flex flex-col justify-center text-center">
                                        <Text className = "text-2xl">9</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View className="flex flex-row gap-6">
                                <TouchableOpacity
                                    className="
                                    flex flex-row justify-center text-center 
                                    border-2 border-sky-400 text-xl py-4 px-2 w-[100px] h-[100px] rounded-full
                                "
                                    onPress={() => handlePhoneNumber(0)}
                                >
                                    <View className="flex flex-col justify-center text-center">
                                        <Text className = "text-2xl">0</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                className="border-2 border-[#9eccfa] bg-[#9eccfa] items-center capitalize text-white text-center w-[250px] py-3 rounded"
                                // onPress={() => navigation.navigate('Admin')}
                                onPress={() => sendCheckIn()}
                            >
                                <Text style= {{fontFamily: 'Tangerine_400Regular'}} className="text-4xl text-white">Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ImageBackground>
        </View>
    );
}

// ... other code from the previous section