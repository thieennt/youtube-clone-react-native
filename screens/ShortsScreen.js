import React from 'react';
import {Text, View} from 'react-native';
import Header from '../components/Header';
import {globalStyles} from '../styles';

export const ShortsScreen = () => {
  return (
    <>
      <Header />
      <View style={globalStyles.container}>
        <Text>Shorts Screen</Text>
      </View>
    </>
  );
};
