import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import UserAvatar from '../UserAvatar';

const CommentItem = props => {
  return (
    <View style={styles.container}>
      <UserAvatar
        width={20}
        height={20}
        avatar="https://s3-alpha-sig.figma.com/img/aca9/93c1/4e7aed7670bc25a3651f41d7e847a68b?Expires=1668384000&Signature=Hwj78kQJWQztkvoMNYwF5z4y~SFWHCwu5YN9B8wQLWg3HuypuP3h7hA3mIGCOrrBSRUvQrTKw4yZMtYPNXWXvQyBAtt~WcsyVNIZlOyE9lf0S~uRF3A88TwWYHstHCAKmpPq7sw6zjoxPBiFAdVEGpHubzvYrZZMMkL8GZU44KeSKaq-a3elztVVSD46OIxKLwh1LzEIU2NWRwJb-Vy19YiJVYPsJPei3myy~qnXi22FkqVNWxdwxj5aSANsZcbPM9lB9I-rlVysk1OE3K97RqEwC0qe-mUSftmP26tWQkk5XIKcdRDhYHv7XEr~s~2DwMCaDqFlnjOQVX2jaD8r6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      />
      <View style={styles.wrapper}>
        <View style={styles.userInfo}>
          <Text style={styles.name}>Taylor Swift</Text>
          <View style={styles.dot} />
          <Text style={styles.time}>5 months ago</Text>
        </View>
        <Text style={styles.comment}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
          ipsum eget odio ornare fringilla.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapper: {
    flex: 1,
    paddingLeft: 12,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 12,
  },
  dot: {
    width: 2,
    height: 2,
    borderRadius: 25,
    backgroundColor: '#6C6C6C',
    marginHorizontal: 8,
  },
  time: {fontSize: 12},
  comment: {
    fontSize: 12,
    color: 'black',
  },
});

export default CommentItem;
