import React from 'react';
import { View, Text, Button } from 'react-native';


const DashBoard = ({ navigation, screenProps }) => {

    return (
        <View>
            <Text>dashBoard</Text>
            <Button
                title="Log Out" 
                onPress={() => { screenProps.logout() }} 
            />
        </View>
    );
}

export default DashBoard;