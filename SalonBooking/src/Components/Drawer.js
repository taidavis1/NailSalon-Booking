import React from "react";
import HomeScreen from "../views/HomeScreen";
import AdminScreen from "../views/AdminScreen";
import CustomerDrawer from "../Components/CustomDrawer";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from "@react-navigation/drawer";

DrawerC = createDrawerNavigator();

const Drawer = () => {
    return (
        <DrawerC.Navigator drawerContent = 
            {props => <CustomerDrawer {...props} />} 
            screenOptions = {{
                headerShown: false,
                drawerActiveBackgroundColor: '#e67a7f',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
            }}>
            <DrawerC.Screen name = "Home" component = {HomeScreen} 
                options = {{
                    drawerIcon: ({color}) => (
                        <Ionicons name="home-outline" size={23} color={color} />
                    ),
                }}
            />
            <DrawerC.Screen name = "Admin" component = {AdminScreen} 
                options = {{
                    drawerIcon: ({color}) => (
                        <Ionicons name="person-outline" size={23} color={color} />
                    ),
                }}
            />
        </DrawerC.Navigator>
    );
};
export default Drawer;