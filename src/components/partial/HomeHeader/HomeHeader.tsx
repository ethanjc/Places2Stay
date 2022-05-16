import * as React from 'react';
import {View} from 'react-native';

import {Text} from '#/components/base';
import text from './placeholderText';

const HomeHeader = () => (
  <View>
    <Text variant="heading" style={{marginBottom: 20}}>
      {text.title}
    </Text>
    <Text>{text.description}</Text>
  </View>
);

export default HomeHeader;
