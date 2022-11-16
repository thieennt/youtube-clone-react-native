import React from 'react';
import {Text, View} from 'react-native';
import {Header} from '../../components/Header';
import {globalStyles} from '../../styles';

export const SubscriptionScreen = () => {
  return (
    <>
      <Header />
      <View style={globalStyles.container}>
        <Text>Subscription Screen</Text>
      </View>
    </>
  );
};
