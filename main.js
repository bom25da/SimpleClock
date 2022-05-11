import React, { Component, useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
//import Clock from './src/Clock/Clock_Type1.js';
import Clock from './screens/Clock/Clock.js';
import Weather from './screens/Weather/Weather.js';
//import KwCalendar from './src/Calendar/Calendar.js';

const App = () => {
    return(
        <View style = {styles.container}>
            <View style = {styles.top}>
            </View>
            <View style = {styles.center}>
                <Clock></Clock>
            </View>
            <View style = {styles.bottom}>
                <Weather></Weather>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },

    top: {
        marginTop: 10,
        flex: 0.1,
        flexDirection: 'row',
        //alignItems:'center'
        //backgroundColor: 'red',
    },

    center: {
        flex: 0.5,
        marginTop: 10,
        //backgroundColor: 'green',
    },

    bottom: {
        flex: 0.7,
        //backgroundColor: 'red',
        justifyContent: 'center',
    },
})

export default App