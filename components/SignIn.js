import React , { useState , useContext } from 'react'
import { View , Text ,TextInput , TouchableOpacity , StatusBar } from 'react-native'
import { Icon } from 'native-base'
import * as Animatable from 'react-native-animatable'
import { LinearGradient } from 'expo-linear-gradient'

import styles from './styles/SignInStyle'
import { AuthContext } from './Context'

function SignIn({ navigation }) {
    
    const { login } = useContext(AuthContext);

    
    const [data , setData] = useState({
        username:'',
        password:'',
        secureData: true,
        secureTextEntry: true,
        checkCircle: false
    })

    const dataChange = (val) => {
            if (val.length !== 0) {
                setData({
                    ...data,
                    username: val,
                    checkCircle: true
                });
            }
            else {
                setData({
                    ...data,
                    username: val,
                    checkCircle: false,
                });
            }

        }
 
    const passwordChange = val =>{
        setData({
            ...data,
            password:val
        })
    }

    const loginHandle = (username, password) => {
        login(username, password);
    }

    const updateTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
            secureData:!data.secureData
        })
    }

     return (
     <View style={styles.container}>
         <StatusBar backgroundColor="#d1112e" barStyle='light-content' />
         <View style={styles.header}>
             <Text style={styles.welcome}>Welcome!</Text>
         </View>
         <Animatable.View style={styles.footer} animation='bounceInUp' >
            <Text style={styles.email}>Email</Text>
                 <View style={styles.emailView}>
                     <Icon  name='user-o' type='FontAwesome' style={styles.icon1} /> 
                    <TextInput 
                    style={styles.TextInput} 
                    placeholder='Your Email'
                    onChange={(val) => dataChange(val)}
                   />
                   
                   {data.checkCircle ? 
                   <Animatable.View animation='bounceIn'>
                       <Icon name='check-circle' type='Feather' style={styles.icon2}  />
                   </Animatable.View>
                    :null}

                 </View>
                 <Text style={styles.email}>Password</Text>
                 <View style={styles.emailView}>
                     <Icon  name='lock' type='FontAwesome' style={styles.icon1} /> 
                    <TextInput 
                    style={styles.TextInput} 
                    placeholder='Your Password'
                    secureTextEntry={data.secureTextEntry ? true : false}
                    onChangeText={(val) => passwordChange(val)}
                   />
                   <TouchableOpacity onPress={updateTextEntry}>
                   {data.secureData ? 
                        
                        <Icon name='eye-off' type='Feather' style={styles.icon2} />
                   :
                        <Icon name='eye' type='Feather' style={styles.icon2} />
                    }
                    </TouchableOpacity>
                 </View>
                 <TouchableOpacity onPress={() => alert(`${data.username}`)}>
                    <LinearGradient colors={['#cc0606','#ed2121']} style={styles.signGradient}>
                        <Text style={styles.signIn}>SignIn</Text>
                    </LinearGradient>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={() => navigation.navigate('SignUp')} >
                    <LinearGradient colors={['#cc0606','#ed2121']} style={styles.signGradient}>
                        <Text style={styles.signIn}>SignUp</Text>
                    </LinearGradient>
                 </TouchableOpacity>
             </Animatable.View>
     </View>   
    )
}

export default SignIn
