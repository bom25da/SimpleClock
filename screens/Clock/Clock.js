import React, { Component, useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Svg, Line, Circle} from 'react-native-svg';
import moment from 'moment';
import "moment/locale/ko";
import {timeState, clockCodeState} from '../../state.js';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil'
import styles from './_styles'

const Clock = () => {
    const [time, setTime]=useRecoilState(timeState)
    let ClockType = useRecoilValue(clockCodeState)

    function refreshClock() {
        setTime(moment());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    function DigitalClock() {
        return(
            <View style = {styles.container}>
                <View style = {styles.top}>
                    <Text style={styles.dctext_date}>{time.format('MM/DD(ddd)')}</Text>
                </View>
                <View style = {styles.bottom}>
                    <Text style={styles.dctext_time}>{time.format('hhmm')}</Text>
                </View>
            </View>
        )
    }

    function AnalogClock()
    {
        return (
            <View style={styles.left}>

                <Text style={styles.actext_time}>
                    {time.format('MM월 DD일 (ddd)')}
                </Text>

                <Svg height="200" width="200">
                    <Circle
                        cx="100"
                        cy="100"
                        r="90"
                        stroke="#ffffff"
                        strokeWidth="3"
                    >
                    </Circle>

                    {/* 초침 */}
                    <Line
                        x1="100"
                        y1="100"
                        x2={100 + Math.cos(((Math.PI / 180) * (360/60 * time.second() - 90)))*70}
                        y2={100 + Math.sin(((Math.PI / 180) * (360/60 * time.second() - 90)))*70}
                        stroke="#ffffff"
                        strokeWidth="2"
                    >
                    </Line>

                    {/* 분침 */}
                    <Line
                        x1="100"
                        y1="100"
                        x2={100 + Math.cos(((Math.PI / 180) * (360/60 * time.minute() - 90)))*75}
                        y2={100 + Math.sin(((Math.PI / 180) * (360/60 * time.minute() - 90)))*75}
                        stroke="#ffffff"
                        strokeWidth="2"
                    >
                    </Line>

                    {/* 시침 */}
                    <Line
                        x1="100"
                        y1="100"
                        x2={100 + Math.cos(((Math.PI / 180) * (360/12 * (time.hours()>12 ? time.hours()-12 : time.hours()) + (360/12/60 * time.minute()) - 90)))*65}
                        y2={100 + Math.sin(((Math.PI / 180) * (360/12 * (time.hours()>12 ? time.hours()-12 : time.hours()) + (360/12/60 * time.minute()) - 90)))*65}
                        stroke="#ffffff"
                        strokeWidth="2"
                    >
                    </Line>
                </Svg>
                
            </View>           
            
        )
    }

    //console.log({ClockType})

    if(ClockType == 'digital') {
        return(
            <View style = {styles.container}>
                <DigitalClock></DigitalClock>
            </View>
        )
    } else {
        return(
            <View style = {styles.container}>
                <AnalogClock></AnalogClock>
            </View>
        )
    }
}

export default Clock