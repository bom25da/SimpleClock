import React, {useState, useEffect} from 'react'
import { Text, View, StyleSheet} from 'react-native';
import "moment/locale/ko";
import {remaingDayState, isDdayState} from '../../state.js'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil'
import { useIsFocused } from '@react-navigation/native';

const Dday = () => {
    const isFocused = useIsFocused();

    const [remaingDay, setRemaingDay] = useRecoilState(remaingDayState)
    let isDday = useRecoilValue(isDdayState)

    return(
        <View style = {styles.container}>
                { isDday ? <Text style={styles.text}>토요일까지 D-{remaingDay}일</Text> : <></> }
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },

    text: {
        color: 'white',
        alignItems: 'center',
        fontFamily: 'YUniverse-L',
        fontSize: 35,
    },
})

export default Dday