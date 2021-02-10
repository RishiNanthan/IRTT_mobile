import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


const About = ( { navigation } ) => {

    return (
        <View style={ styles.container }>
            <Text>About</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    }
});


export default About;