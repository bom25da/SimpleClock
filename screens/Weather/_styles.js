import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    thisWeather: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    lastWeather: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: 'white',
        alignItems: 'center',
        fontFamily: 'YUniverse-L',
        fontSize: 20,
    },

})

export default styles