/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import { View, StyleSheet, ScrollView, FlatList } from 'react-native'
import { SectionHeader, PlaceCta, Search, CityCta } from '#/components/partial'
import homeMockData from '#/static/homeMockData'

const renderItem = ({ item: { id, image, imageLabel, title, location } }) => (
  <PlaceCta
    key={id}
    style={styles.placeCta}
    image={image}
    imageLabel={imageLabel}
    title={title}
    location={location}
  />
)

const Header = () => (
  <>
    <Search style={styles.search} />

    <View style={styles.horizontalPadding}>
      <SectionHeader
        style={styles.header}
        title={homeMockData.sections.placeCtas.title}
        description={homeMockData.sections.placeCtas.description}
      />
    </View>
  </>
)

const Footer = () => (
  <View>
    <SectionHeader
      title={homeMockData.sections.cityCtas.title}
      style={styles.horizontalPadding}
    />
    <ScrollView horizontal style={styles.carousel}>
      {homeMockData.sections.cityCtas.places.map(({ id, title, image }) => (
        <CityCta style={styles.cityCta} key={id} title={title} image={image} />
      ))}
    </ScrollView>
  </View>
)

const Home = () => {
  return (
    <FlatList
      data={homeMockData.sections.placeCtas.places}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      ListHeaderComponent={Header}
      ListFooterComponent={Footer}
      style={styles.container}
    />
  )
}

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
    marginHorizontal: 50,
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
})

export default Home
