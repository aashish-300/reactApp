import React, { useState , useEffect , useMemo } from 'react';
import { AppRegistry, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

//This is just for try 
//This is my first time with git and github

import RootStackScreen from './components/RootStackScreen'
import { AuthContext } from './components/Context'
import Play from './components/Play'


export default  App = () => {

  // const [isLoading, setIsLoading] = useState(true);
  // const [userTokken, setUserTokken] = useState(false);

  const initialLoginState = { 
    isLoading: true,
    userName: null,
    userTokken: null,
}

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKKEN':
        return {
          ...prevState,
          userTokken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userTokken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userTokken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userTokken: action.token,
          isLoading: false,
        };
    }
  }
  
  const [loginState , dispatch ] = React.useReducer(loginReducer , initialLoginState )
  
  const screen = useMemo(() => ({
    login: (userName , password ) => {
      // setUserTokken(true);
      // setIsLoading(false);
    let userTokken;
      userTokken = null;
      if (userName === 'User' && password === 'Pass') {
        userTokken = 'asis';
        alert('hello');
      }
      dispatch({ type: 'LOGIN', id: userName, token: userTokken });

    },
    logout: () => {
      // setUserTokken(false);
      // setIsLoading(false);
      dispatch({ type: 'LOGOUT' });

    }
  }))

  useEffect(() => {
    setTimeout(() => {
      // setIsLoading(false);
      dispatch({ type:'RETRIEVE_TOKKEN', token:'aashish'})
    }, 1000)
  }, [])

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <AuthContext.Provider value={screen}>
        <NavigationContainer>
          {loginState.userTokken ?
            (<Play />)
            :
            (<RootStackScreen />
            )}
        </NavigationContainer>
      </AuthContext.Provider>
    </View>
  );
}

