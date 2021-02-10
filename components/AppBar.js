import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const AppBar = ( props ) => {

    const openDrawer = () => {
        props.navigation.openDrawer();
    }

    return (
        <View style={ styles.appbar }>
            <MaterialIcons name="menu" size={ 25 } style={ styles.icon } onPress={ openDrawer } />
            <Text style={ styles.title }>IRTT</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    appbar: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    },
    icon: {
        position: 'absolute',
        left: 10,
        color: 'white',
    }
});


export default AppBar;
