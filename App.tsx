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
import {SafeAreaView, View, StyleSheet, ScrollView} from 'react-native';
import {HomeHeader, PlaceCta, Search} from '#/components/partial';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView>
        <View style={styles.container}>
          <Search style={styles.search} />

          <HomeHeader style={styles.header} />

          <PlaceCta
            img={require('#/static/placeholder.jpg')}
            imgLabel="From $126"
            description="408 St. Jacques | 1 Br"
            location="Old Montreal, Montreal"
            style={styles.placeCta}
          />
          <PlaceCta
            img={require('#/static/placeholder.jpg')}
            imgLabel="From $126"
            description="408 St. Jacques | 1 Br"
            location="Old Montreal, Montreal"
            style={styles.placeCta}
          />
          <PlaceCta
            img={require('#/static/placeholder.jpg')}
            imgLabel="From $126"
            description="408 St. Jacques | 1 Br"
            location="Old Montreal, Montreal"
            style={styles.placeCta}
          />
          <PlaceCta
            img={require('#/static/placeholder.jpg')}
            imgLabel="From $126"
            description="408 St. Jacques | 1 Br"
            location="Old Montreal, Montreal"
            style={styles.placeCta}
          />
        </View>
      </ScrollView>
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
    paddingTop: 25,
  },
  placeCta: {
    marginBottom: 15,
  },
  header: {
    marginBottom: 10,
  },
  search: {
    marginBottom: 18,
  },
});

export default App;
