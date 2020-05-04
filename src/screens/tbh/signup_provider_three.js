import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    TouchableOpacity,
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
import NextTextComponent from './bottom_next_txt_comp';
import bgone from '../../assets/images/background.png';

class SignUpProvider extends Component {

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
        if (viewId === 'next') {
            navigate('SignUpProviderFour');
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
            <View style={styles.container}>
                <Image style={styles.bgImage} source={bgone} />
                <LogoComponent />
                <View style={{ marginTop: -55 }}>
                    <TopTextComponent text={'Signup With Mindnest'} />
                </View>
                <View style={{ marginTop: 30 }} >
                    <InputFieldComponent placeholder={'Email'} secureTextEntry={false} keyboardType={'default'} onChangeText={this.onChangeText} />
                    <InputFieldComponent placeholder={'Password'} secureTextEntry={true} keyboardType={'default'} onChangeText={this.onChangeText} />
                    <InputFieldComponent placeholder={'Confirm Password'} secureTextEntry={true} keyboardType={'default'} onChangeText={this.onChangeText} />
                </View>
                <NextTextComponent top={20} onClickListener={this.onClickListener} />
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
        backgroundColor: 'red'
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
        // width: '100%',
        // height: '100%',
        // justifyContent: 'center',
    }
});

export default (SignUpProvider);
