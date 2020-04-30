import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native';

const ButtonComponent = (props) => {
    return (
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => props.onClickListener('login', 'email')}>
            <Text style={styles.loginText}>{props.btnText}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    loginText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 25,
        color: '#ffff'
    },
    buttonContainer: {
        height: 71,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 304,
        borderRadius: 5
    },
    loginButton: {
        backgroundColor: "#131f20",
    }
});

export default (ButtonComponent);
