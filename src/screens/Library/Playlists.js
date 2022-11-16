import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CaretDownIcon from '../../assets/icons/CaretDown';
import {FolderItem} from '../../components/FolderItem';
import PlusIcon from '../../assets/icons/library/Plus';
import WatchLaterIcon from '../../assets/icons/library/WatchLater';
import {globalStyles} from '../../styles';

export function Playlists() {
  return (
    <View style={globalStyles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.title}>Playlists</Text>
        <View style={styles.rightSection}>
          <Text style={styles.headerText}>Recently added</Text>
          <CaretDownIcon />
        </View>
      </View>
      <View>
        <FolderItem
          icon={<PlusIcon />}
          label="New Playlist"
          textColor="#068BFF"
        />
        <FolderItem
          icon={<WatchLaterIcon />}
          label="Watch later"
          textColor="black"
        />
        <FolderItem
          image="https://s3-alpha-sig.figma.com/img/f560/9981/28661de264397783636c858fa5365302?Expires=1668384000&Signature=Jk~sVNC6EZjpAognb-OWieT4RYWyVnYc2UCOokYeLDKudXSF6MniQ8TM61FlhDczqwTYympE2Czeg5UTobEkhDg5-eoAiM83CSvLtRiDF0DOJWwW6OAhK6San33K6mIXK~TT3lpjw~ghe0Ta1jQjTYDMulrU-UNyXQ5j53lMwD8BlJ~GaYr7iSB0S8Zn4nZ7xi1aviU5AXZ7fKfCf2ece~k5kUOJMGxDnilWjKe8sVo~kLnxZNbrl6k1oJ2j0vZKrMdNh6T1SsCxKnafPa~tYWM9AAQdZWKnxQsepuxDhGaFdj0uy4qnr~x~p5bvYg9az5BsNWwhKYA7CHCB~wa3cA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          label="Liked Videos"
          textColor="black"
          subLabel="5 videos"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: 'black',
    paddingRight: 6,
    fontSize: 14,
  },
});
