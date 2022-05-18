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
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native'
import { SectionHeader, PlaceCta, Search, CityCta } from '#/components/partial'
import homeMockData from '#/static/homeMockData'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

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

const Home = ({ navigation }) => {
  const safeArea = useSafeAreaInsets()

  const renderItem = ({ item: { id, image, imageLabel, title, location } }) => (
    <PlaceCta
      key={id}
      style={styles.placeCta}
      image={image}
      imageLabel={imageLabel}
      title={title}
      location={location}
      onPress={() => navigation.navigate('Stay')}
    />
  )

  return (
    <View style={styles.background}>
      <View style={[styles.phoneHeader, { height: safeArea.top }]} />
      <SafeAreaView>
        <FlatList
          data={homeMockData.sections.placeCtas.places}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={Header}
          ListFooterComponent={Footer}
          style={styles.list}
        />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFF1D2',
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
    marginTop: 25,
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
  list: {
    overflow: 'visible',
  },
  phoneHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    width: '100%',
    height: 20,
    backgroundColor: '#FFF1D2',
    opacity: 0.8, // TODO: add gradient dependancy
  },
})

export default Home
