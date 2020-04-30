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
            navigate('SignUpProviderFive');
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
                        <TopTextComponent text={'Signup With Mindnest'} />
                    </View>
                    <View style={{ marginTop: 30 }} >
                        <InputFieldComponent placeholder={'Address Line 1'} secureTextEntry={false} keyboardType={'default'} onChangeText={this.onChangeText} />
                        <InputFieldComponent placeholder={'Address Line 2'} secureTextEntry={true} keyboardType={'default'} onChangeText={this.onChangeText} />
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.inputs}
                                    placeholder={'State'}
                                    keyboardType={'default'}
                                    onChangeText={this.onChangeText}
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.inputs}
                                    placeholder={'City'}
                                    keyboardType={'default'}
                                    onChangeText={this.onChangeText}
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                        </View>
                        <InputFieldComponent placeholder={'Zip Code'} secureTextEntry={true} keyboardType={'default'} onChangeText={this.onChangeText} />
                    </View>

                    <View>
                        <Text>*Please provide your billing address</Text>
                    </View>

                    <TouchableOpacity style={styles.nextTextView} onPress={() => this.onClickListener('next')}>
                        <Text style={styles.nextText}>NEXT ></Text>
                    </TouchableOpacity>
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
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginHorizontal: 1,
        borderBottomWidth: 1,
        width: 150,
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
        marginLeft: 0,
        borderBottomColor: '#FFFFFF',
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        maxWidth: 350,
    },
    checkbox: {
        alignSelf: "center",
    },
    nextText: {
        color: '#ffff',
        fontSize: 25,
        fontWeight: 'bold'
    },
    nextTextView: {
        top: 30,
        height: 113
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
        // justifyContent: 'center',
    }
});

export default (SignUpProvider);
