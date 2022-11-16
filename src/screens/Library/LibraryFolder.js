import React from 'react';
import {StyleSheet, View} from 'react-native';
import CheckCircleIcon from '../../../assets/icons/library/CheckCircle';
import DownloadIcon from '../../../assets/icons/library/Download';
import MovieIcon from '../../../assets/icons/library/Movie';
import VideoIcon from '../../../assets/icons/library/Video';
import {FolderItem} from './FolderItem';

export function LibraryFolder() {
  return (
    <View style={styles.container}>
      <FolderItem icon={<VideoIcon />} label="Your videos" textColor="black" />
      <FolderItem
        icon={<DownloadIcon />}
        label="Downloads"
        checkIcon={<CheckCircleIcon />}
        subLabel="1 video"
        textColor="black"
      />
      <FolderItem icon={<MovieIcon />} label="Your movies" textColor="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0.5,
    borderTopColor: '#CECECE',
    borderBottomWidth: 0.9,
    borderBottomColor: '#CECECE',
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: 'white',
    marginVertical: 12,
  },
});
