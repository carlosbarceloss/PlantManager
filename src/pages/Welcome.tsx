import React from 'react';
import {
    Text,
    SafeAreaView,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';

//Navigation
import { useNavigation } from '@react-navigation/core';

//Icons
import { Feather } from '@expo/vector-icons'

//Assets
import wateringImg from '../components/assets/watering.png';

//Styles
import colors from '../styles/colors';
import fonts from '../styles/fonts';

//View
export function Welcome() {

    const navigation = useNavigation();

    function handleStart() {
        navigation.navigate('UserIdentifier');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerencie {'\n'}
                    suas plantas de{'\n'}
                    forma fácil
                </Text>

                <Image
                    source={wateringImg}
                    style={styles.image}
                    resizeMode='contain'
                />

                <Text style={styles.subtitle}>
                    Não esqueça mais de regar suas plantas.
                    Nós cuidamos de lembrar você  sempre que precisar.
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={handleStart}
                >
                    <Feather
                        name="chevron-right"
                        style={styles.buttonIcon}
                    />

                </TouchableOpacity>

            </View>
        </SafeAreaView >
    )
}

//View Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 34,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
    },
    buttonIcon: {
        fontSize: 32,
        color: colors.white,
    },
    image: {
        height: Dimensions.get('screen').width * 0.7
    },



})