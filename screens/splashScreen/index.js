import React, { useEffect} from 'react';

import{
  View,
  ImageBackground,
  Text,
  Image} from 'react-native';
import { useNavigation } from "@react-navigation/native";


import {
  BarIndicator
} from 'react-native-indicators';

import homewall from '../../assets/home.jpg';
import winds from '../../assets/winds.png';

const splashScreen = ({ }) => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home Screen')
        }, 3000);
    }, [])
  return(

<View style={{flex:1}}>

<ImageBackground
        source={homewall}
        style={{
          zIndex: 1, opacity: 20,
          width: '100%',
          height: '100%'
        }}
        imageStyle={{
          resizeMode: 'cover'
        }}
      >
<View style={{flex:1}}>

<View style={{alignItems:'center', marginTop:30}}>
  <Image
  source={winds}
  style={{width:250, height:150}}
  />

</View>
  <View style={{alignItems:'center',marginTop:60 }}>
    <Text style={{fontSize:30, fontWeight:'bold', color:'#191970'}}>
      {'FREE MOBILE UI KIT'}
    </Text>

    <Text style={{fontSize:15}}>
      {'DESIGN FOR YOUR NEEDS'}
    </Text>

        <View style={{justifyContent:'center', marginBottom:90}}>
    <BarIndicator color='white' />
    </View>

    
  </View>
  </View>

  </ImageBackground>

</View>

  );
};



export default splashScreen
