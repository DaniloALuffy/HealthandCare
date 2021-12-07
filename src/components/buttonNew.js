import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

export function ButtonNew({ size, color, focused }) {
    return(
        <View style={[styles.container, { backgroundColor: focused ? '#a04ced' : '#bd75ff' } ]}>
            <Fontisto name="pills" size={size} color={focused ? '#f8f8f8' : '#e8e8e8'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
})