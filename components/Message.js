import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { MaterialIcons } from '@expo/vector-icons';


const Message = ({message, close}) => {

    if(message === null || message.text === ''){
        return null;
    }

    const styles = StyleSheet.create(
        {
            text: {
                color: 'white',
            },
            block: {
                borderRadius: 5,
                padding: 10,
                margin: 10,
                backgroundColor: message.error ? 'red': 'green',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }
        }
    )

    return (
        <TouchableOpacity onPress={ close }>
            <View style={ styles.block }>
                <Text style={ styles.text }>{ message.text }</Text>
                <MaterialIcons name="delete" color='white' size={ 15 } />
            </View>
        </TouchableOpacity>
    );
}

export default Message;
