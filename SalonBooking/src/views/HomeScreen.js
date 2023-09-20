import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen({ navigation }) {
    const [name, onChangeName] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [phoneNumber, onChangeNumber] = React.useState('');
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, phone: phoneNumber })
    };
  
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
        <View className="flex-1 justify-center items-center">
            <View className="flex flex-col justify-center items-center">
                <Text className="text-lg">Fill your basic info to check in</Text>
                <TextInput
                    className="
                        bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                        focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-[250px] mt-2
                    "
                    onChangeText={onChangeName}
                    placeholder="Your name"
                />
                <TextInput
                    className="
                        bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                        focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-[250px] mt-2
                    "
                    placeholder="Your email"
                    onChangeText={onChangeEmail}
                />
                <TextInput
                    className="
                        bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                        focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-[250px] mt-2
                    "
                    placeholder="Your phone number"
                    onChangeText={onChangeNumber}
                />
                <TouchableOpacity
                    className="bg-[#fa6192] items-center capitalize text-white text-center px-5 py-3 mt-5 rounded"
                    title="Go to Details"
                    // onPress={() => navigation.navigate('Admin')}
                    onPress={() => SubmitForm()}
                ><Text className="text-xl">Submit</Text></TouchableOpacity>

                {/* <TouchableOpacity
                    className="bg-[#fa6192] items-center capitalize text-white text-center px-5 py-3 mt-5 rounded"
                    title="Go to Details"
                    onPress={() => navigation.navigate('Admin')}
                ><Text className="text-xl">To Admin</Text></TouchableOpacity> */}
            </View>
        </View>
    );
}

// ... other code from the previous section