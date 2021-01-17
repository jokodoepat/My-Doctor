import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Gap } from '../../components/atoms'
import { DoctorCategory, HomeProfile, RatedDoctor, NewsItem } from '../../components/molecules'
import { colors, fonts } from '../../utils'

const Doctor = () => {
    return (
        <View style={styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.wrapperSection}>
                    <Gap height={30} />
                    <HomeProfile />
                    <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
                </View>
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.category}>
                            <Gap width={16} />
                            <DoctorCategory />
                            <DoctorCategory />
                            <DoctorCategory />
                            <DoctorCategory />
                            <Gap width={6} />
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.wrapperSection}>
                    <Text style={styles.sectionLabel}>Top Rated Doctor</Text>
                    <RatedDoctor />
                    <RatedDoctor />
                    <RatedDoctor />
                    <Text style={styles.sectionLabelNews}>Good News</Text>
                </View>
                <NewsItem />
                <NewsItem />
                <NewsItem />
            </ScrollView>
        </View>
    )
}

export default Doctor

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
    },
    wrapperSection: { paddingHorizontal: 16 },
    wrapperSectionNews: { paddingHorizontal: 16, marginTop: -16 },
    welcome: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16,
        maxWidth: 209
    },
    category: {
        flexDirection: 'row'
    },
    sectionLabel: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16
    },
    sectionLabelNews: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 14,
        marginBottom: 16
    }
})
