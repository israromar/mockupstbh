import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    ScrollView,
    Image,
    Alert,
    ActivityIndicator,
    CheckBox
} from 'react-native';
// import colors from '../../styles/colors';
import LogoComponent from './logo';
import TopTextComponent from './topText';
import InputFieldComponent from './input_fields';
import ButtonComponent from './button';
import bgone from '../../assets/images/background.png';

class SignUpPatient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false,
            isSelected: false,
            showLoading: false,
            isLoginInitiated: false,
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
            navigate('ForgotPassword');
        } else {
            navigate('SignUp');
        }
    };

    onChangeText = (val) => {
        console.log('value:', val)
    }
    setSelection = () => {
        this.setState((prevState) => {
            return { isSelected: !prevState.isSelected }
        })
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image style={styles.bgImage} source={bgone} />
                    <LogoComponent />
                    <View style={{ marginTop: -55 }}>
                        <TopTextComponent text={'Start Your Free Emotional Assessment'} />
                    </View>

                    <View style={{ marginTop: 10 }} >
                        <InputFieldComponent placeholder={'Email'} secureTextEntry={false} keyboardType={'email-address'} onChangeText={this.onChangeText} />
                        <InputFieldComponent placeholder={'Phone Number'} secureTextEntry={true} keyboardType={'phone-pad'} onChangeText={this.onChangeText} />
                        <InputFieldComponent placeholder={'Password'} secureTextEntry={true} keyboardType={'email-address'} onChangeText={this.onChangeText} />
                        <InputFieldComponent placeholder={'Confirm Password'} secureTextEntry={true} keyboardType={'email-address'} onChangeText={this.onChangeText} />
                    </View>

                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={this.state.isSelected}
                            onValueChange={this.setSelection}
                            style={styles.checkbox}
                        />
                        <Text style={styles.label}>
                            I consent to receive SMS messages regarding
                            my treatment plan, as well as updates regarding
                            MindNest’s products & services (message and
                            data rates may apply).
                        </Text>
                    </View>
                    <View style={{ marginBottom: 20 }} >
                        <ButtonComponent btnText={'GET STARTED'} onClickListener={this.onClickListener} />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const resizeMode = 'cover';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        maxWidth: 350,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
        color: '#ffff',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        textAlign: 'auto'
    },
    bgImage: {
        flex: 1,
        resizeMode,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    }
});

export default (SignUpPatient);
