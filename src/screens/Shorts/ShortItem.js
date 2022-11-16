import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import MoreVerticalIcon from '../../assets/icons/MoreVertical';

const ShortItem = props => {
  return (
    <View style={styles.shortItem}>
      <ImageBackground
        source={{
          uri: props.url,
        }}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.icon}>
          <MoreVerticalIcon color="#FFF" style={{textAlign: 'right'}} />
        </View>
        <View>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.views}>{props.views} views</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  shortItem: {
    marginLeft: 12,
  },
  'shortItem:last-child': {
    marginRight: 25,
  },
  image: {
    width: 150,
    height: 250,
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    color: 'white',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 10,
  },
  views: {
    color: 'white',
    fontSize: 10,
    fontWeight: '500',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  icon: {
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default ShortItem;
