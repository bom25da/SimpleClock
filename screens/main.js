import React, { Component, useState, useEffect } from 'react';
import { Image, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
//import Clock from './src/Clock/Clock_Type1.js';
import Clock from './Clock/clock.js';
import Weather from './Weather/weather.js';
import Dday from './Dday/dDay.js';
import Analects from './Analects/analects.js';
//import KwCalendar from './src/Calendar/Calendar.js';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
//import Orientation from 'react-native-orientation-locker';
//import { useIsFocused } from '@react-navigation/native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

const Main = ({navigation}) => {
    const { landscape } = useDeviceOrientation();
    //const isFocused = useIsFocused();

    
    useEffect( () => {
        return changeNavigationBarColor('#000000', true);
    },[]);
    

    {if(!landscape) {
        return(
            <View style = {vStyles.container}>
                <View style = {vStyles.top}>
                    <TouchableOpacity
                        style={vStyles.button}
                        onPress={() => navigation.navigate('Setting')}>
                        <Image
                            source={require('../assets/images/setting/setting.png')}
                            resizeMode='center'
                            style={{width: 30, height: 30, margin: 10}} />
                    </TouchableOpacity>
                </View>
                <View style = {vStyles.clock}>
                    <Clock></Clock>
                </View>
                <View style = {vStyles.dDay}>
                    <Dday></Dday>
                </View>
                <View style = {vStyles.weather}>
                    <Weather></Weather>
                </View>
                <View style = {vStyles.wiseSaying}>
                    <Analects></Analects>
                </View>
            </View>
            )
    }
    else {
        return(
            <View style = {hStyles.container}>
                <View style = {hStyles.top}>
                    <TouchableOpacity
                        style={hStyles.button}
                        onPress={() => navigation.navigate('Setting')}>
                        <Image
                            source={require('../assets/images/setting/setting.png')}
                            resizeMode='center'
                            style={{width: 30, height: 30, margin: 10}} />
                    </TouchableOpacity>
                </View>
                <View style = {hStyles.bottom}>
                    <View style = {hStyles.bottom_left}>
                        <View style = {hStyles.clock}>
                            <Clock></Clock>
                        </View>
                        <View style = {hStyles.dDay}>
                            <Dday></Dday>
                        </View>
                    </View>
                    <View style = {hStyles.bottom_right}>
                        <View style = {hStyles.weather}>
                            <Weather></Weather>
                        </View>
                        <View style = {hStyles.wiseSaying}>
                            <Analects></Analects>
                        </View>
                    </View>
                </View>
            </View>
        )
    }}
};

const vStyles = StyleSheet.create({
    
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

const hStyles = StyleSheet.create({
    
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

    bottom: {
        flex: 0.95,
        flexDirection: 'row'
    },

    bottom_left: {
        flex: 0.5
    },

    bottom_right: {
        flex: 0.5
    },

    clock: {
        flex: 0.7,
        marginTop: 10,
        //backgroundColor: 'green',
    },

    dDay: {
        flex: 0.2,
        //backgroundColor: 'red',
        justifyContent: 'center',
    },

    weather: {
        flex: 0.8,
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