import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // layout
    container: {
        flex: 1,
        //backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },

    top: {
        flex: 0.2,
        //backgroundColor: 'green',
        justifyContent: 'center',
    },

    bottom: {
        flex: 0.6,
        //backgroundColor: 'red',
        justifyContent: 'center',
    },

    left: {
        flex: 0.4,
        //backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

const textStyles = (fontCode) => {
    
    return StyleSheet.create({
        // Text
        dctext_date: {
            fontSize: 40,
            color: 'white',
            alignItems: 'center',
            fontFamily: fontCode,
        },

        dctext_time: {
            fontSize: 150,
            color: 'white',
            alignItems: 'center',
            fontFamily: fontCode,
        },
        
        actext_time: {
            fontSize: 25,
            color: 'white',
            alignItems: 'center',
            fontFamily: fontCode,
        },
    })
}

export {styles, textStyles}