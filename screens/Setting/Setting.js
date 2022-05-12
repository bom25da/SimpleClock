import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native'

const Setting = () => {

    const [isAnalects, setIsAnalects] = useState(false);
    const switchAnal = () => setIsAnalects(previousState => !previousState);

    const [isDday, setIsDday] = useState(false);
    const switchDday = () => setIsDday(previousState => !previousState);

    return (
        <View style={styles.container}>
            <View style={styles.top} />
            <View style={styles.set_1}>
                <View style={styles.set_1_1}>
                    <Text style={styles.text}>시계</Text>
                </View>
                <View style={styles.set_1_2}>
                    <Text style={styles.modalText}>아날로그시계</Text>
                </View>
            </View>
            <View style={styles.set_2}>
                <View style={styles.set_2_1}>
                    <Text style={styles.text}>글씨체</Text>
                </View>
                <View style={styles.set_2_2}>
                    <Text style={styles.modalText}>돋움</Text>
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
                    <Text style={styles.text}>About Me</Text>
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

    modalText: {
        color: 'white',
        alignItems: 'center',
        fontFamily: 'YUniverse-L',
        fontSize: 20,
        margin: 10,
    },
})


export default Setting