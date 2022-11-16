import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FolderItem} from '../../components/FolderItem';
import ChannelIcon from '../../assets/icons/profile/Channel';
import StudioIcon from '../../assets/icons/profile/Studio';
import ExploreIcon from '../../assets/icons/profile/Explore';
import TimeIcon from '../../assets/icons/profile/Time';
import SwitchIcon from '../../assets/icons/profile/Switch';
import IncognitoIcon from '../../assets/icons/profile/Incognito';
import DataIcon from '../../assets/icons/profile/Data';
import SettingIcon from '../../assets/icons/profile/Setting';
import HelpIcon from '../../assets/icons/profile/Help';

export default function ListItem() {
  return (
    <View>
      <FolderItem
        icon={<ChannelIcon />}
        label="Your Channel"
        textColor="black"
      />
      <FolderItem
        icon={<StudioIcon />}
        label="Youtube Studio"
        checkIcon={<ExploreIcon />}
        textColor="black"
      />
      <FolderItem icon={<TimeIcon />} label="Time watched" textColor="black" />
      <View style={{height: 1, width: '100%', backgroundColor: '#ECECEC'}} />
      <FolderItem
        icon={<SwitchIcon />}
        label="Switch Account"
        textColor="black"
      />
      <FolderItem
        icon={<IncognitoIcon />}
        label="Turn on Incognito"
        textColor="black"
      />
      <FolderItem
        icon={<DataIcon />}
        label="Your data in YouTube"
        textColor="black"
      />
      <View style={{height: 1, width: '100%', backgroundColor: '#ECECEC'}} />
      <FolderItem icon={<SettingIcon />} label="Settings" textColor="black" />
      <FolderItem
        icon={<HelpIcon />}
        label="Help and feedback"
        textColor="black"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
