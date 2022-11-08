import React from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import UserAvatar from '../UserAvatar';

const Subcription = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.channelInfo}>
          <UserAvatar
            width={36}
            height={36}
            avatar="https://s3-alpha-sig.figma.com/img/aca9/93c1/4e7aed7670bc25a3651f41d7e847a68b?Expires=1668384000&Signature=Hwj78kQJWQztkvoMNYwF5z4y~SFWHCwu5YN9B8wQLWg3HuypuP3h7hA3mIGCOrrBSRUvQrTKw4yZMtYPNXWXvQyBAtt~WcsyVNIZlOyE9lf0S~uRF3A88TwWYHstHCAKmpPq7sw6zjoxPBiFAdVEGpHubzvYrZZMMkL8GZU44KeSKaq-a3elztVVSD46OIxKLwh1LzEIU2NWRwJb-Vy19YiJVYPsJPei3myy~qnXi22FkqVNWxdwxj5aSANsZcbPM9lB9I-rlVysk1OE3K97RqEwC0qe-mUSftmP26tWQkk5XIKcdRDhYHv7XEr~s~2DwMCaDqFlnjOQVX2jaD8r6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          />
          <View style={styles.channelDetail}>
            <Text style={styles.name}>Voice of Books</Text>
            <Text style={styles.subcribe}>289K subscibe</Text>
          </View>
        </View>
        <Pressable>
          <Text style={styles.btnSubscribe}>SUBSCRIBE</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#CECECE',
    borderBottomWidth: 1,
    borderBottomColor: '#CECECE',
    marginVertical: 12,
  },
  wrapper: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },

  channelInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  channelDetail: {
    paddingLeft: 16,
  },
  name: {
    fontSize: 16,
    color: 'black',
  },
  subcribe: {
    fontSize: 12,
  },

  btnSubscribe: {
    color: '#FF0000',
    fontWeight: '500',
  },
});

export default Subcription;
