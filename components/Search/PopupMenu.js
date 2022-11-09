import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export const PopupMenu = () => (
  <MenuProvider style={styles.container}>
    <Pressable>
      <Text>Download</Text>
    </Pressable>
    <Menu onSelect={value => alert(`Selected number: ${value}`)}>
      <MenuTrigger text="Select option" />
      <MenuOptions style={{backgroundColor: 'pink'}}>
        <MenuOption value={1} text="One" />
        <MenuOption value={2}>
          <Text style={{color: 'red'}}>Two</Text>
        </MenuOption>
        <MenuOption value={3} disabled={true} text="Three" />
      </MenuOptions>
    </Menu>
  </MenuProvider>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'green',
    width: 120,
    height: 300,
  },
});
