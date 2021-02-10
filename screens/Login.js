import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity, Touchable } from 'react-native';

import RadioButton from '../components/RadioButton';


const Login = ( { userType, setUserType, setUserID, setPassword, userid, password } ) => {

    const color = userType === "student" ? 'orange' : 'lightgreen';

    const styles = StyleSheet.create({
        radios: {
            width: '70%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 20,
        },
        container: {
            flex: 1,
            margin: 10,
            alignItems: 'center',
            justifyContent: 'center',
        },
        header: {
            width: '100%',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            position: 'absolute',
            top: 50,
            fontSize: 24,
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            backgroundColor: color,
        },
        title: {
            color: color,
            fontSize: 20,
            fontWeight: 'bold',
            marginVertical: 10,
            borderBottomColor: 'gray',
        },
        input: {
            width: '60%',
            borderBottomColor: 'gray',
            borderBottomWidth: 2,
            margin: 20,
            textAlign: 'center',
        },
        button: {
            width: '40%',
        }
    });

    const [user, setUser] = useState({id: userid, pw: password});

    return (
        <View style={ styles.container }>
            <Text style={ styles.header }>IRTT</Text>
            
            <Text style={ styles.title }>{ userType[0].toUpperCase() + userType.slice(1) } Login</Text>

            <View style={ styles.radios }>
                <TouchableOpacity onPress={ () => {
                    setUserType("student");
                }}>
                    <RadioButton selected={ userType === "student" } color={ color } > Student </RadioButton>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => {
                    setUserType("staff");
                }}>
                    <RadioButton selected={ userType === "staff" } color={ color } > Staff </RadioButton>
                </TouchableOpacity>
            </View>

            <TextInput
                style={ styles.input }
                placeholder={ userType === 'student' ? 'Roll Number' : 'Staff ID' } 
                autoCapitalize="characters" 
                value={ user.id }
                onChangeText={ val => setUser({...user, id: val}) } 
            />
            <TextInput 
                style={ styles.input }
                placeholder='Password' 
                value={ user.pw } 
                onChangeText={ val => setUser({...user, pw: val}) } 
            />
            <Button
                style={ styles.button } 
                color={ color }
                title="Login" 
                onPress={ () => {
                    setPassword(user.pw);
                    setUserID(user.id);
                }} 
            />
        </View>
    );
}



export default Login;