/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform
} from 'react-native';
import ArrowIcon from '../../../assets/images/arrows.svg';

export default class Header extends Component {
    render() {
        return (
            <View
                style={[{
                    height: 55,
                    marginTop: Platform.OS == "ios" ? 20 : 0,
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
                            <ArrowIcon fill={"#ffff"} width={40} height={35} />
                            <View style={{
                                marginVertical: 2
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
})