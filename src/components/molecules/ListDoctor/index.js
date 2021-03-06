import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyDoctor1 } from '../../../assets'
import { colors, fonts } from '../../../utils'

const ListDoctor = () => {
    return (
        <View style={styles.container}>
            <Image source={DummyDoctor1} style={styles.avatar} />
            <View>
                <Text style={styles.name}>Joko Kuncoro</Text>
                <Text style={styles.desc}>Baik, semoga lekas sehat!!!</Text>
            </View>
        </View>
    )
}

export default ListDoctor

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        alignItems: 'center'
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
        marginRight: 12
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary.normal,
        color: colors.text.primary
    },
    desc: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.secondary
    }
})
