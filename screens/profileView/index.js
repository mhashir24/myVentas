import React, { useEffect} from 'react';

import{
  View,
  ImageBackground,
  Text,
  Image,
  FlatList,
  ScrollView} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import Entypo from 'react-native-vector-icons/Entypo';
import homewall2 from '../../assets/homewall2.jpg';
import halimadp from '../../assets/halimadp.jpg';
import elizabeth from '../../assets/elizabeth.jpg';
import dynarys from '../../assets/dynarys.jpg';
import cersie from '../../assets/cersie.jpg';
import wanda from '../../assets/wanda.jpg';
import samantha from '../../assets/samantha.jpg';
import halima from '../../assets/halima.jpg';
import mine3 from '../../assets/mine3.jpg';
import mine4 from '../../assets/mine4.jpg';
import mine5 from '../../assets/mine5.jpg';

const imgdata = [
    {
        id:'0',
        img: elizabeth,
    },
    {
        id:'1',
        img: dynarys,
    },
    {
        id:'2',
        img: cersie,
    }
]

const imgdata1 = [
    {
        id:'3',
        img: wanda,
    },
    {
        id:'4',
        img: samantha,
    },
    {
        id:'5',
        img: halima,
    }
]
const imgdata2 = [
    {
        id:'6',
        img: mine3,
    },
    {
        id:'7',
        img: mine4,
    },
    {
        id:'8',
        img: mine5,
    }
]


const profileView = () => {
    const navigation = useNavigation()
  return (

    <View style={{flex:1}}>
    <View style={{flex:0.37, borderWidth:1}}>
        <ImageBackground
        
        source={homewall2}
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
style={{marginLeft:20, marginTop:20}}
name = {'menu'}
size={25}
color={'white'}

/>

<Text style={{color:'white', fontWeight:'bold', fontSize:20, marginTop:20}}>
    {'P r o f i l e'}
</Text>

<Entypo
style={{marginRight:20,marginTop:20}}
name = {'magnifying-glass'}
size={25}
color={'white'}

/>
</View>

        </ImageBackground>
    </View>

        <View style={{flex:0.6, backgroundColor:'white'}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>

            <View style={{marginTop:20, marginLeft:20, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:25, fontWeight:'bold'}}>
                    {'0'}
                </Text>
                
                <Text style={{color:'#dcdcdc', fontWeight:'bold'}}>
                 {'Articles'}
                </Text>
            </View>

            <View>
                <Image
                style={{width:150, height:150, marginTop:-110, borderRadius:90}}
                source={halimadp}
                />
                <Entypo
                style={{zIndex:1, marginTop:-150, marginLeft:110}}
                name = {'info-with-circle'}
                size={40}
                color={'#ffd700'}

                />

    
            </View>

            <View style={{marginRight:20, marginTop:20, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:25, fontWeight:'bold'}}>
                    {'22'}
                </Text>
                
                <Text style={{color:'#dcdcdc', fontWeight:'bold'}}>
                    {'Followers'}
                </Text>
            </View>

            </View>

            <View style={{borderBottomWidth:2, flexDirection:'row', justifyContent:'space-between', borderBottomEndRadius:40, borderBottomStartRadius:40, paddingBottom:10}}> 

            <View style={{marginTop:10, marginLeft:20, justifyContent:'center', alignItems:'center'}}>
            <Entypo
                style={{}}
                name = {'camera'}
                size={30}
                onPress={() => navigation.navigate('Camera')}
                color={'#ffd700'}
                />
            </View>

                <View style={{flexDirection:'column', marginTop:10, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontWeight:'bold', fontSize:30}}>
                    {'Halima Sultan'}
                </Text>
                <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'bold'}}>
                    {'Turkey'}
                </Text>

                <Text style={{marginLeft:10}}>
                    {'25 Years Old'}
                </Text>
                </View>
                </View>

                <View style={{marginRight:20, marginTop:10, justifyContent:'center', alignItems:'center'}}>
            <Entypo
                style={{}}
                name = {'heart'}
                size={30}
                color={'#ffd700'}
                />
            </View>
            </View>
            <ScrollView>

            <View style={{flexDirection:'row', marginTop:10, marginHorizontal:30, justifyContent:'center'}}>
            
                <FlatList
                data= {imgdata}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({item}) =>{
                    return(
                        <View>
                        <Image
                        source={item.img}
                        style={{width:100, height:100}}               
                        />
                        

                        </View>

                    )
                }}
                
                />

            </View>


            <View style={{flexDirection:'row',  marginHorizontal:30, justifyContent:'center'}}>
            <FlatList
                data= {imgdata1}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({item}) =>{
                    return(
                        <View>
                        <Image
                        source={item.img}
                        style={{width:100, height:100}}               
                        />
                        

                        </View>

                    )
                }}
                
                />
                
            </View>

            <View style={{flexDirection:'row',  marginHorizontal:30, justifyContent:'center'}}>
            <FlatList
                data= {imgdata2}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({item}) =>{
                    return(
                        <View>
                        <Image
                        source={item.img}
                        style={{width:100, height:100}}               
                        />
                        

                        </View>

                    )
                }}
                
                />
                
            </View>

            </ScrollView>

        </View>

    </View>
  );
}

export default profileView