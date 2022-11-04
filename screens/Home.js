import React from 'react';
import {ScrollView, View} from 'react-native';
import Header from '../components/Header';
import ShortSection from '../components/Shorts';
import TopNavigation from '../components/TopNavigation';
import VideoItem from '../components/Video';

const HomeScreen = props => {
  return (
    <>
      <Header />
      <ScrollView>
        <View>
          <TopNavigation />
          <VideoItem
            url={
              'https://s3-alpha-sig.figma.com/img/ebb3/4927/e8f9389e785e35731f79557befaba85d?Expires=1668384000&Signature=Pe-a7CvB3dGZCizD6yW82JgwoikfZ3SYKUWxMi7hbvjSeHmNbYDmTltXPVaH1jjYjB4NYvhJjAYawVZqmdLCktUA7AklvK~Kk9jQ~bOxGqpibaxniZNdONbEtCI2vVyCo0-ihhGPIvtnucBufUKbgGebz2~r6sBBF1F8YhjbuPE8mf5l3Wour8mROFl03Y27cq1VMf8CksrIJEBX2iQVn4r38dMEqFzns3gl88em-HAvH8r5YftFAKU2d0wi6xu0T8DtNhWDpDponljW15vtPiuUZGlu2SYrramr3nWPGwhTC2Hsd3BqtXhzY5cewzNDCVJ~Wv370gxm8JS3WIzw1g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            }
            avatar={
              'https://s3-alpha-sig.figma.com/img/aca9/93c1/4e7aed7670bc25a3651f41d7e847a68b?Expires=1668384000&Signature=Hwj78kQJWQztkvoMNYwF5z4y~SFWHCwu5YN9B8wQLWg3HuypuP3h7hA3mIGCOrrBSRUvQrTKw4yZMtYPNXWXvQyBAtt~WcsyVNIZlOyE9lf0S~uRF3A88TwWYHstHCAKmpPq7sw6zjoxPBiFAdVEGpHubzvYrZZMMkL8GZU44KeSKaq-a3elztVVSD46OIxKLwh1LzEIU2NWRwJb-Vy19YiJVYPsJPei3myy~qnXi22FkqVNWxdwxj5aSANsZcbPM9lB9I-rlVysk1OE3K97RqEwC0qe-mUSftmP26tWQkk5XIKcdRDhYHv7XEr~s~2DwMCaDqFlnjOQVX2jaD8r6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            }
            title="The Beauty of Existence - Heart Touching Nasheed"
            views="19,210,251"
            timer="Jul 1, 2016"
          />
          <ShortSection />
          <VideoItem
            url={
              'https://s3-alpha-sig.figma.com/img/2f45/0696/c8446c9ce57d3e0281cd9429ba2fea90?Expires=1668384000&Signature=aFrS6u1GNpOKLQDoqSOyDe-DOTDA~HSdLoFZcRHyxBHdRiLMsjk2XSeF6AAiI6upay17KvSl5p5wFJZtJZWhjl9QC4vaMOFpnz1BE5efjtCS2ZLSIgo5cvALYSwvTPnt4EpV8QlF43sfl8mOuB0JI6OLRKhbj4PH5yF6ry5Z6S3Ng-KzUDlEZaPL6dZcM7smzchYgjG1l8jS83KDQCBmWdY1TzZEgBzuxaKFVsW7g8jf724KEyGeQ2WZfT0Xy6vpPW8din3eeKsWTLFZU7t3PR9wKrLBQioTYWL6saBDoVZsC5~BjmNTVLHR82OBYpGHenSApBqLK6-yHRZ2pECqUA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            }
            avatar={
              'https://s3-alpha-sig.figma.com/img/aca9/93c1/4e7aed7670bc25a3651f41d7e847a68b?Expires=1668384000&Signature=Hwj78kQJWQztkvoMNYwF5z4y~SFWHCwu5YN9B8wQLWg3HuypuP3h7hA3mIGCOrrBSRUvQrTKw4yZMtYPNXWXvQyBAtt~WcsyVNIZlOyE9lf0S~uRF3A88TwWYHstHCAKmpPq7sw6zjoxPBiFAdVEGpHubzvYrZZMMkL8GZU44KeSKaq-a3elztVVSD46OIxKLwh1LzEIU2NWRwJb-Vy19YiJVYPsJPei3myy~qnXi22FkqVNWxdwxj5aSANsZcbPM9lB9I-rlVysk1OE3K97RqEwC0qe-mUSftmP26tWQkk5XIKcdRDhYHv7XEr~s~2DwMCaDqFlnjOQVX2jaD8r6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            }
            title="The Beauty of Existence - Heart Touching Nasheed"
            views="19,210,251"
            timer="Jul 1, 2016"
          />
          <VideoItem
            url={
              'https://s3-alpha-sig.figma.com/img/d82b/565c/a4eb0ed2b1c9a215e5f4fe755f641ee9?Expires=1668384000&Signature=AoS0d-93KVCTZF1RpffoHXUm0RwmySbiJLQwfPgiBsQwuRaxHmaXlhlhzu~qXQwXyjEpDGl8VD88kglDQ0uC57-g~knZu3oNnayhQyFit8Ic3PvRDVJ56hq75RXtWubDYMiM3aJxrAX1163JVmge2qKA7w6bE1LnJBQuAXYjeb0CNr4HIursSaRQBySFEeYwKBvrRUhmeO7dgsDHJEtxhmaqEUfZe3bKhMoPjei5hNZp0skqNHGILhVxXFkjO9GPhxEampZrajO490g7U5xjz3iSNR7sgKFAR6sbwlN3g9L660qINwN~K4vgObWZuf0cwB5cYls2vwmEZXrlst0N4Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            }
            avatar={
              'https://s3-alpha-sig.figma.com/img/aca9/93c1/4e7aed7670bc25a3651f41d7e847a68b?Expires=1668384000&Signature=Hwj78kQJWQztkvoMNYwF5z4y~SFWHCwu5YN9B8wQLWg3HuypuP3h7hA3mIGCOrrBSRUvQrTKw4yZMtYPNXWXvQyBAtt~WcsyVNIZlOyE9lf0S~uRF3A88TwWYHstHCAKmpPq7sw6zjoxPBiFAdVEGpHubzvYrZZMMkL8GZU44KeSKaq-a3elztVVSD46OIxKLwh1LzEIU2NWRwJb-Vy19YiJVYPsJPei3myy~qnXi22FkqVNWxdwxj5aSANsZcbPM9lB9I-rlVysk1OE3K97RqEwC0qe-mUSftmP26tWQkk5XIKcdRDhYHv7XEr~s~2DwMCaDqFlnjOQVX2jaD8r6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            }
            title="The Beauty of Existence - Heart Touching Nasheed"
            views="19,210,251"
            timer="Jul 1, 2016"
          />
          <VideoItem
            url={
              'https://s3-alpha-sig.figma.com/img/f560/9981/28661de264397783636c858fa5365302?Expires=1668384000&Signature=Jk~sVNC6EZjpAognb-OWieT4RYWyVnYc2UCOokYeLDKudXSF6MniQ8TM61FlhDczqwTYympE2Czeg5UTobEkhDg5-eoAiM83CSvLtRiDF0DOJWwW6OAhK6San33K6mIXK~TT3lpjw~ghe0Ta1jQjTYDMulrU-UNyXQ5j53lMwD8BlJ~GaYr7iSB0S8Zn4nZ7xi1aviU5AXZ7fKfCf2ece~k5kUOJMGxDnilWjKe8sVo~kLnxZNbrl6k1oJ2j0vZKrMdNh6T1SsCxKnafPa~tYWM9AAQdZWKnxQsepuxDhGaFdj0uy4qnr~x~p5bvYg9az5BsNWwhKYA7CHCB~wa3cA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            }
            avatar={
              'https://s3-alpha-sig.figma.com/img/aca9/93c1/4e7aed7670bc25a3651f41d7e847a68b?Expires=1668384000&Signature=Hwj78kQJWQztkvoMNYwF5z4y~SFWHCwu5YN9B8wQLWg3HuypuP3h7hA3mIGCOrrBSRUvQrTKw4yZMtYPNXWXvQyBAtt~WcsyVNIZlOyE9lf0S~uRF3A88TwWYHstHCAKmpPq7sw6zjoxPBiFAdVEGpHubzvYrZZMMkL8GZU44KeSKaq-a3elztVVSD46OIxKLwh1LzEIU2NWRwJb-Vy19YiJVYPsJPei3myy~qnXi22FkqVNWxdwxj5aSANsZcbPM9lB9I-rlVysk1OE3K97RqEwC0qe-mUSftmP26tWQkk5XIKcdRDhYHv7XEr~s~2DwMCaDqFlnjOQVX2jaD8r6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            }
            title="The Beauty of Existence - Heart Touching Nasheed"
            views="19,210,251"
            timer="Jul 1, 2016"
          />
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
