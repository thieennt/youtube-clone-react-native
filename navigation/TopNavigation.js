import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ExploreIcon from '../assets/icons/Explore';

const TopNavigation = () => {
  const [categories, setCategories] = useState(ListCategories);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [selected, setSelected] = useState(false);

  const handleSeclect = index => {
    setSelectedIndex(index) && setSelected(!selected);
    console.log(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.exploreWrapper}>
          <ExploreIcon />
          <Text style={styles.exploreTitle}>Explore</Text>
        </View>
        <View style={styles.borderVertical} />
        <View style={styles.exploreList}>
          <FlatList
            horizontal={true}
            data={categories}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <Text
                  style={
                    selectedIndex !== item.id
                      ? styles.exploreItem
                      : styles.exploreItemSelected
                  }
                  onPress={() => handleSeclect(item.id)}>
                  {item.name}
                </Text>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingBottom: 12,
    backgroundColor: '#fff',
  },

  wrapper: {
    paddingTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 0.8,
    borderTopColor: '#CECECE',
  },

  exploreWrapper: {
    width: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#ECECEC',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    marginRight: 16,
  },

  exploreTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },

  borderVertical: {
    width: 1,
    height: 24,
    backgroundColor: '#CECECE',
  },

  exploreList: {
    flex: 1,
    paddingLeft: 16,
  },

  exploreItem: {
    color: '#000',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#CECECE',
    backgroundColor: '#ECECEC',
    marginRight: 5,
  },

  exploreItemSelected: {
    color: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#6C6C6C',
    backgroundColor: '#3B3B3B',
    marginRight: 5,
  },
});

export default TopNavigation;

const ListCategories = [
  {id: 1, name: 'All'},
  {id: 2, name: 'Mixes'},
  {id: 3, name: 'Music'},
  {id: 4, name: 'Graphic Design'},
  {id: 5, name: 'Video'},
  {id: 6, name: 'Top trending'},
  {id: 7, name: 'Film'},
  {id: 8, name: 'Show'},
  {id: 9, name: 'Learning'},
  {id: 10, name: 'React Native'},
];
