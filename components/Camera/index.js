import React, { useEffect } from 'react';

import {
    View,
    ImageBackground,
    TouchableOpacity,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { RNCamera } from 'react-native-camera';

import {
    BarIndicator
} from 'react-native-indicators';

import homewall from '../../assets/home.jpg';
import winds from '../../assets/winds.png';

const CameraComponent = ({ nameProp }) => {
    const navigation = useNavigation()

    useEffect(() => {
        console.log(nameProp, 'name**')
    }, [])

    return (

        <View style={{ flex: 1 }}>
            <RNCamera
                // ref={ref => {
                //     this.camera = ref;
                // }}
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                onGoogleVisionBarcodesDetected={({ barcodes }) => {
                    console.log(barcodes);
                }}
            />
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity style={styles.capture}>
                    <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  });

export default CameraComponent
