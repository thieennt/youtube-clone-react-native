import React from 'react';
// import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomNavigation} from './components/BottomNavigation';
import {SearchScreen} from './screens/SearchScreen';
import {VideoPlayerScreen} from './screens/VideoPlayerScreen';

import {UploadScreen} from './screens/UploadScreen';
import {VideoScreen} from './screens/VideoScreen';
import './styles';
import {AvatarScreen} from './screens/AvatarScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="ViewScreen" component={VideoPlayerScreen} />
        <Stack.Screen name="VideoScreen" component={VideoScreen} />
        <Stack.Screen name="AvatarScreen" component={AvatarScreen} />

        <Stack.Screen
          name="UploadScreen"
          component={UploadScreen}
          options={{
            presentation: 'transparentModal',
            animation: 'fade_from_bottom',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
