import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';


const Login = ( { userType, setUserType, setUserID, setPassword, userid, password } ) => {

    const [user, setUser] = useState({id: userid, pw: password});

    return (
        <View style={ styles.container }>
            <Text style={ styles.header }>IRTT</Text>
            
            <Text style={ styles.title }>Login</Text>
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
                color='lightblue'
                title="Login" 
                onPress={ () => {
                    setPassword(user.pw);
                    setUserID(user.id);
                }} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        width: '90%',
        borderRadius: 10,
        position: 'absolute',
        top: 50,
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'lightblue',
    },
    title: {
        color: 'lightblue',
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


export default Login;