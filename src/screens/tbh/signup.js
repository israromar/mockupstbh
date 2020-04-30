import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    ActivityIndicator
} from 'react-native';
// import colors from '../../styles/colors';
import LogoComponent from './logo';
import TopTextComponent from './topText';
import InputFieldComponent from './input_fields';
import ButtonComponent from './button';

import bgone from '../../assets/images/background.png';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            email: '',
            password: '',
            isLoginInitiated: false,
            showLoading: false
        }
    };

    onClickListener = async (viewId, signInFlag) => {
        const { navigate } = this.props.navigation;
        if (viewId === 'patient') {
            navigate('SignUpPatient');
        } else {
            navigate('SignUpProviderOne');
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.bgImage} source={bgone} />
                <View style={{ backgroundColor: 'none', bottom: 100 }}>
                    <LogoComponent />
                </View>
                <View style={{ backgroundColor: 'none', bottom: 80 }}>
                    <TopTextComponent text={'Are You A'} />
                </View>

                <TouchableHighlight style={[styles.buttonContainer]}
                    onPress={() => this.onClickListener('patient')}>
                    <Text style={styles.btnText}>Patient</Text>
                </TouchableHighlight>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'none' }}>
                    <View style={{ width: 125, height: 1, backgroundColor: 'grey' }} />
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 50, height: 90 }}>
                        <Text style={styles.orText}>or</Text>
                    </View>
                    <View style={{ width: 125, height: 1, backgroundColor: 'grey' }} />
                </View>

                <TouchableHighlight style={[styles.buttonContainer]}
                    onPress={() => this.onClickListener('provider')}>
                    <Text style={styles.btnText}>Provider</Text>
                </TouchableHighlight>

            </View>
        );
    }
}

const resizeMode = 'cover';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    orText: {
        color: '#ffff',
        fontSize: 17
    },
    btnText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 25,
        color: '#ffff'
    },
    bgImage: {
        flex: 1,
        resizeMode,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    buttonContainer: {
        height: 71,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 304,
        borderRadius: 5,
        borderWidth: 0.2,
        borderColor: '#ffff',
        backgroundColor: "#131f20",
    }
});

export default (SignUp);
