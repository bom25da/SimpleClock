import React, { Component, useState, useEffect } from 'react';
import { Image, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
//import Clock from './src/Clock/Clock_Type1.js';
import Clock from './Clock/Clock.js';
import Weather from './Weather/Weather.js';
import Dday from './Dday/Dday.js';
//import KwCalendar from './src/Calendar/Calendar.js';


const Main = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <View style = {styles.top}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Setting')}>
                    <Image
                        source={require('../assets/images/setting/setting.png')}
                        resizeMode='center'
                        style={{width: 30, height: 30, margin: 10}} />
                </TouchableOpacity>
            </View>
            <View style = {styles.clock}>
                <Clock></Clock>
            </View>
            <View style = {styles.dDay}>
                <Dday></Dday>
            </View>
            <View style = {styles.weather}>
                <Weather></Weather>
            </View>
            <View style = {styles.wiseSaying}>
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
        flex: 0.05,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        //alignItems:'center'
        //backgroundColor: 'red',
    },

    clock: {
        flex: 0.35,
        marginTop: 10,
        //backgroundColor: 'green',
    },

    dDay: {
        flex: 0.1,
        //backgroundColor: 'red',
        justifyContent: 'center',
    },

    weather: {
        flex: 0.4,
        //backgroundColor: 'red',
        justifyContent: 'center',
    },

    wiseSaying: {
        flex: 0.1,
        //backgroundColor: 'red',
        justifyContent: 'center',
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        marginBottom: 30,
    }
})

export default Main