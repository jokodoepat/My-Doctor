import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../../../utils'
import IconOnly from './iconOnly'

const Button = ({type, title, onPress, icon}) => {

    if(type==="icon-only"){
        return (
            <IconOnly icon={icon} onPress={onPress}/>
        )
    }

    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container : (type) => ({
        backgroundColor : type === 'secondary' ? colors.button.secondary.backgroud : colors.button.primary.background,
        paddingVertical : 10,
        borderRadius : 10,
    }),
    text : (type) => ({
        fontSize : 18,
        fontFamily: 'Nunito-SemiBold',
        textAlign : 'center',
        color : type === 'secondary' ? colors.button.secondary.text : colors.button.primary.text
    })
})
