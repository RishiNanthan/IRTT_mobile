import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import DashBoard from '../screens/DashBoard';
import AppBar from '../components/AppBar';


const screens = {
    DashBoard: {
        screen: ({ screenProps, navigation }) => {
            return <DashBoard screenProps={ screenProps } /> 
        },
        navigationOptions: ({ screenProps, navigation }) => {
            return {
                headerTitle: () => <AppBar screenProps={ screenProps } navigation={ navigation } title="IRTT - DashBoard" />,
            }
        }
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        
    }
});

export default HomeStack;
