import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CommentIcon from '../../assets/icons/CaretDownUp';
import CommentItem from './CommentItem';

const ListComment = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>Comment</Text>
          <Text style={styles.quantity}>102</Text>
        </View>
        <CommentIcon />
      </View>
      <CommentItem />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textWrapper: {
    flexDirection: 'row',
  },
  text: {
    color: 'black',
    paddingRight: 6,
    fontSize: 12,
  },
  quantity: {
    fontSize: 12,
  },
});

export default ListComment;
