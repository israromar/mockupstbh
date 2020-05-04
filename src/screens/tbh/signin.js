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

class LoginView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false,
            showLoading: false,
            isLoginInitiated: false,
        }
    };

    onClickListener = async (viewId) => {
        const { navigate } = this.props.navigation;
        if (viewId === 'login') { }
        else if (viewId === 'restore_password') {
            navigate('ForgotPassword');
        } else {
            navigate('SignUp');
        }
    };

    onChangeText = (val) => {
        console.log('value:', val)
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.showLoading &&
                    <View style={styles.activity}>
                        <View style={{
                            display: 'flex', alignItems: 'center', borderRadius: 10, position: 'absolute', zIndex: 1,
                            justifyContent: 'center', width: 250, height: 150, backgroundColor: 'grey', opacity: 0.9
                        }}>
                            <ActivityIndicator Text="loading" size="large" color="white" />
                            <Text style={{ color: 'white', marginTop: 15 }}>Signing in...</Text>
                        </View>
                    </View>
                }
                <Image style={styles.bgImage} source={bgone} />

                <LogoComponent />

                <TopTextComponent text={'Log in to your Account'} />

                <View style={{ marginTop: 40 }} >
                    <InputFieldComponent placeholder={'Email'} secureTextEntry={false} keyboardType={'email-address'} onChangeText={this.onChangeText} />
                    <InputFieldComponent placeholder={'Password'} secureTextEntry={true} keyboardType={'default'} onChangeText={this.onChangeText} />
                </View>

                <ButtonComponent btnText={'LOGIN'} onClickListener={() => this.onClickListener('login')} />

                <TouchableHighlight style={styles.buttonContainer}
                    onPress={() => this.onClickListener('restore_password')}>
                    <Text style={styles.forgotPsdText}>Forgot Password?</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
                    <Text style={styles.crtAcntText}>Create A New Account</Text>
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
        alignItems: 'center',
        // backgroundColor: '#DCDCDC',
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
    forgotPsdText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
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

export default (LoginView);
