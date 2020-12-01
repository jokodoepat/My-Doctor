import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconBackDark } from '../../../assets'
import { colors } from '../../../utils'
import { Gap } from '../../atoms'

const Header = () => {
    return (
        <View style={styles.container}>
            <IconBackDark/>
            <Text style={styles.text}>Daftar Akun</Text>
            <Gap width={24}/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container : {
        paddingHorizontal:16,
        paddingVertical:30,
        backgroundColor:colors.white,
        flexDirection:'row'
    },
    text : {
        textAlign:'center',
        flex:1,
        fontFamily:'Nunito-SemiBold',
        color:colors.text.primary,
        fontSize:20
    }
})
