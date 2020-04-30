import React from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';

const InputField = (props) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder={props.placeholder}
                keyboardType={props.keyboardType}
                onChangeText={props.onChangeText}
                secureTextEntry={props.secureTextEntry}
                underlineColorAndroid='transparent'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        borderBottomWidth: 1,
        width: 304,
        height: 71,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        flex: 1,
        fontFamily: 'Roboto',
        fontSize: 22,
        fontWeight: 'normal',
        marginLeft: 10,
        borderBottomColor: '#FFFFFF',
    }
});

export default (InputField);
