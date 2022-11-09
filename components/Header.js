import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import ConnectIcon from '../assets/icons/Connect';
import NotifyIcon from '../assets/icons/Notify';
import SearchIcon from '../assets/icons/Search';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://s3-alpha-sig.figma.com/img/4d89/a00a/7848f66e9291878806f3c838dcee4b1a?Expires=1668384000&Signature=NRwATtHZzbSIdVGy1ABym9gvm7Icyu8eXroVdBz61wO3xBB~rAuo9LM5aWoFub8tTNBOhjFXgXxJZ4dPa0VFsQLM85VPPA6PLyc55pA4olm9yuT7E3zB0iCu0ZRrrP2zpQmsVe~MLky6J40ocz6ukJqC5i7KSP7ig9GMdcuh~nMk1k96otBtU70kg3p89M7lhB8MggBlOikOaU9S7tBDtpWDaXCw7oPblcD0t3JCCj8YgZCeGiHwlqFycoTBqFMfvS4CcYe~0mox3x0BEWaAeW~VJLrH4C4zH8xQ7YFpPZiz8Y1dvKIKNIgJBdC9F7zHfJxaNatTIha3lQWT8e8tIQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        }}
      />
      <View style={styles.rightSection}>
        <ConnectIcon />
        <Pressable>
          <NotifyIcon />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('SearchScreen')}>
          <SearchIcon />
        </Pressable>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/51e2/a137/6a691a2bb1288149da9cadbfb936b026?Expires=1668384000&Signature=BReyfm9-ep4bS4F2xp5zCxPyl1MOsBac2oQf-oN7tVNWrf~jyQbqLyWjdOHkHNH~HY7Zr8eku6G~n1THHk8aX4xZ5xpGQtLZX4lcZxqi404Yi6GWzfUHyrWWPdegIrtgUIngGjs3PTE9IO0RXQ1NxQDUw5snpPQbvXID87O6MMnYaJAQ~95GitxRgksBWmPsVmL7-VB2rxrDQRNfBStwpw2-GmJlHF1ylmbO5IxiF4v1mrR7Yttiz9mbE-G0umVt6bbzEzCWkqTQTK8EwFnK967HAn4Z5nyHAKdlJE8lYUEsI1yhDUIMO51h3fEMK76gRT3e~GK-ghEa7eyIy-ptsQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },

  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.8,
    borderBottomColor: '#CECECE',
  },
  logo: {
    width: '30%',
    height: 30,
  },
  rightSection: {
    width: 160,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 50,
  },
});

export default Header;
