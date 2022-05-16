/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {HomeHeader} from '#/components/partial';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <HomeHeader />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFF1D2',
  },
  container: {
    paddingHorizontal: 50,
    paddingTop: 37,
  },
});

export default App;
