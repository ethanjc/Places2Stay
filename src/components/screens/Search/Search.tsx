import { Text } from '#/components/base'
import React, { useState } from 'react'
import { StyleSheet, LayoutAnimation } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import searchMockData from '#/static/searchMockData'
import Fuse from 'fuse.js'
import {
  SearchDatePicker,
  SearchFlowContainer,
  SearchPeoplePicker,
  SearchResults,
  SearchWizardStep,
} from '#/components/partial'
import { View } from 'react-native-animatable'
import { NavigationProp } from '@react-navigation/native'

const Search = ({ navigation }: { navigation: NavigationProp<any, any> }) => {
  const [results, setResults] = useState(searchMockData.cities)
  const fuse = new Fuse(searchMockData.cities, { threshold: 0.4 })
  const [showSearch, setShowSearch] = useState(true)
  const [openIndex, setOpenIndex] = useState<null | number>(null)

  const handleChange = (text: string) => {
    LayoutAnimation.configureNext({
      duration: 400,
      update: { type: 'spring', springDamping: 0.7 },
    })

    if (text.length === 0) {
      setResults(searchMockData.cities)

      return
    }

    const search = fuse.search(text)
    setResults(search.map(({ item }) => item))
  }

  const goBackToSearch = () => {
    setShowSearch(true)
    setResults(searchMockData.cities)

    navigation.setOptions({ gestureEnabled: false, animationEnabled: false })
  }

  const onCityPress = (index: number) => {
    LayoutAnimation.configureNext(
      {
        duration: 500,
        update: { type: 'spring', springDamping: 0.8 },
      },
      () => setOpenIndex(0),
    )

    if (showSearch) {
      setResults([results[index]])
      setShowSearch(false)

      navigation.setOptions({ gestureEnabled: true, animationEnabled: true })
    } else {
      goBackToSearch()
    }
  }

  const updateOpenIndex = (newIndex: number) => {
    setOpenIndex(newIndex)
  }

  const onNext = () => {
    updateOpenIndex(openIndex || 0 + 1)
  }

  const onBack = () => {
    const currentIndex = openIndex || 0

    if (currentIndex === 0) {
      LayoutAnimation.configureNext(
        {
          duration: 500,
          update: { type: 'spring', springDamping: 0.8 },
        },
        () => setOpenIndex(0),
      )

      goBackToSearch()
    } else {
      updateOpenIndex(currentIndex - 1)
    }
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
        <View style={styles.searchContainer}>
          <View style={styles.wizardContainer}>
            <SearchWizardStep
              titleEnd="'s your trip?"
              title="When"
              open={openIndex === 0}
              onPress={() => updateOpenIndex(0)}
            >
              <SearchDatePicker />
            </SearchWizardStep>
            <SearchWizardStep
              titleEnd="'s comming?"
              title="Who"
              open={openIndex === 1}
              onPress={() => updateOpenIndex(1)}
            >
              <SearchPeoplePicker />
            </SearchWizardStep>
          </View>
          <View style={styles.navigator}>
            <TouchableOpacity style={styles.backButton} onPress={onBack}>
              <Text style={styles.back}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextButton} onPress={onNext}>
              <Text color="#fff">Next</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    marginTop: 15,
  },
  nextButton: {
    width: 100,
    height: 35,
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
  searchContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
  wizardContainer: {
    flex: 1,
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
