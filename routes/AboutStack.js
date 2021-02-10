import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import About from '../screens/About';

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: "About",
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'blue',
            height: 70,
        },
        headerTintColor: 'white',
    }
});

export default AboutStack;
