import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import About from '../screens/About';


const Stack = createStackNavigator();

function AboutStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="about" component={ About } />
        </Stack.Navigator>
    );
}

export default AboutStack;
