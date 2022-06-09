import React, {useState, useEffect} from 'react'
import { Text, View, StyleSheet} from 'react-native';
import "moment/locale/ko";
import {nowDateState, isAnalectsState} from '../../state.js'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil'
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import styles from './_styles'

const Analects = () => {
    const isFocused = useIsFocused();

    const [analText, setAnalText] = useState('')
    let nowDate = useRecoilValue(nowDateState)
    let isAnalects = useRecoilValue(isAnalectsState)

    async function getAnalText() {
        console.log(nowDate)
        try {
            const res = await axios.get("http://125.128.10.133:8080/anal/read/analDate/" + nowDate)
            setAnalText(res.data)
        }
        catch {
            console.log('error')
        } 
    }

    useEffect(() => {
        getAnalText()
    }, [isFocused])

    return(
        <View style = {styles.container}>
                { isAnalects ? <Text style={styles.text}>{analText}</Text> : <></> }
        </View>
    )

}

export default Analects
