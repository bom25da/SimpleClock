import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
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