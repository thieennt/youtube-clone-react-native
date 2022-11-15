import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import Header from '../components/Header';
import {CardItem} from '../components/Search/CardItem';
import ShortSection from '../components/Shorts';
import TopNavigation from '../navigation/TopNavigation';

export const HomeScreen = props => {
  const [listVideo, setListVideo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleFetchData();
  }, []);

  const handleFetchData = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&q=react-native&type=video&key=AIzaSyB_CxzJp0WG9pI2Ojt1jV12BQDkyAABrQw`,
    );

    const data = await response.json();
    setListVideo(data.items);
    setLoading(false);
  };

  return (
    <>
      <Header />
      <ScrollView>
        <View>
          <TopNavigation />
          {!loading && listVideo ? (
            <>
              {listVideo.map(item => (
                <CardItem
                  key={item.id.videoId}
                  thumbnail={item.snippet.thumbnails.high.url}
                  videoId={item.id.videoId}
                  avatar={
                    'https://s3-alpha-sig.figma.com/img/aca9/93c1/4e7aed7670bc25a3651f41d7e847a68b?Expires=1668384000&Signature=Hwj78kQJWQztkvoMNYwF5z4y~SFWHCwu5YN9B8wQLWg3HuypuP3h7hA3mIGCOrrBSRUvQrTKw4yZMtYPNXWXvQyBAtt~WcsyVNIZlOyE9lf0S~uRF3A88TwWYHstHCAKmpPq7sw6zjoxPBiFAdVEGpHubzvYrZZMMkL8GZU44KeSKaq-a3elztVVSD46OIxKLwh1LzEIU2NWRwJb-Vy19YiJVYPsJPei3myy~qnXi22FkqVNWxdwxj5aSANsZcbPM9lB9I-rlVysk1OE3K97RqEwC0qe-mUSftmP26tWQkk5XIKcdRDhYHv7XEr~s~2DwMCaDqFlnjOQVX2jaD8r6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                  }
                  title={item.snippet.title}
                  views="1,210,251"
                  timer={item.snippet.publishTime}
                  channelId={item.snippet.channelId}
                  channelTitle={item.snippet.channelTitle}
                />
              ))}
            </>
          ) : null}
          <ShortSection />
        </View>
      </ScrollView>
    </>
  );
};
