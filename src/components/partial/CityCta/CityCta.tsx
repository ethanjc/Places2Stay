import * as React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import {Text} from '#/components/base';
import {Props} from './CityCta.types';

const CityCta = ({style, image, title}: Props) => (
  <View style={style}>
    <Image source={image} style={styles.img} />
    <Text>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  img: {
    height: 160,
    width: 120,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 7,
  },
});

export default CityCta;
