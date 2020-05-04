/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignInScreen from './tbh/signin';
import ForgotPasswordScreen from './tbh/forgot_password';
import SignUpScreen from './tbh/signup';
import SignUpPatientScreen from './tbh/signup_patient';
import SignUpProviderOneScreen from './tbh/signup_provider_one';
import SignUpProviderTwoScreen from './tbh/signup_provider_two';
import SignUpProviderThreeScreen from './tbh/signup_provider_three';
import SignUpProviderFourScreen from './tbh/signup_provider_four';
import SignUpProviderFiveScreen from './tbh/signup_provider_five';
// import Header from './tbh/custom_header';

import ArrowIcon from '../assets/images/arrows.svg';

class Header extends Component {
    render() {
        return (
            <View
                style={[{
                    height: 55,
                    backgroundColor: '#011f22'
                }]}
            >
                <View style={[{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginTop: 10
                }]}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <ArrowIcon fill={"#ffff"} width={40} height={35} />
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontFamily: 'Roboto',
                                    fontStyle: 'normal',
                                    fontWeight: 'bold',
                                    fontSize: 18,
                                    color: '#ffff',
                                    textAlign: 'justify'
                                }}>{this.props.HederText}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const MainNavigator = createStackNavigator({
    SignIn: {
        screen: SignInScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    SignUp: {
        screen: SignUpScreen,
        navigationOptions: ({ navigation }) => ({
            headerShown: true,
            header: () => <Header HederText={'LOGIN'} navigation={navigation} />,
        })
    },
    ForgotPassword: {
        screen: ForgotPasswordScreen,
        navigationOptions: ({ navigation }) => ({
            headerShown: true,
            header: () => <Header HederText={'BACK TO LOGIN'} navigation={navigation} />,
        })
    },
    SignUpPatient: {
        screen: SignUpPatientScreen,
        navigationOptions: ({ navigation }) => ({
            headerShown: true,
            header: () => <Header HederText={'ALREADY REGISTERED'} navigation={navigation} />,
        })
    },
    SignUpProviderOne: {
        screen: SignUpProviderOneScreen,
        navigationOptions: ({ navigation }) => ({
            headerShown: true,
            header: () => <Header HederText={'ALREADY REGISTERED'} navigation={navigation} />,
        })
    },
    SignUpProviderTwo: {
        screen: SignUpProviderTwoScreen,
        navigationOptions: ({ navigation }) => ({
            headerShown: true,
            header: () => <Header HederText={'SELECT AN AVATAR'} navigation={navigation} />,
        })
    },
    SignUpProviderThree: {
        screen: SignUpProviderThreeScreen,
        navigationOptions: ({ navigation }) => ({
            headerShown: true,
            header: () => <Header HederText={'PERSONAL NFORMATION'} navigation={navigation} />,
        })
    },
    SignUpProviderFour: {
        screen: SignUpProviderFourScreen,
        navigationOptions: ({ navigation }) => ({
            headerShown: true,
            header: () => <Header HederText={'LOGIN INFORMATION'} navigation={navigation} />,
        })
    },
    SignUpProviderFive: {
        screen: SignUpProviderFiveScreen,
        navigationOptions: ({ navigation }) => ({
            headerShown: true,
            header: () => <Header HederText={'BILLING INFORMATION'} navigation={navigation} />,
        })
    }
});

const RootStack = createAppContainer(MainNavigator);
export default RootStack;
