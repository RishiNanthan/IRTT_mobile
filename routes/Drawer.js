import React from 'react';

import { useWindowDimensions } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import AboutStack from './AboutStack';
import HomeStack from './HomeStack';

/*
const Drawer = createDrawerNavigator({
    Home: {
        screen: ({ screenProps, navigation }) => { 
            return <HomeStackContainer screenProps={ { ...screenProps, drawerNavigation: navigation } } /> 
        },
    },
    About: {
        screen: AboutStack,
    }
});
*/

const Drawer = createDrawerNavigator();

function AppDrawer() {

    const dimensions = useWindowDimensions();

    return (
        <Drawer.Navigator>
            <Drawer.Screen 
                name="DashBoard" 
                component={ HomeStack }
                drawerType={ dimensions.width > 768 ? 'permanent': 'front' } 
            />
            <Drawer.Screen name="About" component={ AboutStack } />
        </Drawer.Navigator>
    );
}


export default AppDrawer;
