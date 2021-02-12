import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DashBoard from '../screens/DashBoard';
import AppBar from '../components/AppBar';


const Stack = createStackNavigator();

function HomeStack({ data, drawerNavigation }){

    return(
        <Stack.Navigator>
            <Stack.Screen name="DashBoard" options={{
                header: props => <AppBar drawerNavigation={ drawerNavigation } data={ data } { ...props } title="IRTT DashBoard" />
            }}>
            { props => <DashBoard data={ data } drawerNavigation={ drawerNavigation } { ...props } /> }
            </Stack.Screen>
        </Stack.Navigator>
    );
}


export default HomeStack;
