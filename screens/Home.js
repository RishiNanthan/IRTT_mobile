import React, { useState, useEffect } from 'react';

import Drawer from '../routes/Drawer';

import Login from './Login';

const Home = ( { navigation } ) => {

    const [usertype, setUserType] = useState('student');
    const [userid, setUserID] = useState('');
    const [password, setPassword] = useState('');

    const [loggedIn, setLoggedIn] = useState(false);
    
    useEffect(() => {
        // Log In logic

        if(userid !== '' && password !== ''){
            setLoggedIn(true);
        }
    }, [userid]);

    if(!loggedIn){
        return (
            <Login 
                userType={ usertype }
                userid={ userid }
                password={ password } 
                setUserID={ setUserID } 
                setPassword={ setPassword }
                setUserType= { setUserType } 
            />
        );
    }

    else{
        return (
            <Drawer />            
        );    
    }
}


export default Home;
