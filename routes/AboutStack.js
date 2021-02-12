import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import About from '../screens/About';

/*
const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: "About",
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'blue',
            height: 70,
        },
        headerTintColor: 'white',
    }
});
*/

const Stack = createStackNavigator();

function AboutStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="about" component={ About } />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AboutStack;
