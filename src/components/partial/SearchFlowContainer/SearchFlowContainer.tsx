import { BlurView } from '@react-native-community/blur'
import React, { useEffect, useRef, useState } from 'react'
import { View, StyleSheet, LayoutAnimation, Animated } from 'react-native'
import {
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Search = ({
  children,
  onClose,
  showSearch,
  handleChange,
  expanded,
}: {
  children: React.ReactNode
  showSearch: boolean
  handleChange: (text: string) => void
  onClose: () => void
  expanded: boolean
}) => {
  const safeArea = useSafeAreaInsets()

  const [searchOpen, setSearchOpen] = useState(false)
  const contentfadeIn = useRef(new Animated.Value(0)).current
  const blurFade = useRef(new Animated.Value(1)).current

  const onClickOff = () => {
    LayoutAnimation.configureNext(
      {
        duration: 500,
        update: {
          type: 'spring',
          springDamping: 1,
        },
      },
      onClose,
    )

    Animated.timing(contentfadeIn, {
      duration: 200,
      toValue: 0,
      useNativeDriver: false,
    }).start()

    setSearchOpen(false)
  }

  const openSearch = () => {
    LayoutAnimation.configureNext({
      duration: 600,
      update: {
        type: 'spring',
        springDamping: 0.7,
      },
    })

    Animated.timing(contentfadeIn, {
      delay: 100,
      duration: 200,
      toValue: 1,
      useNativeDriver: false,
    }).start()

    setSearchOpen(true)
  }

  useEffect(() => {
    Animated.timing(blurFade, {
      duration: 500,
      toValue: expanded ? 0 : 1,
      useNativeDriver: false,
    }).start()
  }, [expanded, blurFade])

  const backgroundColorAnimation = blurFade.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 1)'],
  })

  return (
    <View>
      <TouchableWithoutFeedback style={styles.clickOff} onPress={onClickOff} />
      <View
        style={[
          styles.container,
          searchOpen && styles.containerOpen,
          expanded && styles.containerExpanded,
        ]}
      >
        <BlurView
          blurType="regular"
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flex: 1,
            marginTop: safeArea.top + (searchOpen ? 0 : 15),
            borderRadius: 30,
          }}
        >
          <Animated.View
            style={[
              styles.search,
              expanded && styles.searchExpanded,
              { backgroundColor: backgroundColorAnimation },
            ]}
          >
            {showSearch && (
              <TextInput
                placeholder="Try 'Boston'"
                onChangeText={handleChange}
                style={styles.input}
                placeholderTextColor="#858585"
                autoFocus
                onFocus={openSearch}
              />
            )}
            <Animated.View
              style={[
                searchOpen ? styles.contentOpen : styles.contentClosed,
                expanded && styles.contentExpanded,
                { opacity: contentfadeIn },
              ]}
            >
              {children}
            </Animated.View>
          </Animated.View>
        </BlurView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    marginHorizontal: 39,
  },
  containerOpen: {
    marginHorizontal: 20,
  },
  containerExpanded: {
    marginHorizontal: 0,
    bottom: 0,
  },
  search: {
    overflow: 'hidden',
    borderColor: 'rgba(0, 0, 0, 0.19)',
    borderStyle: 'solid',
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
    backgroundColor: '#fff',
  },
  searchExpanded: {
    flex: 1,
  },
  contentClosed: {
    height: 0,
    overflow: 'hidden',
  },
  contentOpen: {
    marginTop: 15,
    paddingTop: 15,
    marginBottom: 5,
    borderColor: 'rgba(0, 0, 0, 0.19)',
    borderTopWidth: 1,
  },
  contentExpanded: {
    borderTopWidth: 0,
    marginBottom: 15,
    paddingTop: 0,
    flexGrow: 1,
    marginTop: 10,
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

export default Search
