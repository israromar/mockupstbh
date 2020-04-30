import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';
import logo from '../../../assets/images/mindnest.png';

class LogoComponent extends Component {
    render() {
        return (
            <View style={styles.logoDiv}>
                <Image style={styles.logo} source={logo} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    logoDiv: {
        display: 'flex',
        position: 'relative',
        maxHeight: 250,
        margin: 0,
        padding: 0,
        top: -20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        display: 'flex',
        justifyContent: 'center',
        resizeMode: 'contain',
        maxWidth: 300
    },
});

export default (LogoComponent);
