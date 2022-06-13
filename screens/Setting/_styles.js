import { StyleSheet } from 'react-native';

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

    bottom: {
        flex: 0.1,
    },
})

const textStyles = (fontCode) => {
    
    return StyleSheet.create({

        modalText: {
            color: 'white',
            alignItems: 'center',
            fontFamily: fontCode,
            fontSize: 20,
            margin: 10,
        },

        ab_modal_text: {
            color: 'black',
            alignItems: 'center',
            fontFamily: fontCode,
            fontSize: 20,
            margin: 10,
        },

        text: {
            color: 'white',
            alignItems: 'center',
            fontFamily: fontCode,
            fontSize: 40,
            margin: 10,
        },
    })
}

export {styles, textStyles}