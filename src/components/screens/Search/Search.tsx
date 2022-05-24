import { Text } from '#/components/base'
import React, { useRef, useState } from 'react'
import { StyleSheet, LayoutAnimation } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import searchMockData from '#/static/searchMockData'
import Fuse from 'fuse.js'
import {
  SearchDatePicker,
  SearchFlowContainer,
  SearchPeoplePicker,
  SearchResults,
  SearchTypePicker,
} from '#/components/partial'
import { Wizard, Step } from 'digi-rn-wizard'
import { View } from 'react-native-animatable'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { NavigationProp } from '@react-navigation/native'

const Search = ({ navigation }: { navigation: NavigationProp<any, any> }) => {
  const [results, setResults] = useState(searchMockData.cities)
  const fuse = new Fuse(searchMockData.cities, { threshold: 0.4 })
  const [showSearch, setShowSearch] = useState(true)
  const wizardRef = useRef(null)
  const bottom = useSafeAreaInsets().bottom

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

    navigation.setOptions({ gestureEnabled: true, animationEnabled: true })
  }

  return (
    <SearchFlowContainer
      showSearch={showSearch}
      expanded={!showSearch}
      handleChange={handleChange}
      onClose={navigation.goBack}
    >
      <SearchResults results={results} onCityPress={onCityPress} />
      {!showSearch && (
        <>
          <Wizard ref={wizardRef} style={styles.wizard}>
            <Step>
              <SearchTypePicker />
            </Step>
            <Step>
              <SearchDatePicker />
            </Step>
            <Step>
              <SearchPeoplePicker />
            </Step>
          </Wizard>
          <View style={[styles.navigator, { marginBottom: bottom + 10 }]}>
            <TouchableOpacity
              onPress={() => wizardRef?.current?.prev()}
              style={styles.backButton}
            >
              <Text style={styles.back}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => wizardRef?.current?.next()}
              style={styles.nextButton}
            >
              <Text color="#fff">Next</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SearchFlowContainer>
  )
}

const styles = StyleSheet.create({
  wizard: { flex: 1 },
  navigator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nextButton: {
    width: 120,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4169E1',
    borderRadius: 8,
  },
  backButton: {
    marginLeft: 10,
  },
  back: {
    textDecorationLine: 'underline',
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
