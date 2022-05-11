import React, { Component, useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Svg, Line, Circle} from 'react-native-svg';
import moment from 'moment';
import "moment/locale/ko";

const Clock = () => {
    const [time, setTime]=useState(moment());

    function refreshClock() {
        setTime(moment());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    return(
        <View style = {styles.container}>
            <View style = {styles.top}>
                <Text style={styles.dctext_date}>{time.format('MM/DD(ddd)')}</Text>
            </View>
            <View style = {styles.bottom}>
                <Text style={styles.dctext_time}>{time.format('hhmm')}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    // layout
    container: {
        flex: 1,
        //backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },

    top: {
        flex: 0.2,
        //backgroundColor: 'green',
        justifyContent: 'center',
    },

    bottom: {
        flex: 0.6,
        //backgroundColor: 'red',
        justifyContent: 'center',
    },

    // Text
    dctext_date: {
        fontSize: 40,
        color: 'white',
        alignItems: 'center',
        fontFamily: 'YUniverse-L',
    },

    dctext_time: {
        fontSize: 170,
        color: 'white',
        alignItems: 'center',
        fontFamily: 'YUniverse-L',
    },
})

export default Clock