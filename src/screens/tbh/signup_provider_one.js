import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    TouchableOpacity,
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
import avatar from '../../assets/images/man.png';
import pen from '../../assets/images/edit.png';

class SignUpProviderOne extends Component {

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

    onClickListener = async (viewId, signInFlag) => {
        const { navigate } = this.props.navigation;
        if (viewId === 'next') {
            navigate('SignUpProviderTwo');
        }
    };

    onChangeText = (val) => {
        console.log('value:', val)
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.bgImage} source={bgone} />
                <View style={{ marginTop: -140 }} >
                    <LogoComponent />
                </View>
                <View style={{ marginTop: -40 }} >
                    <TopTextComponent text={'Signup With Mindnest'} />
                </View>

                <View style={styles.avatarView}>
                    <Image style={styles.avatar} source={avatar} />
                </View>

                <TouchableOpacity style={styles.avtTextView} onPress={() => this.onClickListener('register')}>
                    <Image style={styles.editIcon} source={pen} />
                    <Text style={styles.editText}>CHOOSE AN AVATAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.nextTextView} onPress={() => this.onClickListener('next')}>
                    <Text style={styles.nextText}>NEXT ></Text>
                    {/* <Image style={styles.nextIcon} source={pen} /> */}
                </TouchableOpacity>

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
    editText: {
        fontSize: 17,
        marginLeft: 10,
        color: '#022533'
    },
    nextText: {
        color: '#ffff',
        fontSize: 25,
        fontWeight: 'bold'
    },
    nextTextView: {
        top: 100,
    },
    avatarView: {
        display: 'flex',
        position: 'relative',
        maxWidth: 234,
        maxHeight: 234,
        borderRadius: 234 / 2,
        top: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    avatar: {
        display: 'flex',
        // position: 'relative',
        justifyContent: 'center',
        resizeMode: 'contain',
        maxWidth: 200
    },
    avtTextView: {
        top: 40,
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bgImage: {
        flex: 1,
        resizeMode,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    editIcon: {
        maxWidth: 28.14,
        height: 34
    }
});

export default (SignUpProviderOne);
