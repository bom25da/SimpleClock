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

})

const textStyles = (fontCode) => {
    
    return StyleSheet.create({
        text: {
            color: 'white',
            alignItems: 'center',
            fontFamily: fontCode,
            fontSize: 20,
        },
    })
}

export {styles, textStyles}