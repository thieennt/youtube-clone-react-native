import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MoreVerticalIcon from '../../assets/icons/MoreVertical';
import {useNavigation} from '@react-navigation/native';
import UserAvatar from '../UserAvatar';

const VideoItem = ({thumbnail, avatar, title, views, timer}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('ViewScreen')}>
        <Image
          style={styles.thumbnail}
          source={{
            uri: thumbnail,
          }}
        />
      </TouchableOpacity>
      <View style={styles.infoWrapper}>
        <UserAvatar width={36} height={36} avatar={avatar} />
        <View style={styles.videoInfo}>
          <Text style={styles.videoTitle}>{title}</Text>
          <View style={styles.infoDetail}>
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
    paddingBottom: 12,
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
    // width: 36,
    // height: 36,
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

  infoDetail: {
    flexDirection: 'row',
    alignItems: 'center',
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
