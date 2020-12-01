import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { ILDoctor } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'

const Login = () => {
    return (
        <View style={styles.page}>
            {/* <View> */}
                <ILDoctor style={styles.logo}/>
                <Text style={styles.title}>Sign in with your account</Text>
                <Input label="Email Address"/>
                <Gap height={24} />
                <Input label="Password"/>
                <Gap height={10} />
                <Link title="Forgot My Password" size={12}/>
                <Gap height={40} />
                <Button title="Sign In"/>
                <Gap height={30} />
                <Link title="Create New Account" size={16} align="center"/>
            {/* </View> */}
            {/* <View>
                <Button title="Sign In"/>
                <Gap height={30} />
                <Link title="Create New Account" size={16} align="center"/>
            </View> */}
            
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    logo : {
        width : 100,
        height : 100
    },
    page : {
        padding : 40,
        // justifyContent : 'space-between',
        flex : 1
    },
    title : {
        marginTop : 40,
        marginBottom : 40,
        fontSize : 20,
        color : 'black',
        fontFamily: 'Nunito-SemiBold',
        maxWidth : 200,
    },
    titleInputText : {
        marginTop : 40,
        fontSize : 16,
        color : 'black',
        fontWeight : '100'

    }
})
