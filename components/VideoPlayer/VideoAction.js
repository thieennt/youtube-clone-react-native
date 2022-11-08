import React from 'react';
import {StyleSheet, View} from 'react-native';
import DisLikeIcon from '../../assets/icons/actions/DisLike';
import DownloadIcon from '../../assets/icons/actions/Download';
import LikeIcon from '../../assets/icons/actions/Like';
import SaveIcon from '../../assets/icons/actions/Save';
import ShareIcon from '../../assets/icons/actions/Share';
import ActionItem from './ActionItem';

const VideoAction = () => {
  return (
    <View style={styles.container}>
      <ActionItem icon={<LikeIcon />} text="25.6K" />
      <ActionItem icon={<DisLikeIcon />} text="101" />
      <ActionItem icon={<ShareIcon />} text="Share" />
      <ActionItem icon={<DownloadIcon />} text="Download" />
      <ActionItem icon={<SaveIcon />} text="Save" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default VideoAction;
