import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Gap } from '../../components'
import ListDoctor from '../../components/molecules/ListDoctor'
import { colors, fonts } from '../../utils'

const Messages = () => {
    return (
        <View style={styles.page}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Messages</Text>
                <Gap height={20} />
            </View>
            <ListDoctor />
            <ListDoctor />
            <ListDoctor />
            <ListDoctor />
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[700],
        color: colors.text.primary,
        marginTop: 30,
        marginLeft: 16,
    },
    wrapper: {
        alignItems: 'center'
    }
})
