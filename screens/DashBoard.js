import React from 'react';
import { View, Text, Button } from 'react-native';


const DashBoard = ({ navigation, route, data, drawerNavigation }) => {

    return (
        <View>
            <Text>dashBoard</Text>
            <Button
                title="Log Out" 
                onPress={() => { data.logout() }} 
            />
        </View>
    );
}

export default DashBoard;