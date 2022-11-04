import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Image, View} from 'react-native';
import HomeIcon from './assets/icons/Home';
import HomeBlackIcon from './assets/icons/HomeBlack';
import LibraryIcon from './assets/icons/Library';
import LibraryBlackIcon from './assets/icons/LibraryBlack';
import ShortsIcon from './assets/icons/Shorts';
import ShortsBlackIcon from './assets/icons/ShortsBlack';
import SubscriptionIcon from './assets/icons/Subscription';
import SubscriptionBlackIcon from './assets/icons/SubscriptionBlack';
import HomeScreen from './screens/Home';
import LibraryScreen from './screens/Library';
import ShortsScreen from './screens/Shorts';
import SubscriptionScreen from './screens/Subscription';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'black',
          labelStyle: {
            fontSize: 12,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? <HomeBlackIcon /> : <HomeIcon />,
          }}
        />
        <Tab.Screen
          name="Shorts"
          component={ShortsScreen}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? <ShortsBlackIcon /> : <ShortsIcon />,
          }}
        />
        <Tab.Screen
          name="upload"
          component={HomeScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  height: 42,
                  width: 42,
                  flexDirection: 'row',

                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                }}>
                <Image
                  source={require('././assets/icons/uploadWhite.png')}
                  style={{width: 42, height: 42, resizeMode: 'cover'}}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Subscription"
          component={SubscriptionScreen}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? <SubscriptionBlackIcon /> : <SubscriptionIcon />,
          }}
        />
        <Tab.Screen
          name="Library"
          component={LibraryScreen}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? <LibraryBlackIcon /> : <LibraryIcon />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
