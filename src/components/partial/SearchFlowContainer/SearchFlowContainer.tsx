import { Text } from '#/components/base'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { View, ViewStyle, StyleSheet, Animated } from 'react-native'
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
}: {
  style?: ViewStyle
  showSearch: boolean
  handleChange: (text: string) => void
  onClose: () => void
}) => {
  const [heightAuto, setHeightAuto] = useState(false)
  const [searchHeight, setSearchHeight] = useState(307)

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
  })

  const handleClose = () => {
    Animated.timing(closeFadeOut, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start(onClose)
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

  return (
    <View>
      <TouchableWithoutFeedback style={styles.clickOff} onPress={onClickOff} />
      <Animated.View
        style={[
          styles.container,
          {
            marginTop: paddingTopAnimation,
            marginHorizontal: paddingHorizontalAnimation,
            opacity: closeFadeOut,
          },
          !showSearch && styles.expandedContent,
        ]}
      >
        <Animated.View
          style={[
            styles.search,
            style,
            {
              height: 'auto',
              shadowOpacity: shadownAnimation,
            },
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
              { opacity: contentfadeIn },
              showSearch ? styles.contentSpacing : styles.contentBorder,
            ]}
          >
            {children}
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
  contentBorder: {
    borderTopWidth: 0,
  },
  expandedContent: {
    height: '100%',
    marginHorizontal: 0,
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
