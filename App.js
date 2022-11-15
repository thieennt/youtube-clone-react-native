import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SearchScreen} from './screens/SearchScreen';
import {UploadScreen} from './screens/UploadScreen';
import {VideoScreen} from './screens/VideoScreen';
import {AvatarScreen} from './screens/AvatarScreen';
import {ProfileScreen} from './screens/ProfileScreen';
import {BottomNavigation} from './navigation/BottomNavigation';
import './styles';

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
        <Stack.Screen name="AvatarScreen" component={AvatarScreen} />
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
