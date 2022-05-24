import { Text } from '#/components/base'
import React, { useRef, useState } from 'react'
import {
  View,
  ViewStyle,
  StyleSheet,
  LayoutAnimation,
  Animated,
} from 'react-native'
import {
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Search = ({
  style,
  children,
  onClose,
  showSearch,
  handleChange,
  expanded,
}: {
  style?: ViewStyle
  showSearch: boolean
  handleChange: (text: string) => null
  onClose: () => void
  expanded: boolean
}) => {
  const safeArea = useSafeAreaInsets()

  const [searchOpen, setSearchOpen] = useState(false)
  const contentfadeIn = useRef(new Animated.Value(0)).current

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
        <View
          style={[
            styles.search,
            styles.searchOpen,
            { marginTop: safeArea.top + (searchOpen ? 0 : 15) },
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
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    marginHorizontal: 39,
  },
  containerOpen: {
    marginHorizontal: 20,
  },
  containerExpanded: {
    marginHorizontal: 0,
    height: '100%',
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
  searchOpen: {},
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
    height: '100%',
    borderTopWidth: 0,
    marginTop: 10,
    paddingTop: 0,
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
