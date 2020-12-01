import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILDoctor, ILGetstarted } from '../../assets'
import { Button, Gap } from '../../components'

const GetStarted = ({navigation}) => {
    return (
        <ImageBackground source={ILGetstarted} style={styles.page}>
                <View>
                    <ILDoctor style={styles.logo}/>
                    <Text style={styles.title}>Konsultasi dengan {"\n"}dokter jadi lebih {"\n"}mudah & fleksibel</Text>
                </View>
                <View>
                    <Button title="Get Started" onPress={()=>navigation.navigate('Register')}/>
                    <Gap height={16} />
                    <Button type="secondary" title="Sign In" onPress={()=>navigation.navigate('Login')}/>
                </View>
        </ImageBackground>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    logo : {
        width:100, 
        height:100
    },
    page : {
        padding : 40,
        justifyContent : 'space-between',
        flex : 1
    },
    title : {
        marginTop : 91,
        fontSize : 28,
        color : 'white',
        fontFamily: 'Nunito-SemiBold',
    }
})
