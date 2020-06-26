import React from "react"
import { View , Text } from 'react-native'
import { TouchableOpacity, TextInput } from "react-native-gesture-handler"
import { AuthContext } from './Context'


export default function Play() {
    const { logout } = React.useContext(AuthContext)

    const [store, setStore] = React.useState({
        username:'aashish'
    });

    const dataChange = val => {
        setStore({
            ...store,
            username:val
        })
    }
    return (
        <View style={{ backgroundColor: 'green', flex: 1, justifyContent:'center', alignItems:'center' }}>
            <Text>hello</Text>   
            <TouchableOpacity onPress={() => logout()}>
                <Text>signOut</Text>
            </TouchableOpacity>
            <TextInput placeholder='type here' onChange={(val) => dataChange(val)} />
            <Text>{store.username}</Text>
        </View>
    )
}