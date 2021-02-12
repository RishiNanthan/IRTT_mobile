import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';


const DashBoard = ({ navigation, screenProps }) => {

    return (
        <View>
            <Text>dashBoard</Text>
            <Button onPress={() => { screenProps.logout() }}>Logout</Button>
        </View>
    );
}

export default DashBoard;