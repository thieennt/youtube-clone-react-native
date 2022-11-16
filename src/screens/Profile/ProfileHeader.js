import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ArrowLeftIcon from '../../assets/icons/ArrowLeft';
import MoreHorizontial from '../../assets/icons/MoreHorizontial';
import {useNavigation} from '@react-navigation/native';
import {globalStyles} from '../../styles';

export function ProfileHeader() {
  const navigation = useNavigation();
  return (
    <View style={[globalStyles.row, styles.container]}>
      <Pressable
        style={[globalStyles.row, {alignItems: 'center'}]}
        onPress={() => navigation.goBack()}>
        <ArrowLeftIcon />
        <Text
          style={{
            fontSize: 18,
            color: 'black',
            fontWeight: '600',
            paddingLeft: 12,
          }}>
          Profile
        </Text>
      </Pressable>
      <MoreHorizontial />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
});
