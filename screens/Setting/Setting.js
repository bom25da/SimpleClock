import React, {useState} from 'react'
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
    aboutMeModalState} from '../../state.js'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil'

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

    const clockName = {
        analog: '아날로그시계',
        digital: '디지털시계',
    }

    const fontName = {
        dotum: '돋움체',
        gothic: '고딕체',
    }

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
                                value="dotum"
                                label="돋움체" />
                            <RadioButton.Item
                                value="gothic"
                                label="고딕체" />
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
                            <Text style={styles.ab_modal_text}>
                                기획자
                            </Text>
                            <Text style={styles.ab_modal_text}>
                                정운(Jung Woon)
                            </Text>
                        </View>
                        <View style={styles.ab_modal_content_2}>
                            <Text style={styles.ab_modal_text}>
                                개발자
                            </Text>
                            <Text style={styles.ab_modal_text}>
                                권경원(Kwon Kyungwon)
                            </Text>
                        </View>
                        <View style={styles.ab_modal_bottom}>
                            <TouchableOpacity onPress={() => setAboutMeModal(false)}>
                                <Text style={styles.ab_modal_text}>닫기</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </Modal>

            <View style={styles.top} />
            <View style={styles.set_1}>
                <View style={styles.set_1_1}>
                    <Text style={styles.text}>시계</Text>
                </View>
                <View style={styles.set_1_2}>
                    <TouchableOpacity onPress={() => setClockModal(true)}>
                        <View>
                            <Text style={styles.modalText}>{clockName[clockCode]}</Text>
                        </View>
                    </TouchableOpacity>
                </View>                
            </View>
            <View style={styles.set_2}>
                <View style={styles.set_2_1}>
                    <Text style={styles.text}>글씨체</Text>
                </View>
                <View style={styles.set_2_2}>
                    <TouchableOpacity onPress={() => setFontModal(true)}>
                        <View>
                            <Text style={styles.modalText}>{fontName[fontCode]}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.set_3}>
                <View style={styles.set_3_1}>
                    <Text style={styles.text}>명언</Text>
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
                    <Text style={styles.text}>주말 D-Day</Text>
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
                        <Text style={styles.text}>About Me</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.set_5_2}>
                </View>
            </View>
            <View style={styles.bottom} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
    },

    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        //그림자의 영역 지정
        shadowOffset: {
          width: 0,
          height:2
        },
        //불투명도 지정
        shadowOpacity: 0.25,
        //반경 지정
        shadowRadius: 3.84,
        //flex:1
        position:'absolute',
        top: 320, left: 30, right: 30, bottom: 320,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalView_ab: {
        height: 500,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        shadowColor: '#000',
        //그림자의 영역 지정
        shadowOffset: {
          width: 0,
          height:2
        },
        //불투명도 지정
        shadowOpacity: 0.25,
        //반경 지정
        shadowRadius: 3.84,
        //flex:1
        position:'absolute',
        top: 120, left: 30, right: 30, bottom: 120,
    },

    modalText: {
        color: 'white',
        alignItems: 'center',
        fontFamily: 'YUniverse-L',
        fontSize: 20,
        margin: 10,
    },

    top: {
        flex: 0.1,
    },

    set_1: {
        flex: 0.2,
        backgroundColor: '#606060',
        margin: 20,
        borderRadius: 10,
        flexDirection: 'row',
    },

    set_1_1: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 20
    },

    set_1_2: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 20
    },

    set_2: {
        flex: 0.2,
        backgroundColor: '#606060',
        margin: 20,
        borderRadius: 10,
        flexDirection: 'row',
    },

    set_2_1: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 20
    },

    set_2_2: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 20
    },

    set_3: {
        flex: 0.2,
        backgroundColor: '#606060',
        margin: 20,
        borderRadius: 10,
        flexDirection: 'row',
    },

    set_3_1: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 20
    },

    set_3_2: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 20
    },

    set_4: {
        flex: 0.2,
        backgroundColor: '#606060',
        margin: 20,
        borderRadius: 10,
        flexDirection: 'row',
    },

    set_4_1: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 20
    },

    set_4_2: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 20
    },

    set_5: {
        flex: 0.2,
        backgroundColor: '#606060',
        margin: 20,
        borderRadius: 10,
        flexDirection: 'row',
    },

    set_5_1: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 20
    },

    set_5_2: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 20
    },

    ab_modal_content_1: {
        flex: 0.4,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    ab_modal_content_2: {
        flex: 0.4,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    ab_modal_bottom: {
        flex: 0.2,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    ab_modal_text: {
        color: 'black',
        alignItems: 'center',
        fontFamily: 'YUniverse-L',
        fontSize: 20,
        margin: 10,
    },

    bottom: {
        flex: 0.1,
    },

    text: {
        color: 'white',
        alignItems: 'center',
        fontFamily: 'YUniverse-L',
        fontSize: 40,
        margin: 10,
    },
})


export default Setting