import {useNavigation} from '@react-navigation/native';
import dayjs from 'dayjs';
import React, {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MoreVerticalIcon from '../../../assets/icons/MoreVertical';
import {globalStyles} from '../../styles';
import UserAvatar from '../UserAvatar';

export const CardItem = ({
  thumbnail,
  title,
  views,
  timer,
  videoId,
  channelId,
  channelTitle,
}) => {
  const navigation = useNavigation();
  const [showPopup, setShowPopup] = useState(false);
  const [channelInfo, setChannelInfo] = useState([]);

  useEffect(() => {
    handleGetChannelInfo();
  }, []);

  const handleGetChannelInfo = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyB_CxzJp0WG9pI2Ojt1jV12BQDkyAABrQw`,
    );
    const data = await response.json();
    setChannelInfo(data.items);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{backgroundColor: 'green'}}
        onPress={() => navigation.navigate('VideoScreen', {videoId: videoId})}>
        <Image
          style={styles.thumbnail}
          source={{
            uri: thumbnail,
          }}
        />
      </TouchableOpacity>
      <View style={styles.infoWrapper}>
        {channelInfo.map((item, index) => (
          <UserAvatar
            key={index}
            width={36}
            height={36}
            avatar={item.snippet.thumbnails.default.url}
          />
        ))}
        <View style={styles.videoInfo}>
          <Text style={styles.videoTitle} numberOfLines={2}>
            {title}
          </Text>
          <View style={styles.infoDetail}>
            <Text style={styles.channelTitle}>{channelTitle}</Text>
            <View style={styles.dot} />
            <Text style={styles.videoViews}>{views} views</Text>
            <View style={styles.dot} />
            <Text style={styles.videoTime}>
              {dayjs(timer).format('DD-MM-YYYY')}
            </Text>
          </View>
        </View>
        <Pressable
          style={styles.actionMore}
          onPress={() => setShowPopup(!showPopup)}>
          <MoreVerticalIcon color="#0A0A0A" />
          {showPopup ? (
            <View style={styles.popupWrapper}>
              <Pressable style={styles.btnItem}>
                <Text style={globalStyles.textBlack}>Download</Text>
              </Pressable>
              <Pressable style={styles.btnItem}>
                <Text style={globalStyles.textBlack}>Add to watch later</Text>
              </Pressable>
            </View>
          ) : (
            ''
          )}
        </Pressable>
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
    height: 220,
    resizeMode: 'cover',
  },

  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    position: 'relative',
  },

  avatar: {
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
    flexWrap: 'wrap',
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
    marginHorizontal: 4,
  },
  popupWrapper: {
    width: 160,
    height: 100,
    borderRadius: 8,
    position: 'absolute',
    right: 0,
    top: 30,
    zIndex: 100,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    padding: 12,
  },
  channelTitle: {
    fontSize: 12,
  },
  btnItem: {
    padding: 6,
  },
});
