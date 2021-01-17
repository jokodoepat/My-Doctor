import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyHospital1 } from '../../../assets'
import { colors, fonts } from '../../../utils'

const ListHospitals = () => {
    return (
        <View style={styles.container}>
            <Image source={DummyHospital1} style={styles.picture} />
            <View>
                <Text style={styles.title}>Rumah Sakit</Text>
                <Text style={styles.title}>Harapan Bunda</Text>
                <Text style={styles.address}>Jl. Raya Jakarta-Bogor KM 22</Text>
            </View>
        </View>
    )
}

export default ListHospitals

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        flexDirection: 'row',
        alignItems: 'center'
    },
    picture: {
        width: 80,
        height: 60,
        borderRadius: 15,
        marginRight: 16
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.primary.normal,
        color: colors.text.primary
    },
    address: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.secondary,
        paddingTop: 6
    }
})
