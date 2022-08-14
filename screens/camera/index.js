import React, { useEffect } from 'react';

import {
    View,
} from 'react-native';
import CameraComponent from '../../components/Camera';

const CameraScreen = ({ }) => {

    return (

        <View style={{ flex: 1 }}>
            <CameraComponent nameProp={'Hashir'} />
        </View>

    );
};



export default CameraScreen
