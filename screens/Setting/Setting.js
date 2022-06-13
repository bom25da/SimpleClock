import React, {useEffect} from 'react'
import {View, Text, StyleSheet, Switch, TouchableOpacity, Modal, Pressable, Button } from 'react-native'
import { RadioButton } from 'react-native-paper'
//import Modal from 'react-native-simple-modal'
import {
    isAnalectsState, 
    isDdayState, 
    clockModalState, 
    clockCodeState, 
    fontModalState, 
    fontCodeState,
    aboutMeModalState,
} from '../../state.js'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil'
import {styles, textStyles} from './_styles'
//import Orientation from 'react-native-orientation';
import Orientation from 'react-native-orientation-locker';
import { useIsFocused } from '@react-navigation/native';

const Setting = () => {

    const [isAnalects, setIsAnalects] = useRecoilState(isAnalectsState);
    const switchAnal = () => setIsAnalects(previousState => !previousState);

    const [isDday, setIsDday] = useRecoilState(isDdayState);
    const switchDday = () => setIsDday(previousState => !previousState);

    const [clockModal, setClockModal] = useRecoilState(clockModalState);
    const [clockCode, setClockCode] = useRecoilState(clockCodeState);

    const [fontModal, setFontModal] = useRecoilState(fontModalState);
    const [fontCode, setFontCode] = useRecoilState(fontCodeState);

    const [aboutMeModal, setAboutMeModal] = useRecoilState(aboutMeModalState);

    const isFocused = useIsFocused();

    const clockName = {
        analog: '아날로그시계',
        digital: '디지털시계',
    }

    const fontName = {
        yuni: 'Y유니버스체',
        kangwon: '강원교육모두체',
    }

    useEffect(() => {

        Orientation.lockToPortrait(); // 첫 시작할때 방향 설정
        Orientation.addOrientationListener(onOrientationChange);//리스너 설정
        
        return () => {
        	Orientation.unlockAllOrientations(),
        	Orientation.removeOrientationListener(onOrientationChange)
        }
        
    },[])
	
    const onOrientationChange = (orientation) => {   // 세로가 되면 다시 강제로 가로 모드
        if (orientation === 'LANDSCAPE') {  
            Orientation.lockToLandscapeLeft();
        }
    }
/*
    useEffect(()=>{
        Orientation.lockToPortrait(); //this will lock the view to Portrait
        //Orientation.lockToLandscape(); //this will lock the view to Landscape
    },[isFocused])
*/
    return (
        <View style={styles.container}>
            <Modal
                style={{alignItems:'center', justifyContent:'center'}}
                visible={clockModal}
                transparent={true}
                animationType='fade'>
                    <Pressable style={{flex:1, backgroundColor:'rgba(52, 52, 52, 0.8)'}}
                        onPress={() => setClockModal(false)}>
                    </Pressable >
                    <View style={styles.modalView}>
                        <RadioButton.Group 
                            onValueChange={value => {
                                setClockCode(value)
                                setClockModal(false)}}
                            value={clockCode}>
                            <RadioButton.Item
                                value="digital"
                                label="디지털시계" />
                            <RadioButton.Item
                                value="analog"
                                label="아날로그시계" />
                        </RadioButton.Group>
                    </View>
            </Modal>

            <Modal
                style={{alignItems:'center', justifyContent:'center'}}
                visible={fontModal}
                transparent={true}
                animationType='fade'>
                    <Pressable style={{flex:1, backgroundColor:'rgba(52, 52, 52, 0.8)'}}
                        onPress={() => setFontModal(false)}>
                    </Pressable >
                    <View style={styles.modalView}>
                        <RadioButton.Group 
                            onValueChange={value => {
                                setFontCode(value)
                                setFontModal(false)}}
                            value={fontCode}>
                            <RadioButton.Item
                                value="yuni"
                                label="Y유니버스체" />
                            <RadioButton.Item
                                value="kangwon"
                                label="강원교육모두체" />
                        </RadioButton.Group>
                    </View>
            </Modal>

            <Modal
                style={{alignItems:'center', justifyContent:'center'}}
                visible={aboutMeModal}
                transparent={true}
                animationType='fade'
                >
                    <Pressable style={{flex:1, backgroundColor:'rgba(52, 52, 52, 0.8)'}}
                        onPress={() => setAboutMeModal(false)}>
                    </Pressable >
                    <View style={styles.modalView_ab}>
                        <View style={styles.ab_modal_content_1}>
                            <Text style={textStyles(fontCode).ab_modal_text}>
                                기획자
                            </Text>
                            <Text style={textStyles(fontCode).ab_modal_text}>
                                정운(Jung Woon)
                            </Text>
                        </View>
                        <View style={styles.ab_modal_content_2}>
                            <Text style={textStyles(fontCode).ab_modal_text}>
                                개발자
                            </Text>
                            <Text style={textStyles(fontCode).ab_modal_text}>
                                권경원(Kwon Kyungwon)
                            </Text>
                        </View>
                        <View style={styles.ab_modal_bottom}>
                            <TouchableOpacity onPress={() => setAboutMeModal(false)}>
                                <Text style={textStyles(fontCode).ab_modal_text}>닫기</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </Modal>

            <View style={styles.top} />
            <View style={styles.set_1}>
                <View style={styles.set_1_1}>
                    <Text style={textStyles(fontCode).text}>시계</Text>
                </View>
                <View style={styles.set_1_2}>
                    <TouchableOpacity onPress={() => setClockModal(true)}>
                        <View>
                            <Text style={textStyles(fontCode).modalText}>{clockName[clockCode]}</Text>
                        </View>
                    </TouchableOpacity>
                </View>                
            </View>
            <View style={styles.set_2}>
                <View style={styles.set_2_1}>
                    <Text style={textStyles(fontCode).text}>글씨체</Text>
                </View>
                <View style={styles.set_2_2}>
                    <TouchableOpacity onPress={() => setFontModal(true)}>
                        <View>
                            <Text style={textStyles(fontCode).modalText}>{fontName[fontCode]}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.set_3}>
                <View style={styles.set_3_1}>
                    <Text style={textStyles(fontCode).text}>명언</Text>
                </View>
                <View style={styles.set_3_2}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isAnalects ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={switchAnal}
                        value={isAnalects}
                    />
                </View>
            </View>
            <View style={styles.set_4}>
                <View style={styles.set_4_1}>
                    <Text style={textStyles(fontCode).text}>주말 D-Day</Text>
                </View>
                <View style={styles.set_4_2}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isDday ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={switchDday}
                        value={isDday}
                    />
                </View>
            </View>
            <View style={styles.set_5}>
                <View style={styles.set_5_1}>
                    <TouchableOpacity onPress={() => setAboutMeModal(true)}>
                        <Text style={textStyles(fontCode).text}>About Me</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.set_5_2}>
                </View>
            </View>
            <View style={styles.bottom} />
            
        </View>
    )
}

export default Setting