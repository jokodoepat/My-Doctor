import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILDoctor } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import { colors, fonts } from '../../utils'

const Login = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <ILDoctor style={styles.logo} />
            <Text style={styles.title}>Sign in with your account</Text>
            <Input label="Email Address" />
            <Gap height={24} />
            <Input label="Password" />
            <Gap height={10} />
            <Link title="Forgot My Password" size={12} />
            <Gap height={40} />
            <Button title="Sign In" onPress={() => navigation.navigate('MainApp')} />
            <Gap height={30} />
            <Link title="Create New Account" size={16} align="center" />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100
    },
    page: {
        padding: 40,
        flex: 1
    },
    title: {
        marginTop: 40,
        marginBottom: 40,
        fontSize: 20,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        maxWidth: 200,
    },
    titleInputText: {
        marginTop: 40,
        fontSize: 16,
        color: colors.black,
        fontWeight: '100'

    }
})
