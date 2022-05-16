import * as React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import {Text} from '#/components/base';
import {Props} from './PlaceCta.types';

const PlaceCta = ({style, img, imgLabel, description, location}: Props) => (
  <View style={style}>
    <View style={styles.imgContainer}>
      <View style={styles.label}>
        <Text>{imgLabel}</Text>
      </View>
      <Image source={img} style={styles.img} />
    </View>
    <Text style={styles.description}>{description}</Text>
    <Text color="#858585">{location}</Text>
  </View>
);

const styles = StyleSheet.create({
  imgContainer: {
    height: 105,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 20,
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  label: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#FFA500',
    overflow: 'hidden',
    borderBottomLeftRadius: 8,
  },
  description: {
    marginBottom: 7,
  },
});

export default PlaceCta;
