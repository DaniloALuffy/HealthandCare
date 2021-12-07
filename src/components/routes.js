import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Entypo, Feather, AntDesign, FontAwesome5, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';

import { Diseases } from './pages/Diseases/index';
import { Home } from './pages/Home/index';
import { New } from './pages/New/index';
import { ButtonNew } from './buttonNew'

const Tab = createBottomTabNavigator();

function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { 
                    backgroundColor: '#f0f0f0',
                    borderTopColor: 'transparent',
                    paddingBottom: 5,
                    paddingTop: 5,
                },
                tabBarActiveTintColor: '#8D31E1',
            }}
        >
            <Tab.Screen 
                name="Início" 
                component={Home} 
                options={{
                    headerStyle: {
                        backgroundColor: '#a04ced',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontSize: 21,
                    },
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign name="home" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="Salvos" 
                component={New} 
                options={{
                    tabBarLabel: "",
                    headerStyle: {
                        backgroundColor: '#a04ced',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontSize: 21,
                    },
                    tabBarIcon: ({ focused, size, color }) => (
                        <ButtonNew size={size} focused={focused}/>
                    )
                }}
            />

            <Tab.Screen 
                name="Info. Doenças" 
                component={Diseases} 
                options={{
                    headerStyle: {
                        backgroundColor: '#a04ced',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontSize: 21,
                    },
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons name="hospital" size={30} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}
export default Routes