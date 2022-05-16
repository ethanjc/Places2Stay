import * as React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';

import {Text} from '#/components/base';
import text from './placeholderText';

const HomeHeader = ({style}: {style: ViewStyle}) => (
  <View style={style}>
    <Text variant="heading" style={styles.title}>
      {text.title}
    </Text>
    <Text>{text.description}</Text>
  </View>
);

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
  },
});

export default HomeHeader;
