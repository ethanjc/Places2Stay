import { Text } from '#/components/base'
import React, { useState } from 'react'
import { StyleSheet, LayoutAnimation } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import searchMockData from '#/static/searchMockData'
import { LocationIcon } from '#/components/base/Icon'
import Fuse from 'fuse.js'
import { SearchFlowContainer } from '#/components/partial'

const Search = ({ navigation }) => {
  const [results, setResults] = useState(searchMockData.cities)
  const fuse = new Fuse(searchMockData.cities, { threshold: 0.4 })
  const [showSearch, setShowSearch] = useState(true)

  const handleChange = (text: string) => {
    LayoutAnimation.configureNext({
      duration: 400,
      update: { type: 'spring', springDamping: 0.7, initialVelocity: 10 },
    })

    if (text.length === 0) {
      setResults(searchMockData.cities)

      return
    }

    const search = fuse.search(text)
    setResults(search.map(({ item }) => item))
  }

  const onCityPress = index => {
    LayoutAnimation.configureNext({
      duration: 500,
      update: { type: 'spring', springDamping: 0.8, initialVelocity: 10 },
    })

    setResults([results[index]])
    setShowSearch(false)

    navigation.setOptions({ gestureEnabled: true })
  }

  return (
    <SearchFlowContainer
      showSearch={showSearch}
      expanded={!showSearch}
      handleChange={handleChange}
      onClose={navigation.goBack}
    >
      {results.length > 0 ? (
        results.map((city, index) => (
          <TouchableWithoutFeedback
            key={city}
            style={[
              styles.city,
              {
                marginBottom: index === results.length - 1 ? 0 : 10,
              },
            ]}
            onPress={() => onCityPress(index)}
          >
            <LocationIcon style={styles.icon} />
            <Text>{city}</Text>
          </TouchableWithoutFeedback>
        ))
      ) : (
        <Text>No places here yet :(</Text>
      )}
    </SearchFlowContainer>
  )
}

const styles = StyleSheet.create({
  city: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 7,
  },
})

Search.sharedElements = () => [
  {
    id: 'search',
    animation: 'move',
    resize: 'auto',
    align: 'auto',
  },
]

export default Search
