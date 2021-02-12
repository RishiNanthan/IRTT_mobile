import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AboutStack from './AboutStack';
import HomeStack from './HomeStack';


const Drawer = createDrawerNavigator();

function AppDrawer({ data }) {

    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" >
                    { props =>  <HomeStack data={ data } drawerNavigation={ props.navigation } />  }
                </Drawer.Screen>

                <Drawer.Screen name="About" component={ AboutStack } />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}


export default AppDrawer;
