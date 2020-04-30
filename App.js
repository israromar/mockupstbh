import React, { Component } from 'react';

import {View, ScrollView, StyleSheet, StatusBar} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import Icon from "react-native-vector-icons/Feather";
import colors from "./src/styles/colors";
import FlashMessage, {renderFlashMessageIcon} from "react-native-flash-message";

import AppNavigation from "./src/screens/app-navigation";

class App extends Component {
    
    componentDidMount() {
        //SplashScreen.hide();
    }

    static renderFlashMessageIcon(icon = 'success', style = {}, customProps = {}) {
        switch (icon) {
            case 'success': // casting for your custom icons and render then
                return (
                    <View
                        style={{
                            marginTop: -1,
                            marginRight: 13,
                            width: 21, // thats the recomended size of icons
                            height: 21, // thats the recomended size of icons
                        }}>
                        <Icon
                            name="check"
                            color="#ffffff"
                            size={21} // thats the recomended size of icons
                        />
                    </View>
                );
            case 'error':
                return (
                    <View
                        style={{
                            marginTop: -1,
                            marginRight: 13,
                            width: 21, // thats the recomended size of icons
                            height: 21, // thats the recomended size of icons
                        }}>
                        <Icon
                            name="alert-circle"
                            color="#ffffff"
                            size={21} // thats the recomended size of icons
                        />
                    </View>
                );
            default:
                // if not a custom icon render the default ones...
                return renderFlashMessageIcon(icon, style, customProps);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.appStatusBarColor} barStyle={'dark-content'}/>
                    <AppNavigation />
                <FlashMessage renderFlashMessageIcon={App.renderFlashMessageIcon.bind(this)} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default App;
