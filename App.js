import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomNavigation} from './components/BottomNavigation';
import {VideoPlayerScreen} from './screens/VideoPlayerScreen';
import {SearchScreen} from './screens/SearchScreen';

import './styles';
import {VideoScreen} from './screens/VideoScreen';
import {UploadScreen} from './screens/UploadScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="ViewScreen" component={VideoPlayerScreen} />
        <Stack.Screen name="VideoScreen" component={VideoScreen} />
        <Stack.Group
          screenOptions={{presentation: 'transparentModal', headerShown: false}}
          options={{modalPresentationStyle: 'fullScreen'}}>
          <Stack.Screen
            name="UploadScreen"
            component={UploadScreen}
            options={{animationEnabled: true}}
          />
        </Stack.Group>
        {/* <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="UploadScreen" component={UploadScreen} />
        </Stack.Group> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
