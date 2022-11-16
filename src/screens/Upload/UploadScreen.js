import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import CameraIcon from '../assets/icons/Camera';
import CloseIcon from '../assets/icons/Close';
import LivestreamIcon from '../assets/icons/Livestream';
import ShortsIcon from '../assets/icons/Shorts';
import {UploadItem} from '../../components/UploadItem';

export const UploadScreen = () => {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.screen} onPress={() => navigation.goBack()}>
      <Pressable style={styles.boxModal} onPress={() => {}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: 'black', fontSize: 16}}>Create</Text>
          <Pressable onPress={() => navigation.goBack()}>
            <CloseIcon />
          </Pressable>
        </View>
        <UploadItem icon={<ShortsIcon />} name="Create short video" />
        <Pressable onPress={() => navigation.navigate('ProfileScreen')}>
          <UploadItem icon={<CameraIcon />} name="Upload your avatar" />
        </Pressable>
        <UploadItem icon={<LivestreamIcon />} name="Upload your video" />
      </Pressable>
      {/* <View style={{height: 50}} /> */}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  boxModal: {
    backgroundColor: 'white',
    width: '100%',
    height: '32%',
    padding: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});
