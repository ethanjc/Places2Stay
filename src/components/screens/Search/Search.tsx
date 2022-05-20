import { Text } from '#/components/base'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { View, ViewStyle, StyleSheet, Animated } from 'react-native'
import {
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler'
import searchMockData from '#/static/searchMockData'
import { LocationIcon, BackIcon } from '#/components/base/Icon'
import Fuse from 'fuse.js'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

const Search = ({ style, navigation }: { style?: ViewStyle }) => {
  const [results, setResults] = useState(searchMockData.cities)
  const fuse = new Fuse(searchMockData.cities, { threshold: 0.4 })

  const handleChange = (text: string) => {
    if (text.length === 0) {
      setResults(searchMockData.cities)

      return
    }

    const search = fuse.search(text)
    setResults(search.map(({ item }) => item))
  }

  const safeArea = useSafeAreaInsets()
  const paddingTopOutput = useMemo(() => [safeArea.top + 15, safeArea.top], [
    safeArea,
  ])

  const contentfadeIn = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.spring(contentfadeIn, {
      toValue: 1,
      useNativeDriver: false,
    }).start()
  })

  const paddingHorizontalAnimation = contentfadeIn.interpolate({
    inputRange: [0, 1],
    outputRange: [40, 20],
  })

  const paddingTopAnimation = contentfadeIn.interpolate({
    inputRange: [0, 1],
    outputRange: paddingTopOutput,
  })

  const heightAnimation = contentfadeIn.interpolate({
    inputRange: [0, 1],
    outputRange: [54, 300],
  })

  return (
    <View style={{ position: 'relative', width: '100%', height: '100%' }}>
      <TouchableWithoutFeedback
        onPress={() => console.log('test')}
        style={styles.clickOff}
      />

      <Animated.View
        style={[
          styles.container,
          {
            paddingTop: paddingTopAnimation,
            paddingHorizontal: paddingHorizontalAnimation,
          },
        ]}
      >
        <Animated.View
          style={[styles.search, style, { height: heightAnimation }]}
        >
          <TextInput
            placeholder="Try 'Boston'"
            onChangeText={handleChange}
            style={styles.input}
            placeholderTextColor="#858585"
          />
        </Animated.View>
      </Animated.View>
    </View>
  )
}

/**
 *       {results.map(city => (
        <View key={city} style={styles.city}>
          <LocationIcon style={styles.icon} />
          <Text>{city}</Text>
        </View>
      ))}
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    borderColor: 'rgba(0, 0, 0, 0.19)',
    borderStyle: 'solid',
    backgroundColor: '#fff',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    paddingTop: 17,
    paddingBottom: 15,
    borderRadius: 30,
    paddingHorizontal: 30,
  },
  city: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    marginRight: 7,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  back: {
    borderRadius: 100,
  },
  input: {
    fontSize: 16,
    color: '#fff',
  },
  clickOff: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 1000,
    height: 1000,
    zIndex: 100,
    backgroundColor: '#fff',
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
