import React from 'react';

import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

const Search = (props) => (
    <View style={styles.container}>
        <Icon name='search' size={16} color='gray' style={styles.icon}/>
        <TextInput style={styles.input}
        placeholder="Search"
        onChangeText={props.onSearch}
        // placeholderTextColor="white"
        />
    </View>
);

export default Search;