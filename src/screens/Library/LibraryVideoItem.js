import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import MoreVerticalIcon from '../../../assets/icons/library/MoreVertical';

export const LibraryVideoItem = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() =>
          navigation.navigate('VideoScreen', {videoId: props.videoId})
        }>
        <Image
          style={styles.thumbnail}
          source={{
            uri: props.thumbnail,
          }}
        />
      </Pressable>
      <View style={styles.videoInfo}>
        <View>
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
          <Text style={styles.channel}>{props.channel}</Text>
        </View>
        <MoreVerticalIcon color="#000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 12,
  },
  thumbnail: {
    width: 148,
    height: 88,
  },
  videoInfo: {
    width: 148,
    paddingTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    color: '#000',
  },
  channel: {
    fontSize: 12,
    color: '#6C6C6C',
  },
});
