import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {BottomNavigation} from './src/navigation/BottomNavigation';
import {SearchScreen} from './src/screens/Search/SearchScreen';
import {VideoScreen} from './src/screens/Video/VideoScreen';
import {ProfileScreen} from './src/screens/Profile/ProfileScreen';
import {UploadScreen} from './src/screens/Upload/UploadScreen';

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
        <Stack.Screen name="VideoScreen" component={VideoScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />

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
