import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/Home';
import {ShortsScreen} from '../screens/Shorts';
import {SubscriptionScreen} from '../screens/Subscription';
import {LibraryScreen} from '../screens/Library';

import HomeIcon from '../assets/icons/Home';
import HomeBlackIcon from '../assets/icons/HomeBlack';
import ShortsIcon from '../assets/icons/Shorts';
import ShortsBlackIcon from '../assets/icons/ShortsBlack';
import SubscriptionIcon from '../assets/icons/Subscription';
import SubscriptionBlackIcon from '../assets/icons/SubscriptionBlack';
import LibraryIcon from '../assets/icons/Library';
import LibraryBlackIcon from '../assets/icons/LibraryBlack';
import {Image, View} from 'react-native';

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}>
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
        name="Upload"
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
                source={require('../assets/icons/uploadWhite.png')}
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
  );
};
