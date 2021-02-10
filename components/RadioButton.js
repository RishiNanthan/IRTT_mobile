import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default function RadioButton({ color, children, selected }) {

    color = color === undefined ? 'gray' : color;

    const styles = StyleSheet.create({
        first: {
            height: 20,
            width: 20,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: color,
            alignItems: 'center',
            justifyContent: 'center',
        },
        second: {
            height: 12,
            width: 12,
            borderRadius: 6,
            backgroundColor: color,
        },
        radio: {
            flexDirection: 'row',
        }, 
        text: {
            fontSize: 15,
        }
    });

    return (
        <View style={ styles.radio }>
            <View style={ styles.first } >
            {
                selected ?
                <View style={ styles.second }/> : null
            }
            </View>
            <Text style={ styles.text }>{ children }</Text>
        </View>
    );
}
