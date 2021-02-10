import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import DashBoard from '../screens/DashBoard';
import AppBar from '../components/AppBar';


const screens = {
    DashBoard: {
        screen: DashBoard,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <AppBar navigation={ navigation } /> ,
            }
        }
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'lightblue',
            height: 70,
        },
        headerTintColor: 'white',
    }
});

export default HomeStack;
