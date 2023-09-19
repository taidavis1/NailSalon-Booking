import { StatusBar } from 'expo-status-bar';
import {Text, View , Image , TouchableOpacity} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View className = "bg-slate-500 border-2 border-red-200 flex-1 px-12 py-3 space-y-24">
      <View className = " border-2 mt-12 flex flex-row max-w-screen-lg">
        <TouchableOpacity>
          <Image className = "w-12 h-20 border-2 p-5 mt-12 rounded-full hover:opacity-50" source = {require('./src/img/Logo.jpeg')} />
        </TouchableOpacity>
        <View>
          <Text>dadadad</Text>
        </View>
      </View>
      <View className = "font-normal border-2 border-red-200 px-5 py-4">
        <Text className = "text-2xl italic ">Welcome to Our Salon</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
