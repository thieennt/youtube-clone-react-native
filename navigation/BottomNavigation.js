import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen} from '../screens/HomeScreen';
import {LibraryScreen} from '../screens/LibraryScreen';
import {ShortsScreen} from '../screens/ShortsScreen';
import {SubscriptionScreen} from '../screens/SubscriptionScreen';

import HomeIcon from '../assets/icons/Home';
import HomeBlackIcon from '../assets/icons/HomeBlack';
import LibraryIcon from '../assets/icons/Library';
import LibraryBlackIcon from '../assets/icons/LibraryBlack';
import ShortsIcon from '../assets/icons/Shorts';
import ShortsBlackIcon from '../assets/icons/ShortsBlack';
import SubscriptionIcon from '../assets/icons/Subscription';
import SubscriptionBlackIcon from '../assets/icons/SubscriptionBlack';
import UploadIcon from '../assets/icons/Upload';

const Tab = createBottomTabNavigator();
const Placeholder = () => <View />;

export const BottomNavigation = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {
          fontSize: 12,
        },
        initialRouteName: 'Home',
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
        component={Placeholder}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('UploadScreen');
          },
        }}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <View
              style={{
                position: 'absolute',
                top: 3,
                bottom: 0,
                height: 42,
                width: 42,
              }}>
              <UploadIcon />
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
