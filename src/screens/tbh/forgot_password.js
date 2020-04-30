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

class ForgotPasswordView extends Component {

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
        if (viewId === 'login') {
            if (signInFlag === 'email') {
                if (this.state.email && this.state.password) {
                    this.setState({ showLoading: true })
                    // this.handleLogin();
                } else {
                    Alert.alert("Enter email and password!");
                }
            }
        } else if (viewId === 'signin_phone') {
            navigate('PhoneAuth');
        } else if (viewId === 'restore_password') {
            navigate('ResetPassword');
        } else {
            navigate('SignUp');
        }
    };

    render() {
        return (
            <View style={styles.container}>

                <Image style={styles.bgImage} source={bgone} />

                <LogoComponent />

                <TopTextComponent text={'Forgot Your Password?'} />

                <View style={{ marginTop: 40 }} >
                    <InputFieldComponent placeholder={'Email'} secureTextEntry={false} keyboardType={'email-address'} onChangeText={this.onChangeText} />
                </View>
                <ButtonComponent btnText={'EMAIL LINK'} onClickListener={this.onClickListener} />

                <View style={styles.bottomTextView}>
                    <Text style={styles.bottomText}>
                        *If the provided email account is registered
                        with us, we'll send a reset password link to
                        the provided email address
                    </Text>
                </View>

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
    activity: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomTextView: {
        // backgroundColor: 'red',
        marginVertical: 40,
        maxWidth: 350,
    },
    loginTextView: {
        marginTop: 0
    },
    loginTextup: {
        color: 'white',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 30,
    },
    loginText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 25,
        color: '#ffff'
    },
    bottomText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 17,
        color: '#ffff'
    },
    crtAcntText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#ffff'
    },
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
        // position: 'relative',
        justifyContent: 'center',
        resizeMode: 'contain',
        maxWidth: 300
    },
    bgImage: {
        flex: 1,
        resizeMode,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
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
    },
    buttonContainer: {
        height: 71,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 304,
        borderRadius: 5,
    },
    loginButton: {
        backgroundColor: "#131f20",
    }
});

export default (ForgotPasswordView);
