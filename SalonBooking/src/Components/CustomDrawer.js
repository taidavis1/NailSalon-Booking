import {DrawerContentScrollView,  DrawerItemList} from '@react-navigation/drawer';
import {View, Text, TouchableOpacity , Image} from 'react-native';
import HomeScreen from '../views/HomeScreen';
import AdminScreen from '../views/AdminScreen';
import logo from '../img/Logo.png'
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const CustomerDrawer = props => {
    return(
		<SafeAreaProvider>
			<DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#0000'}}>
				<View className = "space-y-4 px-4 py-6">
					<Image className = "rounded-full ml-12 w-40 h-24" source={logo}/>
				</View>
				<View className = "pt-4 px-2">
					<DrawerItemList {...props} />
				</View>
			</DrawerContentScrollView>
			<View className = "p-5 mb-8">
				<TouchableOpacity className = "bg-[#fa6192]" onPress={() => {}} style={{paddingVertical: 15}}>
					<Text className = " text-center text-xl text-white italic tracking-wide">Log In</Text>
				</TouchableOpacity>
			</View>
        </SafeAreaProvider>
    );
};
export default CustomerDrawer;