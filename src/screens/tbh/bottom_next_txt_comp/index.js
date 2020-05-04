import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import NextIcon from '../../../assets/images/next.svg';

const NextTextComp = (props) => {
    const styles = StyleSheet.create({
        nextTextView: {
            top: props.top ? props.top : 0,
        },
        nextText: {
            color: '#ffff',
            fontSize: 25,
            fontWeight: 'bold'
        },
    })

    return <TouchableOpacity style={styles.nextTextView} onPress={() => props.onClickListener('next')}>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }} >
            <Text style={styles.nextText}>NEXT</Text>
            <NextIcon fill={"#ffff"} width={30} height={20} />
        </View>
    </TouchableOpacity>
}
export default NextTextComp;
