import React from 'react'
import 'react-native-gesture-handler';
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import SplashScreen from './SplashScreen'
import SignIn from './SignIn'
import SignUp from './SignUp'

const stack = createStackNavigator();
function RootStackScreen() {
    return (
        <View style={{flex:1}}>
            <stack.Navigator headerMode='none' initialRouteName='SplashScreen'>
                <stack.Screen name='SplashScreen' component={SplashScreen} />
                <stack.Screen name='SignIn' component={SignIn} />
                <stack.Screen name='SignUp' component={SignUp} />
            </stack.Navigator>
        </View>
    )
}

export default RootStackScreen
