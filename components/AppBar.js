import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const AppBar = ({ navigation, title, data, drawerNavigation }) => {

    const styles = StyleSheet.create({
        appbar: {
            padding: 10,
            paddingTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: data.userType === "student" ? 'orange': 'lightgreen',
        },
        title: {
            fontWeight: 'bold',
            fontSize: 15,
            color: 'white',
        },
        icon: {
            position: 'absolute',
            left: 10,
            color: 'white',
        }
    });

    const openDrawer = () => {
        drawerNavigation.openDrawer();
    }

    title = title === null ? "IRTT" : title ;

    return (
        <View style={ styles.appbar }>
            <MaterialIcons name="menu" size={ 25 } style={ styles.icon } onPress={ openDrawer } />
            <Text style={ styles.title }>{ title }</Text>
        </View>
    );
}


export default AppBar;
