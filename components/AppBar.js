import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const AppBar = ({ navigation, title, screenProps }) => {

    const openDrawer = () => {
        screenProps.drawerNavigation.openDrawer();
    }

    title = title === null ? "IRTT" : title ;

    return (
        <View style={ styles.appbar }>
            <MaterialIcons name="menu" size={ 25 } style={ styles.icon } onPress={ openDrawer } />
            <Text style={ styles.title }>{ title }</Text>
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
        backgroundColor: 'orange',
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
