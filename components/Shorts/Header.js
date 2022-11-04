import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const ShortHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={styles.icon}
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/c512/7153/9e28c46dbf10d02cf38d537f66e298da?Expires=1668384000&Signature=LxQagnPJF0t~xpQl-fUCxjfv4e4JTDuvmgachibM3ewCPLPBOq~E6HhURLSFghf9STkDaifWhAcm2pe6F1UCuBTG~v~--AVLL-M6NtIyMECd7VZbpm8xsiH0enq~XNlbGQzeQXPqpaCKmYTLE~0Kdtv65cYMJuZhO6ProgR9Fo2pxp~zIp9WnZW1kGgcwInv1CmxKyMpzXJgT5Yxt8H-rhec7H-Tt-scYYkAHn-wZGm4l1XvPNKmiCmNEQuU0aUSBoEHGbuBQRXPtzf3Z~XNIE6IG8TK6o2nnEzwgkqJ5Geo2jS~4PMtKbjX7bGrXp0zeRMLfgEsZcwVLa3ndMoqEQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
          />
          <Text style={styles.title}>Shorts</Text>
        </View>
        <Text style={styles.subTitle}>BETA</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 29,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    paddingHorizontal: 8,
  },
  subTitle: {
    fontSize: 10,
    fontWeight: '400',
    color: '#9D9D9D',
  },
});

export default ShortHeader;
