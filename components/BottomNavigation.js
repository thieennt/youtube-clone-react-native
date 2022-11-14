import React, {useState} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/HomeScreen';
import {LibraryScreen} from '../screens/LibraryScreen';
import {ShortsScreen} from '../screens/ShortsScreen';
import {SubscriptionScreen} from '../screens/SubscriptionScreen';

import {useNavigation} from '@react-navigation/native';
import {Image, View} from 'react-native';
import HomeIcon from '../assets/icons/Home';
import HomeBlackIcon from '../assets/icons/HomeBlack';
import LibraryIcon from '../assets/icons/Library';
import LibraryBlackIcon from '../assets/icons/LibraryBlack';
import ShortsIcon from '../assets/icons/Shorts';
import ShortsBlackIcon from '../assets/icons/ShortsBlack';
import SubscriptionIcon from '../assets/icons/Subscription';
import SubscriptionBlackIcon from '../assets/icons/SubscriptionBlack';

const Tab = createBottomTabNavigator();
const Placeholder = () => <View />;

export const BottomNavigation = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(true);
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
        component={Placeholder}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('UploadScreen', {isVisible: true});
          },
        }}
        // listeners={() => ({
        //   tabPress: e => {
        //     e.preventDefault();
        //     navigation.navigate('UploadScreen', {isVisible: isVisible});
        //   },
        // })}
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
              }}
              onPress={() => navigation.navigate('UploadScreen')}>
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
