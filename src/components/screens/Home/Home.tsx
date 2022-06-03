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
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { NavigationProp, RouteProp } from '@react-navigation/native'
import { useParams } from '../../../../App'
import { gql, useQuery } from '@apollo/client'

const CITIES = gql`
  query GetCiityRow {
    cityRow {
      id
      cities {
        title
        image
        id
      }
    }
  }
`

const Header = ({ openSearch }: { openSearch: () => void }) => {
  const safeArea = useSafeAreaInsets()

  return (
    <>
      <LinearGradient
        colors={['#FFF1D2', 'rgba(255,241,210,0)']}
        locations={[0.8, 1]}
        style={[styles.phoneHeader, { height: safeArea.top + 90 }]}
      />
      <Search
        style={[styles.search, { marginTop: safeArea.top + 15 }]}
        onPress={openSearch}
      />
    </>
  )
}

const Footer = () => {
  const { loading, data: { cityRow } = {} } = useQuery(CITIES)

  console.log(cityRow)

  return (
    <View>
      <SectionHeader
        title={homeMockData.sections.cityCtas.title}
        style={styles.horizontalPadding}
      />
      <ScrollView horizontal style={styles.carousel}>
        {!loading &&
          cityRow.cities?.length &&
          cityRow.cities.map(({ id, title, image }) => (
            <CityCta
              style={styles.cityCta}
              key={id}
              title={title}
              image={image}
            />
          ))}
      </ScrollView>
    </View>
  )
}

const Home = ({
  navigation,
}: {
  navigation: NavigationProp<any, any>
  route: RouteProp<any, any>
}) => {
  const [homeParams] = useParams()

  const renderItem = ({
    item: { id, image, imageLabel, title, location },
    index,
  }) => (
    <>
      {index === 0 && (
        <View style={styles.horizontalPadding}>
          <SectionHeader
            style={styles.header}
            title={
              homeParams.searched
                ? `250+ Places in ${homeParams.searched}`
                : homeMockData.sections.placeCtas.title
            }
            description={
              homeParams.dates || homeParams.people
                ? (homeParams.dates &&
                    `From ${homeParams.dates[0]} to ${homeParams.dates[1]}`) +
                  (homeParams.people &&
                    `${
                      homeParams.dates ? ' f' : 'F'
                    }or ${homeParams.people.join(', ')}`)
                : homeMockData.sections.placeCtas.description
            }
          />
        </View>
      )}
      <PlaceCta
        key={id}
        id={id}
        style={styles.placeCta}
        image={image}
        imageLabel={imageLabel}
        title={title}
        location={location}
        onPress={() => navigation.navigate('Stay', { id })}
      />
    </>
  )

  const openSearch = () => navigation.navigate('Search')

  return (
    <View style={styles.background}>
      <FlatList
        data={homeMockData.sections.placeCtas.places}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={Header({ openSearch })}
        ListHeaderComponentStyle={styles.header}
        ListFooterComponent={Footer}
        style={styles.list}
        stickyHeaderIndices={[0]}
      />
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
    marginBottom: 20,
  },
  search: {
    marginBottom: 18,
    width: '80%',
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
    width: '100%',
    height: 20,
  },
})

export default Home
