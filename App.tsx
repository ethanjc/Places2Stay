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
import {SectionHeader, PlaceCta, Search, CityCta} from '#/components/partial';
import homeMockData from '#/static/homeMockData';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView>
        <View style={styles.container}>
          <Search style={styles.search} />

          <View style={styles.horizontalPadding}>
            <SectionHeader
              style={styles.header}
              title={homeMockData.sections.placeCtas.title}
              description={homeMockData.sections.placeCtas.description}
            />
            {homeMockData.sections.placeCtas.places.map(
              ({id, image, imageLabel, title, location}) => (
                <PlaceCta
                  key={id}
                  style={styles.placeCta}
                  image={image}
                  imageLabel={imageLabel}
                  title={title}
                  location={location}
                />
              ),
            )}
          </View>

          <View>
            <SectionHeader
              title={homeMockData.sections.cityCtas.title}
              style={styles.horizontalPadding}
            />
            <ScrollView horizontal style={styles.carousel}>
              {homeMockData.sections.cityCtas.places.map(
                ({id, title, image}) => (
                  <CityCta
                    style={styles.cityCta}
                    key={id}
                    title={title}
                    image={image}
                  />
                ),
              )}
            </ScrollView>
          </View>
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
    marginTop: 25,
  },
  placeCta: {
    marginBottom: 15,
  },
  header: {
    marginBottom: 10,
  },
  search: {
    marginBottom: 18,
    marginHorizontal: 50,
  },
  cityCta: {
    marginRight: 23,
  },
  horizontalPadding: {
    paddingHorizontal: 50,
  },
  carousel: {
    paddingLeft: 50,
    paddingBottom: 20,
  },
});

export default App;
