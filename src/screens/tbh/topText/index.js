import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const TopTextComponent = (props) => {
    return (
        <View style={styles.loginTextView}>
            <Text style={styles.loginTextup}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    loginTextView: {
        marginTop: 0,
        maxWidth: 340,
    },
    loginTextup: {
        color: 'white',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 27,
        textAlign: 'center'
    }
});

export default (TopTextComponent);
