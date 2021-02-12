import React from 'react';

import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import AboutStack from './AboutStack';
import HomeStack from './HomeStack';

const HomeStackContainer = createAppContainer(HomeStack);


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


export default createAppContainer(Drawer);
