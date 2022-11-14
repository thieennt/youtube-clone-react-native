import {Button, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {globalStyles} from '../styles';
import CameraIcon from '../assets/icons/Camera';

export function AvatarScreen() {
  const [image, setImage] = useState(
    'https://s3-alpha-sig.figma.com/img/51e2/a137/6a691a2bb1288149da9cadbfb936b026?Expires=1668384000&Signature=BReyfm9-ep4bS4F2xp5zCxPyl1MOsBac2oQf-oN7tVNWrf~jyQbqLyWjdOHkHNH~HY7Zr8eku6G~n1THHk8aX4xZ5xpGQtLZX4lcZxqi404Yi6GWzfUHyrWWPdegIrtgUIngGjs3PTE9IO0RXQ1NxQDUw5snpPQbvXID87O6MMnYaJAQ~95GitxRgksBWmPsVmL7-VB2rxrDQRNfBStwpw2-GmJlHF1ylmbO5IxiF4v1mrR7Yttiz9mbE-G0umVt6bbzEzCWkqTQTK8EwFnK967HAn4Z5nyHAKdlJE8lYUEsI1yhDUIMO51h3fEMK76gRT3e~GK-ghEa7eyIy-ptsQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  );

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
    <View style={styles.container}>
      <View style={{borderRadius: 50, paddingBottom: 12}}>
        <Image style={styles.avatar} source={{uri: image}} />
      </View>
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
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 24,
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  btn: {
    padding: 10,
    backgroundColor: 'orange',
    color: 'white',
    width: 180,
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
