import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconBackDark } from '../../../assets'

const IconOnly = ({onPress, icon}) => {

    const Icon = () => {
        if (icon==='back-light') {
            return <IconBackDark />;
        }

        if (icon==='back-dark') {
            return <IconBackDark />;
        }

        return <IconBackDark />;
    };

    return (
        <TouchableOpacity onPress={onPress}>
            <Icon />
        </TouchableOpacity>
    )
}

export default IconOnly

const styles = StyleSheet.create({})
