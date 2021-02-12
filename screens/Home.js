import React, { useState, useEffect } from 'react';

import Drawer from '../routes/Drawer';

import Login from './Login';

const Home = ( { navigation } ) => {

    const [usertype, setUserType] = useState('student');
    const [userid, setUserID] = useState('');
    const [password, setPassword] = useState('');

    const [loggedIn, setLoggedIn] = useState(false);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        // Log In logic

        if(userid !== '' && password !== ''){
            setLoggedIn(true);
        }
        else{
            setMessage({error: true, text: "Please fill details below"});
        }
    }, [userid, password]);

    if(!loggedIn){
        return (
            <Login 
                userType={ usertype }
                userid={ userid }
                password={ password } 
                setUserID={ setUserID } 
                setPassword={ setPassword }
                setUserType= { setUserType } 
                message={ message }
                setMessage={ setMessage }
            />
        );
    }

    else{
        return (
            <Drawer 
                screenProps={
                    {
                        userType: usertype,
                        userid: userid,
                        logout: () => {
                            setPassword(""); 
                            setLoggedIn(false); 
                        }
                    }
                }
            />            
        );    
    }
}


export default Home;
