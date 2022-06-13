import React, {useState, useEffect} from 'react'
import { Text, View, StyleSheet} from 'react-native';
import moment from 'moment';
import "moment/locale/ko";
import {remaingDayState, isDdayState, fontCodeState} from '../../state.js'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
    useRecoilRefresher_UNSTABLE,
} from 'recoil'
import { useIsFocused } from '@react-navigation/native';
import {styles, textStyles} from './_styles'

const Dday = () => {
    const isFocused = useIsFocused();

    //const [remaingDay, setRemaingDay] = useRecoilState(remaingDayState)
    let remaingDay = useRecoilValue(remaingDayState)
    let remaingDayRefresh = useRecoilRefresher_UNSTABLE(remaingDayState)
    let isDday = useRecoilValue(isDdayState)
    let fontCode = useRecoilValue(fontCodeState)

    /*
    useEffect(() => {
        setRemaingDay(moment())
    }, [isFocused])
*/
    useEffect(() => {
        setInterval(remaingDayRefresh, 5000);
    }, [])

    return(
        <View style = {styles.container}>
                { isDday ? <Text style={textStyles(fontCode).text}>{remaingDay}</Text> : <></> }
        </View>
    )

}

export default Dday