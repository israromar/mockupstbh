//import liraries
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { BadgeIcon, Cancel } from '../../assets';
import colors from '../../styles/colors';
import Button from '../../components/button';
// create a component
const CertificateValidation = ({ isHashValid, isCertValid, serverRespMsg, _onPressButton }) => {
    return (
        <View style={styles.container}>
            {isCertValid && !isHashValid ?
                <View style={styles.badgeView}>
                    <BadgeIcon style={styles.sectionTitle} />
                    <TouchableOpacity>
                        <Text style={styles.sectionTitle}>{serverRespMsg}</Text>
                    </TouchableOpacity>
                    <View style={styles.buttonContainer}>
                        <Button btnType={'default'} btnText={'Home'} btnFlag={'home'} _onPressButton={_onPressButton} />
                    </View>
                </View>
                : !isCertValid && !isHashValid &&
                <View style={styles.badgeView}>
                    <Cancel fill={colors.red} width={140} height={140} style={styles.sectionTitle} />
                    <TouchableOpacity>
                        <Text style={styles.sectionTitle}>{serverRespMsg}</Text>
                    </TouchableOpacity>
                    <View style={styles.bottomContainer}>
                        <Button btnType={'default'} btnText={'Try Again'} btnFlag={'scan_again'} _onPressButton={_onPressButton} />
                        <Button btnType={'default'} btnText={'Cancel'} btnFlag={'cancel'} _onPressButton={_onPressButton} />
                    </View>
                </View>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    titleText: {
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: 20,
        color: colors.red
    },
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        marginTop: 50
    },
    scrollView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        width: '100%',
        alignItems: 'center',
        height: '100%'
    },
    badgeView: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        width: '100%',
        alignItems: 'center',
        height: '100%'
    },
    buttonContainer: {
        margin: 7,
        flex: 1,
        justifyContent: 'flex-end'
    },
    button: {
        backgroundColor: colors.blue,
        height: 45,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: 8,
        marginRight: 8
    },

    btnText: {
        color: colors.white
    },
    badgeView: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'stretch',
        width: '100%',
        marginBottom: 30,
        marginTop: 30

    },
    sectionTitle: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'stretch',
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
        marginBottom: 30
    }
});


//make this component available to the app
export default CertificateValidation;
