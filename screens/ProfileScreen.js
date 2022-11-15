import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import CameraIcon from '../assets/icons/Camera';
import {ProfileHeader} from '../components/Profile/Header';
import ListItem from '../components/Profile/ListItem';
import {globalStyles} from '../styles';

export function ProfileScreen() {
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState(
    'https://s3-alpha-sig.figma.com/img/51e2/a137/6a691a2bb1288149da9cadbfb936b026?Expires=1668384000&Signature=BReyfm9-ep4bS4F2xp5zCxPyl1MOsBac2oQf-oN7tVNWrf~jyQbqLyWjdOHkHNH~HY7Zr8eku6G~n1THHk8aX4xZ5xpGQtLZX4lcZxqi404Yi6GWzfUHyrWWPdegIrtgUIngGjs3PTE9IO0RXQ1NxQDUw5snpPQbvXID87O6MMnYaJAQ~95GitxRgksBWmPsVmL7-VB2rxrDQRNfBStwpw2-GmJlHF1ylmbO5IxiF4v1mrR7Yttiz9mbE-G0umVt6bbzEzCWkqTQTK8EwFnK967HAn4Z5nyHAKdlJE8lYUEsI1yhDUIMO51h3fEMK76gRT3e~GK-ghEa7eyIy-ptsQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  );

  console.log('image', image);

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  };

  return (
    <>
      <ProfileHeader />
      <View style={styles.container}>
        <View style={{alignItems: 'center', paddingVertical: 10}}>
          <View
            style={{
              borderRadius: 50,
              paddingBottom: 12,
              position: 'relative',
              width: 150,
              alignItems: 'center',
            }}>
            <Image style={styles.avatar} source={{uri: image}} />
            <Pressable
              style={styles.avatarIcon}
              onPress={() => setShowModal(!showModal)}>
              <CameraIcon />
            </Pressable>
          </View>
        </View>
        <ListItem />
        {showModal && (
          <View style={styles.modalAvatar}>
            <Pressable onPress={takePhotoFromCamera} style={styles.btn}>
              <CameraIcon />
              <Text style={[globalStyles.textBlack, {paddingLeft: 12}]}>
                Take a photo
              </Text>
            </Pressable>
            <Pressable onPress={choosePhotoFromLibrary} style={styles.btn}>
              <Text style={[globalStyles.textBlack, {paddingLeft: 12}]}>
                Choose from library
              </Text>
            </Pressable>
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: 'white',
    flex: 1,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  avatarIcon: {
    position: 'absolute',
    bottom: 0,
    right: '10%',
    top: '70%',
    width: 30,
    height: 30,
    backgroundColor: '#ECECEC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  btn: {
    padding: 10,
    color: 'white',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  modalAvatar: {
    backgroundColor: 'white',
    borderRadius: 8,
    position: 'absolute',
    left: '25%',
    right: '25%',
    top: '22%',
    paddingVertical: 12,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});
