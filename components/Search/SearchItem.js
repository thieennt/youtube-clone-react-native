import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import RemoveSearchIcon from '../../assets/icons/RemoveSearch';
import SearchHistoryIcon from '../../assets/icons/SearchHistory';

const SearchItem = props => {
  return (
    <View style={styles.container}>
      <SearchHistoryIcon />
      <Text style={styles.text}>{props.title}</Text>
      <RemoveSearchIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 24,
    paddingHorizontal: 12,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 13,
    color: 'black',
    paddingHorizontal: 12,
    flex: 1,
  },
});

export default SearchItem;
