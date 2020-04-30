/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ProfileScreen from './profile/profile';
import WelcomeScreen from './welcome/welcome';
import ScanScreen from './qrcode_scanner/qrcode-scanner';
import Loginscreen from './tbh/loginscreen';
import SignInScreen from './tbh/signin';
import ForgotPasswordScreen from './tbh/forgot_password';
import SignUpScreen from './tbh/signup';
import SignUpPatientScreen from './tbh/signup_patient';
import SignUpProviderOneScreen from './tbh/signup_provider_one';
import SignUpProviderTwoScreen from './tbh/signup_provider_two';
import SignUpProviderThreeScreen from './tbh/signup_provider_three';
import SignUpProviderFourScreen from './tbh/signup_provider_four';
import SignUpProviderFiveScreen from './tbh/signup_provider_five';

const MainNavigator = createStackNavigator({
    SignIn: {
        screen: SignInScreen,
        navigationOptions: {
            // title: 'Reset Password',
            headerShown: false,
        }
    },
    ForgotPassword: {
        screen: ForgotPasswordScreen,
        navigationOptions: {
            headerShown: true,
            title: 'BACK TO LOGIN'
        }
    },
    SignUp: {
        screen: SignUpScreen,
        navigationOptions: {
            title: 'LOGIN',
            headerShown: true,
            headerBackTitle: 'eeee'
        }
    },
    SignUpPatient: {
        screen: SignUpPatientScreen,
        navigationOptions: {
            headerShown: true,
            title: 'ALREADY REGISTERED'
        }
    },
    SignUpProviderOne: {
        screen: SignUpProviderOneScreen,
        navigationOptions: {
            headerShown: true,
            title: 'ALREADY REGISTERED'
        }
    },
    SignUpProviderTwo: {
        screen: SignUpProviderTwoScreen,
        navigationOptions: {
            headerShown: true,
            title: 'SELECT AN AVATAR'
        }
    },
    SignUpProviderThree: {
        screen: SignUpProviderThreeScreen,
        navigationOptions: {
            headerShown: true,
            title: 'PERSONAL INFORMATION'
        }
    },
    SignUpProviderFour: {
        screen: SignUpProviderFourScreen,
        navigationOptions: {
            headerShown: true,
            title: 'LOGIN INFORMATION'
        }
    },
    SignUpProviderFive: {
        screen: SignUpProviderFiveScreen,
        navigationOptions: {
            headerShown: true,
            title: 'BILLING INFORMATION'
        }
    },
    Welcome: { screen: WelcomeScreen },
    Profile: { screen: ProfileScreen },
    ScanQRCode: { screen: ScanScreen },
    LoginScreen: { screen: Loginscreen },
});

const RootStack = createAppContainer(MainNavigator);
export default RootStack;
