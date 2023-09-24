import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Background from "../img/bg-1.jpg";

export default function HomeScreen({ navigation }) {
    
    const [name, onChangeName] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [phoneNumber, onChangeNumber] = React.useState('');
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, name: name, phone: phoneNumber })
    };

    function DismissKeyboard(){
        Keyboard.dismiss();
    }
  
    async function SubmitForm (){
        console.log(name);
        console.log(phoneNumber);
        try {
            await fetch(
                'http://127.0.0.1:5000/api/checking', requestOptions)
                .then(response => {
                    response.json()
                        .then(data => {
                            Alert.alert(data.messages);
                        });
                })
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <View>
            <ImageBackground className = "w-full h-full" source={Background}>
                <TouchableWithoutFeedback onPress={ () => { DismissKeyboard() } }>
                    <View className="flex-1 justify-center items-center">
                        <View className="flex py-6 shadow-md bg-white/90 w-1/3 flex-col justify-center items-center space-y-8">
                            
                            <TextInput
                                className="
                                    border-b-2 border-b-black text-lg
                                    focus:ring-[#5ef5f7] focus:border-[#5ef5f7] block py-4 px-2 w-[250px]
                                "
                                onChangeText={onChangeName}
                                placeholder="Your name"
                            />
                            <TextInput
                                className="
                                    border-b-2 border-b-black text-lg
                                    focus:ring-[#5ef5f7] focus:border-[#5ef5f7] block py-4 px-2 w-[250px]
                                "
                                placeholder="Your email"
                                onChangeText={onChangeEmail}
                            />
                            <TextInput
                                keyboardType='numeric'
                                className="
                                    border-b-2 border-b-black text-lg
                                    focus:ring-[#5ef5f7] focus:border-[#5ef5f7] block py-4 px-2 w-[250px]
                                "
                                placeholder="Your phone number"
                                onChangeText={onChangeNumber}
                            />
                            <TouchableOpacity
                                className="border-2 border-[#5ef5f7] bg-[#5ef5f7] items-center capitalize text-white text-center px-5 py-3 rounded"
                                title="Go to Details"
                                // onPress={() => navigation.navigate('Admin')}
                                onPress={() => SubmitForm()}
                            ><Text className="text-xl">Submit</Text></TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ImageBackground>
        </View>
    );
}

// ... other code from the previous section