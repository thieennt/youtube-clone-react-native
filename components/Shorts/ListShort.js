import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ShortItem from './ShortItem';

const ListShort = () => {
  return (
    <FlatList
      horizontal={true}
      data={listShorts}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return <ShortItem url={item.url} name={item.name} views={item.views} />;
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default ListShort;

const listShorts = [
  {
    id: 1,
    url: 'https://s3-alpha-sig.figma.com/img/f9b2/a051/4f3e4ff2054dbdfc50d5aec7110ac294?Expires=1668384000&Signature=UxUo6Rv8PP1yjwsrL-jVYDLgS1Pye6LF3dnZ~5ZCeWiTZGKsqgAm9ZGJFh8FbdtFO6GLxK5AJK7~00ucSdW7X061lbww8zdzuMwc-reiZRSStN4FdacvNxsTdJJXqmTP2Ynf~1~WG2Fg8MeX742F-6cu4mWvw8W6jAR1uc6gJc9638u3bJXx8-idb9Py5HzZJ3aNajn2DO16-63YMtKvYnQeVI3H47O4zbN0F3-qOvabnL5Jfm07KEAH5G1CssD4hFeEPuBgQJqOJV4imACt2XM~a62WZ3r-WjKKrYI1lyltxxohGfXQ6SYbqPHJ3mfhqwuYFzaQ49PCc42T2W7BBA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'DIY Toys | Satisfying And Relaxing | DIY Tiktok Compilation..',
    views: '24M views',
  },
  {
    id: 2,
    url: 'https://s3-alpha-sig.figma.com/img/0bd7/45d9/3c5830af0ef938fceecdfa2cafd36088?Expires=1668384000&Signature=R4xysKDMQQ9p-xA95SqJpGOEDdlCnad0ptorYnUSPrQh8P3oWLLyRUNQPV1KsRSSSAQtFoTs2~R~PCIF5dxoTNYKgIfp2HfkH3pw8~FVeLnf6Nq-ehhi~gmIgEllHgAHTjSKqrk1rnFKB4kXBwVRN8fQCXvKVctKdKYevgtwMWG68XGGwqZxo8UraXR8N1JB8b10glwFp8-BbUSf5CJoch0I~x~8hlgjyOkc4d-HrE-eHnIkWmgIOzOJgGyPm-8WQLECOrMvFc4J6Vl1C9azHpXTyNe0kNio2H1xHeBXVzzxwTlsSTQbfbK2LycEAHyE~LgJ5Ha9Um6j4~1nUdCB3A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'DIY Toys | Satisfying And Relaxing | DIY Tiktok Compilation..',
    views: '24M views',
  },
  {
    id: 3,
    url: 'https://s3-alpha-sig.figma.com/img/383c/c478/3cd61406a18f6f13e1d5bb2bdcd06ed1?Expires=1668384000&Signature=VsLRnRgra~Ug9wBlfEpRYMAOQ4tb~JBl8S64LlFMtLJGVizRbqwhEMh7ezNJT7tR8gK-QBiNTuYTCTseHZXWL-LAh9NoutTiRFUbfSt9J81YUeNeEWRQR1rldx~wZ26LXeQnUwpEo5EgJVEj73mBh9V7~ui6LphE3IKF3hEE6AS05vAUSFd9U0obg0~B2LeaX0xj8FgCl07K2GOFxUXx7FXw5SVqqfiV0NIPBXaenadawpKrpyV3Hl1lJuRqtyiZRVIXUqHfZ2LS7tsO16VA3ZGVErNRsVmSCbze8kDpcHu-wJ6xrJZAI6VCF8zwJIcOmzDlQCui~MPCk7HnEA1phw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'DIY Toys | Satisfying And Relaxing | DIY Tiktok Compilation..',
    views: '24M views',
  },
  {
    id: 4,
    url: 'https://s3-alpha-sig.figma.com/img/f9b2/a051/4f3e4ff2054dbdfc50d5aec7110ac294?Expires=1668384000&Signature=UxUo6Rv8PP1yjwsrL-jVYDLgS1Pye6LF3dnZ~5ZCeWiTZGKsqgAm9ZGJFh8FbdtFO6GLxK5AJK7~00ucSdW7X061lbww8zdzuMwc-reiZRSStN4FdacvNxsTdJJXqmTP2Ynf~1~WG2Fg8MeX742F-6cu4mWvw8W6jAR1uc6gJc9638u3bJXx8-idb9Py5HzZJ3aNajn2DO16-63YMtKvYnQeVI3H47O4zbN0F3-qOvabnL5Jfm07KEAH5G1CssD4hFeEPuBgQJqOJV4imACt2XM~a62WZ3r-WjKKrYI1lyltxxohGfXQ6SYbqPHJ3mfhqwuYFzaQ49PCc42T2W7BBA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'DIY Toys | Satisfying And Relaxing | DIY Tiktok Compilation..',
    views: '24M views',
  },
];
