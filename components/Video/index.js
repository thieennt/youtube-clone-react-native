import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MoreVerticalIcon from '../../assets/icons/MoreVertical';
import ShortsScreen from '../../screens/Shorts';
import VideoScreen from '../../screens/VideoScreen';
import {useNavigation} from '@react-navigation/native';
const VideoItem = ({url, avatar, title, views, timer}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Library')}>
        <Image
          style={styles.thumbnail}
          source={{
            uri: url,
          }}
        />
      </TouchableOpacity>
      <View style={styles.infoWrapper}>
        <Image
          style={styles.avatar}
          source={{
            uri: avatar,
          }}
        />
        <View style={styles.videoInfo}>
          <Text style={styles.videoTitle}>{title}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.videoViews}>{views} views</Text>
            <View style={styles.dot} />
            <Text style={styles.videoTime}>{timer}</Text>
          </View>
        </View>
        <View style={styles.actionMore}>
          <MoreVerticalIcon color="#0A0A0A" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },

  thumbnail: {
    height: 230,
    resizeMode: 'cover',
  },

  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },

  avatar: {
    width: 36,
    height: 36,
    resizeMode: 'cover',
    borderRadius: 25,
  },

  videoInfo: {
    paddingHorizontal: 12,
    flex: 1,
  },

  videoTitle: {
    color: '#0A0A0A',
    fontSize: 14,
    fontWeight: '500',
  },

  videoViews: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6C6C6C',
  },
  videoTime: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6C6C6C',
  },
  dot: {
    width: 2,
    height: 2,
    borderRadius: 25,
    backgroundColor: '#6C6C6C',
    marginHorizontal: 8,
  },
});

export default VideoItem;
