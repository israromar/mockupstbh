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
    CheckBox,
    Switch
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
            switchValueOne: false,
            switchValueTwo: false,
            isLoginInitiated: false,
        }
    };

    toggleSwitch = (val) => {
        if (val === 'p1') {
            this.setState((prevState) => {
                return { switchValueOne: !prevState.switchValueOne }
            })
        } else {
            this.setState((prevState) => {
                return { switchValueTwo: !prevState.switchValueTwo }
            })
        }
    }

    onClickListener = async (viewId) => {
        const { navigate } = this.props.navigation;
        navigate('SignIn');
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
                        <InputFieldComponent placeholder={'Company/Practice'} secureTextEntry={false} keyboardType={'default'} onChangeText={this.onChangeText} />
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start'
                        }}>
                            <View style={[styles.inputContainerOne]}>
                                <TextInput style={styles.inputs}
                                    placeholder={'NPI'}
                                    keyboardType={'number-pad'}
                                    onChangeText={this.onChangeText}
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            <View style={styles.inputContainerTwo}>
                                <TextInput style={styles.inputs}
                                    placeholder={'Min'}
                                    keyboardType={'number-pad'}
                                    onChangeText={this.onChangeText}
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            <View style={styles.inputContainerThree}>
                                <TextInput style={styles.inputs}
                                    placeholder={'Max'}
                                    keyboardType={'number-pad'}
                                    onChangeText={this.onChangeText}
                                    underlineColorAndroid='transparent'
                                />
                            </View>

                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10, marginTop: -10 }}>
                            <Text style={{ color: '#ffff' }}>*NPI</Text>
                            <Text style={{ color: '#ffff' }}>*Age</Text>
                        </View>
                        <InputFieldComponent placeholder={'Specializations'} secureTextEntry={false} keyboardType={'default'} onChangeText={this.onChangeText} />
                        <InputFieldComponent placeholder={'Insurance Companies'} secureTextEntry={false} keyboardType={'default'} onChangeText={this.onChangeText} />
                        <InputFieldComponent placeholder={'Conditions'} secureTextEntry={false} keyboardType={'default'} onChangeText={this.onChangeText} />

                        <View style={styles.toggleBtnContainer}>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.toggleText}>Allow multiple numbers</Text>
                                <Switch
                                    style={{ width: 30 }}
                                    onValueChange={() => this.toggleSwitch('p1')}
                                    value={this.state.switchValueOne} />
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.toggleText}>Allow admins nurses to schedule emergency appointments</Text>
                                <Switch
                                    style={{ width: 30 }}
                                    onValueChange={() => this.toggleSwitch('p2')}
                                    value={this.state.switchValueTwo} />
                            </View>
                        </View>
                        <InputFieldComponent placeholder={'Initial Appointment Time'} secureTextEntry={false} keyboardType={'default'} onChangeText={this.onChangeText} />
                        <InputFieldComponent placeholder={'Follow up Appointment Time'} secureTextEntry={false} keyboardType={'default'} onChangeText={this.onChangeText} />
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                value={this.state.isSelected}
                                onValueChange={this.setSelection}
                                style={styles.checkbox}
                            />
                            <Text style={styles.label}>
                                I agree to Terms of service & Privacy Policy
                        </Text>
                        </View>
                    </View>
                    <View style={{ marginVertical: 20 }}>
                        <ButtonComponent btnText={'REGISTER'} onClickListener={this.onClickListener} />
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
    inputContainerOne: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginHorizontal: 1,
        borderBottomWidth: 1,
        width: 150,
        height: 71,
        marginBottom: 20,
        // flexDirection: 'row',
        // alignItems: 'center'
    },
    inputContainerTwo: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginHorizontal: 1,
        borderBottomWidth: 1,
        width: 80,
        height: 71,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputContainerThree: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginHorizontal: 1,
        borderBottomWidth: 1,
        width: 69,
        height: 71,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
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
    toggleBtnContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 300,
        marginBottom: 20
    },
    toggleText: {
        color: '#ffff', fontSize: 17, width: 270
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
        fontSize: 13,
        textAlign: 'auto',
        // width: 304,
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
