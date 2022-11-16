import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, TextInput, View} from 'react-native';
import ArrowLeftIcon from '../../../assets/icons/ArrowLeft';
import VoiceIcon from '../../../assets/icons/Voice';
import {CardItem} from '../../components/CardItem';
import SearchItem from './SearchItem';

export const SearchScreen = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState([]);

  const handleSearchYoutube = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&type=video&key=AIzaSyB_CxzJp0WG9pI2Ojt1jV12BQDkyAABrQw`,
    );

    const data = await response.json();
    setSearchResult(data.items);
    setLoading(false);
    setSearchKeyword([...searchKeyword, value]);
  };

  const handleRemove = index => {
    setSearchKeyword(prev => {
      const newKeywords = [...prev];
      newKeywords.splice(index, 1);
      return newKeywords;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <ArrowLeftIcon />
        </Pressable>
        <TextInput
          value={value}
          onChangeText={text => setValue(text)}
          placeholder="Search on Youtube"
          style={styles.searchInput}
          onSubmitEditing={() => handleSearchYoutube()}
          autoFocus
        />
        <Pressable style={styles.searchVoice}>
          <VoiceIcon />
        </Pressable>
      </View>
      <ScrollView>
        {!loading && searchResult ? (
          <>
            {searchResult.map(item => (
              <CardItem
                key={item.id.videoId}
                thumbnail={item.snippet.thumbnails.high.url}
                videoId={item.id.videoId}
                avatar={
                  'https://s3-alpha-sig.figma.com/img/aca9/93c1/4e7aed7670bc25a3651f41d7e847a68b?Expires=1668384000&Signature=Hwj78kQJWQztkvoMNYwF5z4y~SFWHCwu5YN9B8wQLWg3HuypuP3h7hA3mIGCOrrBSRUvQrTKw4yZMtYPNXWXvQyBAtt~WcsyVNIZlOyE9lf0S~uRF3A88TwWYHstHCAKmpPq7sw6zjoxPBiFAdVEGpHubzvYrZZMMkL8GZU44KeSKaq-a3elztVVSD46OIxKLwh1LzEIU2NWRwJb-Vy19YiJVYPsJPei3myy~qnXi22FkqVNWxdwxj5aSANsZcbPM9lB9I-rlVysk1OE3K97RqEwC0qe-mUSftmP26tWQkk5XIKcdRDhYHv7XEr~s~2DwMCaDqFlnjOQVX2jaD8r6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                }
                title={item.snippet.title}
                views="19,210,251"
                timer={item.snippet.publishTime}
                channelId={item.snippet.channelId}
                channelTitle={item.snippet.channelTitle}
              />
            ))}
          </>
        ) : (
          <>
            {searchKeyword &&
              searchKeyword.map((item, index) => (
                <SearchItem
                  title={item}
                  key={index}
                  handleRemove={handleRemove}
                />
              ))}
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#ECECEC',
    marginHorizontal: 12,
    paddingVertical: 4,
  },
  searchVoice: {
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: '#ECECEC',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

const listSearch = [
  {id: 1, title: 'react native'},
  {id: 2, title: 'react navigation'},
  {id: 3, title: 'react native with redux'},
  {id: 4, title: 'redux saga with react native'},
  {id: 5, title: 'christmas songs '},
  {id: 6, title: 'react native'},
  {id: 7, title: 'react native'},
];
