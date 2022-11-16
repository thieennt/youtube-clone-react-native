import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

export function FolderItem(props) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {props.icon ? (
          <Pressable style={styles.icon}>{props.icon}</Pressable>
        ) : (
          <Pressable style={styles.icon}>
            <Image
              style={styles.image}
              source={{
                uri: props.image,
              }}
            />
          </Pressable>
        )}

        <View>
          <Text style={{color: props.textColor}}>{props.label}</Text>
          {props.subLabel ? <Text>{props.subLabel}</Text> : ''}
        </View>
      </View>
      {props.checkIcon ? <Pressable>{props.checkIcon}</Pressable> : ''}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 36,
    height: 36,
    resizeMode: 'cover',
  },
  icon: {
    width: 48,
  },
});
