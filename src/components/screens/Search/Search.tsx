import { Text } from '#/components/base'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
  View,
  ViewStyle,
  StyleSheet,
  Animated,
  LayoutAnimation,
} from 'react-native'
import {
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler'
import searchMockData from '#/static/searchMockData'
import { LocationIcon, BackIcon } from '#/components/base/Icon'
import Fuse from 'fuse.js'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Search = ({ style, navigation }: { style?: ViewStyle }) => {
  const [results, setResults] = useState(searchMockData.cities)
  const fuse = new Fuse(searchMockData.cities, { threshold: 0.4 })
  const [heightAuto, setHeightAuto] = useState(false)
  const [searchHeight, setSearchHeight] = useState(307)
  const [showSearch, setShowSearch] = useState(true)

  const handleChange = (text: string) => {
    setHeightAuto(true)
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

  const safeArea = useSafeAreaInsets()
  const paddingTopOutput = useMemo(() => [safeArea.top + 15, safeArea.top], [
    safeArea,
  ])

  const contentfadeIn = useRef(new Animated.Value(0)).current
  const closeFadeOut = useRef(new Animated.Value(1)).current

  useEffect(() => {
    Animated.spring(contentfadeIn, {
      toValue: 1,
      useNativeDriver: false,
    }).start()
  }, [])

  const handleClose = () => {
    Animated.timing(closeFadeOut, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start(navigation.goBack)
  }

  const onClickOff = () => {
    setHeightAuto(false)
    Animated.spring(contentfadeIn, {
      toValue: 0,
      useNativeDriver: false,
      overshootClamping: true,
    }).start(handleClose)
  }

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
    outputRange: [54, searchHeight],
  })

  const shadownAnimation = contentfadeIn.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.17],
  })

  const onCityPress = index => {
    setHeightAuto(true)

    LayoutAnimation.configureNext({
      duration: 400,
      update: { type: 'spring', springDamping: 0.7, initialVelocity: 10 },
    })

    setResults([results[index]])
    setShowSearch(false)
  }

  return (
    <View style={{ flex: 1 }}>
      <TouchableWithoutFeedback style={styles.clickOff} onPress={onClickOff} />
      <Animated.View
        style={[
          styles.container,
          {
            marginTop: paddingTopAnimation,
            marginHorizontal: paddingHorizontalAnimation,
            opacity: closeFadeOut,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.search,
            style,
            {
              height: heightAuto ? 'auto' : heightAnimation,
              shadowOpacity: shadownAnimation,
            },
            styles.expandedSearch,
          ]}
          onLayout={e =>
            heightAuto && setSearchHeight(e.nativeEvent.layout.height)
          }
        >
          {showSearch && (
            <TextInput
              placeholder="Try 'Boston'"
              onChangeText={handleChange}
              style={styles.input}
              placeholderTextColor="#858585"
              autoFocus
            />
          )}
          <Animated.View
            style={[
              styles.content,
              { opacity: contentfadeIn, borderTopWidth: showSearch ? 1 : 0 },
              showSearch && styles.contentSpacing,
            ]}
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
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  search: {
    overflow: 'hidden',
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
    flexGrow: 1,
  },
  content: {
    marginTop: 5,
    marginBottom: 5,
    borderTopWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.19)',
  },
  contentSpacing: {
    marginTop: 15,
    paddingTop: 15,
  },
  expandedContent: {
    height: '100%',
  },
  city: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
    color: '#000',
  },
  clickOff: {
    width: '100%',
    height: '100%',
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
