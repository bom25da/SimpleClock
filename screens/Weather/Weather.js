import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Text, View, StyleSheet, Alert, Image } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import axios from "axios";
import moment from 'moment';
import "moment/locale/ko";
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';


const Weather = () => {

    const THIS_API_KEY = "d094cb23d608302765549b7b49684820"; // API Key
    const [latitude, setLatitude] = useState(null); // 위도
    const [longitude, setLongitude] = useState(null); // 경도
    const [thisWeather, setThisWeather] = useState(''); // 현재날씨
    const [lastWeather, setLastWeather] = useState(''); // 전날날씨
    const [error, setError] = useState(false); // 에러관리
    const [isLoading, setIsLoading] = useState(true); // 로딩중인지 아닌지
    const [thisTemp, setThisTemp] = useState(''); // 오늘온도
    const [thisIcon, setThisIcon] = useState(''); // 오늘온도아이콘
    const [lastTemp, setLastTemp] = useState(''); // 어제온도
    const [lastIcon, setLastIcon] = useState(''); // 어제온도아이콘
    const [time, setTime] = useState(moment(moment().subtract(1, 'day').format('YYYY-MM-DD HH:mm:ss')).format('X')); // 시간

    const check = async () => {
        try {
            const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
            if (result === RESULTS.GRANTED) {
                console.log('ok');
            }
        } catch (error) {
        console.log('catch error');
        }
    };

    const geoLocation = () => {
        let gpsOptions = {
            enableHighAccuracy:true, timeout: 15000, maximumAge:10000
        };

        check(); // 권한 얻기

        return new Promise((resolve, rejected) => {
            Geolocation.getCurrentPosition(resolve, rejected, gpsOptions);
        })
    }

    const getWeather = async() => {
        try {
            console.log('start getweather');

            const position = await geoLocation()

            console.log('end getweather');

            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)

            if(latitude != null && longitude != null)
            {
                setIsLoading(false)

                console.log('start getweather');
                console.log('[LOG] latitude : ' + latitude);
                console.log('[LOG] longitude : ' + longitude);
    
                const thisResWeather = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${THIS_API_KEY}&units=metric`
                );

                setTime(moment(moment().subtract(1, 'day').format('YYYY-MM-DD HH:mm:ss')).format('X'))

                console.log('[LOG] time : ' + time);
                
                const lastResWeather = await axios.get(
                    `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${latitude}&lon=${longitude}&dt=${time}&appid=${THIS_API_KEY}&units=metric`
                );

                
                let thisRes = JSON.stringify(lastResWeather);

                console.log('[LOG] thisResWeather : ' + thisResWeather.data.weather[0].main);
                console.log('[LOG] thisResWeather : ' + thisResWeather.data.main.temp);
                console.log('[LOG] thisResWeather : ' + thisResWeather.data.weather[0].icon);
                console.log('[LOG] lastResWeather : ' + lastResWeather.data.current.weather[0].main);
                console.log('[LOG] lastResWeather : ' + lastResWeather.data.current.temp);
                console.log('[LOG] lastResWeather : ' + lastResWeather.data.current.weather[0].icon);
                
                //let _thisWeather = thisResWeather.data.weather[0].main;
                //let _thisTemp = thisResWeather.data.main.temp;
                
                setThisWeather(thisResWeather.data.weather[0].main);
                setThisTemp(thisResWeather.data.main.temp);
                setThisIcon(thisResWeather.data.weather[0].icon);
                setLastWeather(lastResWeather.data.current.weather[0].main);
                setLastTemp(lastResWeather.data.current.temp);
                setLastIcon(lastResWeather.data.current.weather[0].icon);
                
            }
            else{
                setIsLoading(true)
            }
            
           
            /*
            const lastResWeather = await axios.get(
                `http://history.openweathermap.org/data/2.5/history/city?lat=${latitude}&lon=${longitude}&type=hour&appid=${API_KEY}`
            );
            */

            
        } catch(error) {
            Alert.alert("날씨 정보를 읽어올 수 없습니다.")
            setError(true);
        } finally {
            setIsLoading(false);
        }
    }    

    useEffect(() => {
        getWeather()
    },[latitude, longitude]);

    const imgParse = (props) => {
        switch(props) {
            case '01d': return require('../../assets/images/weather/01d.png')
            case '01n': return require('../../assets/images/weather/01n.png')
            case '02d': return require('../../assets/images/weather/02d.png')
            case '02n': return require('../../assets/images/weather/02n.png')
            case '03d': return require('../../assets/images/weather/03d.png')
            case '03n': return require('../../assets/images/weather/03n.png')
            case '04d': return require('../../assets/images/weather/04d.png')
            case '04n': return require('../../assets/images/weather/04n.png')
            case '09d': return require('../../assets/images/weather/09d.png')
            case '09n': return require('../../assets/images/weather/09n.png')
            case '10d': return require('../../assets/images/weather/10d.png')
            case '10n': return require('../../assets/images/weather/10n.png')
            case '11d': return require('../../assets/images/weather/11d.png')
            case '11n': return require('../../assets/images/weather/11n.png')
            case '13d': return require('../../assets/images/weather/13d.png')
            case '13n': return require('../../assets/images/weather/13n.png')
            case '50d': return require('../../assets/images/weather/50d.png')
            case '50n': return require('../../assets/images/weather/50n.png')
            default: return ''
            
        }
    }

    return(
        <View style = {styles.container}>
            
            {isLoading ? <Text style={styles.text}> isLoading... </Text> :
            <>
                <View style = {styles.lastWeather}>
                    <Text style={styles.text}>Yesterday</Text>
                    <Image
                        //source={{uri: `https://i.ibb.co/tYjGLMj/${lastIcon}.png`}}
                        source={imgParse(lastIcon)}
                        resizeMode='center'
                        style={{width: 150, height: 150, margin: 20}}
                    />
                    <Text style={styles.text}>{Math.round(lastTemp)}℃</Text>  
                </View>
                <View style = {styles.thisWeather}>
                    <Text style={styles.text}>Today</Text>
                    <Image
                        //source={{uri: `https://i.ibb.co/tYjGLMj/${thisIcon}.png`}}
                        source={imgParse(thisIcon)}
                        resizeMode='center'
                        style={{width: 150, height: 150, margin: 20}}
                    />
                    <Text style={styles.text}>{Math.round(thisTemp)}℃</Text>  
                </View>
                
                {/* <Text style={styles.text}>latitude: {latitude}</Text>
                <Text style={styles.text}>longitude: {longitude}</Text>
                <Text style={styles.text}>current weather: {thisWeather}</Text>
                <Text style={styles.text}>current temp: {Math.round(thisTemp)}</Text>   
                <Text style={styles.text}>last weather: {lastWeather}</Text>
                <Text style={styles.text}>last temp: {Math.round(lastTemp)}</Text>    */}
            </>
            }
                   
        </View>
         
    )
}

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

export default Weather