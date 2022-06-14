import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Text, View, StyleSheet, Alert, Image, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import axios from "axios";
import moment from 'moment';
import "moment/locale/ko";
import {isLoadingState, thisWetState, lastWetState, fontCodeState} from '../../state.js'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil'
import { useIsFocused } from '@react-navigation/native';
import {styles, textStyles} from './_styles'

const Weather = () => {

    const THIS_API_KEY = "df0bf295d174eff56f9988a9a2f8aae2"; // API Key 
    const [isLoading, setIsLoading] = useRecoilState(isLoadingState); // 로딩중인지 아닌지
    const [thisWet, setThisWet] = useRecoilState(thisWetState); // 오늘날씨
    const [lastWet, setLastWet] = useRecoilState(lastWetState); // 어제날씨
    const isFocused = useIsFocused();
    let fontCode = useRecoilValue(fontCodeState)

    const geoLocation = () => {
        let gpsOptions = {
            enableHighAccuracy:true, timeout: 15000, maximumAge:10000
        };

        return new Promise((resolve, rejected) => {
            Geolocation.getCurrentPosition(resolve, rejected, gpsOptions);
        })        
    }

    const getLocationPermission = async() => {
        
        try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              {
                'title': 'TODAY FOR ME',
                'message': 'TODAY FOR ME access to your location '
              }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              console.log("You can use the location")
              //alert("You can use the location");
            } else {
              console.log("location permission denied")
              //alert("Location permission denied");
            }
          } catch (err) {
            console.warn(err)
          }
    }

    const getWeather = async() => {
        try {
            const position = await geoLocation()

            if(position.coords.latitude != null && position.coords.longitude != null)
            {
                setIsLoading(false)

                console.log('start getweather');

                console.log('[LOG] latitude : ' + position.coords.latitude);
                console.log('[LOG] longitude : ' + position.coords.longitude);
    
                const thisResWeather = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${THIS_API_KEY}&units=metric`
                );

                let uTime = moment(moment().subtract(1, 'day').format('YYYY-MM-DD HH:mm:ss')).format('X')

                console.log('[LOG] time : ' + uTime);
                
                const lastResWeather = await axios.get(
                    `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${position.coords.latitude}&lon=${position.coords.longitude}&dt=${uTime}&appid=${THIS_API_KEY}&units=metric`
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
                
                setThisWet({
                    temp: thisResWeather.data.main.temp,
                    icon: thisResWeather.data.weather[0].icon,
                })
                setLastWet({
                    temp: lastResWeather.data.current.temp,
                    icon: lastResWeather.data.current.weather[0].icon,
                })
                
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
            //setError(true);
        } finally {
            setIsLoading(false);
            //위치정보 못찾으면 기본값으로 셋팅함 - 서울시청으로
        }
    }    

    useEffect(() => {

        (async() => {
            // 위치 권한 얻기
            await getLocationPermission();

            // 최초 날씨 호출
            await getWeather();
        }) ();

        // 1분 간격으로 업데이트함
        const weatherId = setInterval(getWeather, 60000);

        // 클린업
        return function cleanup() {
            clearInterval(weatherId);
        };
    },[isFocused]);

    /*
    const imgParse = {
        '01d': require('../../assets/images/weather/01d.png'),
        '01n': require('../../assets/images/weather/01n.png'),
        '02d': require('../../assets/images/weather/02d.png'),
        '02n': require('../../assets/images/weather/02n.png'),
        '03d': require('../../assets/images/weather/03d.png'),
        '03n': require('../../assets/images/weather/03n.png'),
        '04d': require('../../assets/images/weather/04d.png'),
        '04n': require('../../assets/images/weather/04n.png'),
        '09d': require('../../assets/images/weather/09d.png'),
        '09n': require('../../assets/images/weather/09n.png'),
        '10d': require('../../assets/images/weather/10d.png'),
        '10n': require('../../assets/images/weather/10n.png'),
        '11d': require('../../assets/images/weather/11d.png'),
        '11n': require('../../assets/images/weather/11n.png'),
        '13d': require('../../assets/images/weather/13d.png'),
        '13n': require('../../assets/images/weather/13n.png'),
        '50d': require('../../assets/images/weather/50d.png'),
        '50n': require('../../assets/images/weather/50n.png'),
    }
    */

    return(
        <View style = {styles.container}>
            
            {isLoading ? <Text style={textStyles(fontCode).text}> isLoading... </Text> :
            <>
                <View style = {styles.lastWeather}>
                    <Text style={textStyles(fontCode).text}>Yesterday</Text>
                    <Image
                        source={{uri: `http://125.128.10.133/resource/img/${lastWet.icon}.png`}}
                        //source={imgParse[lastWet.icon]}
                        resizeMode='center'
                        style={{width: 100, height: 100, margin: 5}}
                    />
                    <Text style={textStyles(fontCode).text}>{Math.round(lastWet.temp)}℃</Text>  
                </View>
                <View style = {styles.thisWeather}>
                    <Text style={textStyles(fontCode).text}>Today</Text>
                    <Image
                        source={{uri: `http://125.128.10.133/resource/img/${thisWet.icon}.png`}}
                        //source={imgParse[thisWet.icon]}
                        resizeMode='center'
                        style={{width: 100, height: 100, margin: 5}}
                    />
                    <Text style={textStyles(fontCode).text}>{Math.round(thisWet.temp)}℃</Text>  
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

export default Weather