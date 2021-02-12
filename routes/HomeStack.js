import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DashBoard from '../screens/DashBoard';
import AppBar from '../components/AppBar';



/*

const screens = {
    DashBoard: {
        screen: ({ screenProps, navigation }) => {
            return <DashBoard screenProps={ screenProps } /> 
        },
        navigationOptions: ({ screenProps, navigation }) => {
            return {
                header: () => <AppBar screenProps={ screenProps } navigation={ navigation } title="IRTT - DashBoard" />,
            }
        }
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        
    }
});

*/

const Stack = createStackNavigator();

function HomeStack(){
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="DashBoard" component={ DashBoard } />
        </Stack.Navigator>
    </NavigationContainer>
}


export default HomeStack;
