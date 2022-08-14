import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import splashScreen from './screens/splashScreen';
import homeScreen from './screens/homeScreen';
import profileView from './screens/profileView';
import CameraScreen from './screens/camera';

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer> 

      <Stack.Navigator headerMode={'none'} initialRouteName="Camera">
    <Stack.Screen name="Splash Screen" component={splashScreen} />
    <Stack.Screen name="Home Screen" component={homeScreen} />
    <Stack.Screen name="Profile View" component={profileView} />
    <Stack.Screen name="Camera" component={CameraScreen} />
  </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App