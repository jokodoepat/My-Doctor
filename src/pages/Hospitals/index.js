import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../utils'
import { Gap, ListHospitals } from '../../components'

const Hospitals = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Hospitals</Text>
                <Gap height={20} />
            </View>
            <ListHospitals />
            <ListHospitals />
            <ListHospitals />
            <View style={styles.wrapper}>
                <Gap height={20} />
                <Text style={styles.nearby}>3 Hospitals Nearby From You</Text>
            </View>
        </View>
    )
}

export default Hospitals

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    wrapper: {
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[700],
        color: colors.text.primary,
        marginTop: 30,
        marginLeft: 16,
    },
    nearby: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.secondary
    }
})
