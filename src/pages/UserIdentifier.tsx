import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

//Components
import { Button } from '../components/Button';

//Styles
import colors from '../styles/colors';
import fonts from '../styles/fonts';

//View
export function UserIdentifier() {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    function handleInputFocus() {
        setIsFocused(true);
    };

    function handleInputBlur() {
        setIsFocused(false);
    };

    function handleInputChange(value: string) {
        setName(value);
        setIsFilled(!!value);
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.content}>
                    <View style={styles.form}>
                        <View style={styles.header}>
                            <Text style={styles.emoji}>
                                {isFilled ? '😄' : '😀'}
                            </Text>
                            <Text style={styles.title}>
                                Como podemos {'\n'}
                                chamar você?
                            </Text>
                        </View>
                        <TextInput
                            style={[
                                styles.input,
                                (isFocused || isFilled) &&
                                { borderColor: colors.green }
                            ]}
                            placeholder='Digite um nome'
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            onChangeText={handleInputChange}
                        />
                        <View style={styles.footer}>
                            <Button />
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

//View Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content: {
        flex: 1,
        width: '100%',
    },
    emoji: {
        fontSize: 44,
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 54,
    },
    header: {
        alignItems: 'center',
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20,
    },
    footer: {
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 20,
    },
});