import React, {Fragment} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    StatusBar,
    TouchableOpacity
} from 'react-native';

class Profile extends React.Component {
    static navigationOptions = {
        title: 'Profile',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Button
                title="Go to Settings"
                onPress={() => navigate('Profile', {name: 'Jane'})}
            />
        );
    }
}
export default Profile;