import React from 'react'
import { View , Text , Image  } from 'react-native'
import { Button , Icon } from 'native-base'
import * as Animatable from 'react-native-animatable'

import styles from './styles/SplashScreenStyle'

function SplashScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Animatable.View animation='bounceInDown' style={styles.imageView}>
                <Image source={require('../assets/heart_beat.jpg')} resizeMode='stretch' style={styles.image} />
            </Animatable.View>
            <Animatable.View animation='bounceInUp' style={styles.description}>
                <View style={styles.textView}>
                    <Text style={styles.primaryText}>Stay connected with everyone</Text>
                    <Text style={styles.text}>sign in with account</Text>
                </View>
                <View style={styles.buttonView}>
                    <Button transparent style={styles.button} onPress={() => navigation.navigate('SignIn')}>
                        <Text style={styles.buttonText}>Get Started</Text>
                        <Icon name='right' type='AntDesign' style={styles.icon} />
                    </Button>
                </View>
            </Animatable.View>
        </View>
    )
}

export default SplashScreen
