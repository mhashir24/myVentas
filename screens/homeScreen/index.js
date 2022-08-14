import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import{
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';

import {
    DotIndicator
  } from 'react-native-indicators';


import homewall from '../../assets/homewall.jpg';
import elizabeth from '../../assets/elizabeth.jpg';
import dynarys from '../../assets/dynarys.jpg';
import cersie from '../../assets/cersie.jpg';
import halimadp from '../../assets/halimadp.jpg';



const homeScreen = () => {
    const navigation = useNavigation()
    const [change, setChange] = useState(0)


  return (
<View style={{flex:1}}>
<View style={{flex:0.4}}>

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

    <View style={{flexDirection:'row', justifyContent:'space-between'}}>

        <Entypo
        style={{marginLeft:20, marginTop:10}}
        name = {'menu'}
        size={25}
        color={'white'}
        
        />

        <Text style={{color:'white', fontWeight:'bold', fontSize:20, marginTop:15}}>
            {'V e n t a s'}
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('Profile View')}>
        <Image
        style={{marginRight:20,marginTop:10, width:40, height:40, borderRadius:50}}
        source = {halimadp}
        />
        </TouchableOpacity>
    </View>

    <View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
    <Text style={{color:'white', fontWeight:'bold', fontSize:23}}>
            {'A fresh take on'}
    </Text>

    <Text style={{color:'white', fontWeight:'bold', fontSize:23}}>
        {'a concept store'}
    </Text>

    <Text style={{color:'white', fontWeight:'bold', fontSize:23}}>
        {'in Auckland'}
    </Text>

    <Text style={{color:'white', fontWeight:'bold', fontSize:23}}>
        {'New Zealand'}
    </Text>

    <DotIndicator color='white' size={5} marginTop={40} />
    </View>


</ImageBackground>
</View>


<View style={{backgroundColor:'white', flex:0.6}}>
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>

    <TouchableOpacity onPress={() => setChange(0)}>
<View style={{padding:20, paddingHorizontal:30, backgroundColor: change === 0 ? '#00ced1' : 'white'}}>     
<Text style={{color:'#00008b', fontWeight:'bold', fontSize:17}}>
    {'GUIDES'}
</Text>
</View>
</TouchableOpacity>

<TouchableOpacity onPress={() => setChange(1)}>
<View style={{ padding:20, paddingHorizontal:20, backgroundColor: change === 1 ? '#00ced1' : 'white'}}>     
<Text style={{color:'#00008b', fontWeight:'bold', fontSize:17}}>
    {'JOURNALS'}
</Text>
</View>
</TouchableOpacity>

<TouchableOpacity onPress={() => setChange(2)}>
<View style={{ padding:20, paddingHorizontal:30, backgroundColor: change === 2 ? '#00ced1' : 'white'}}>     
<Text style={{color:'#00008b', fontWeight:'bold', fontSize:17}}>
    {'PHOTO'}
</Text>
</View>
</TouchableOpacity>
</View>

   {change === 0 ?
    <View style={{justifyContent:'center', alignItems:'center', marginTop:10, margin:30}}>

    <Image
    source={elizabeth}
    style={{width:300, height:200, borderRadius:5}}
    
    />

    <Text style={{fontWeight:'bold', fontSize:27, marginTop:-45, color:'white'}}>
        {'Scarlet Witch'}
    </Text>

    <Text style={{marginTop:15, color:'#00008b'}}>
        {'The Scarlet Witch is a fictional character appearing in American comic books published by Marvel Comics.'}
    </Text>
</View>

:
change === 1?

<View style={{justifyContent:'center', alignItems:'center', marginTop:10, margin:30}}>

<Image
source={dynarys}
style={{width:300, height:200, borderRadius:5}}

/>

<Text style={{fontWeight:'bold', fontSize:26, marginTop:-45, color:'white'}}>
    {'Daenerys Targaryen'}
</Text>

<Text style={{marginTop:12, color:'#00008b'}}>
    {'Queen Daenerys I Targaryen, also known as Daenerys Stormborn, and colloquially known as Dany, was the younger sister of Rhaegar Targaryen.'}
</Text>
</View>
:
<View style={{justifyContent:'center', alignItems:'center', marginTop:10, margin:30}}>

<Image
source={cersie}
style={{width:300, height:200, borderRadius:5}}

/>

<Text style={{fontWeight:'bold', fontSize:27, marginTop:-45, color:'white'}}>
    {'Cersie Lannister'}
</Text>

<Text style={{marginTop:15, color:'#00008b'}}>
    {'Queen Cersei Lannister is the widow of King Robert Baratheon and Queen of the Seven Kingdoms. She is the twin sister of Jaime Lannister and elder sister of Tyrion Lannister.'}
</Text>
</View>
}

</View>


</View>

  );
}

export default homeScreen