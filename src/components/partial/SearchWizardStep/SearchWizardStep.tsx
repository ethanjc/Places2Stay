import { Text } from '#/components/base'
import React, { useEffect, useRef, useState } from 'react'
import { LayoutAnimation, StyleSheet, Animated } from 'react-native'
import { View } from 'react-native-animatable'
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler'

const SearchTypePicker = ({
  children,
  title,
  titleEnd,
  showButtons,
  open,
  onNext,
  onPress,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const titleAnimation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    LayoutAnimation.configureNext({
      duration: 500,
      update: { type: 'spring', springDamping: 0.9, initialVelocity: 5 },
    })

    Animated.timing(titleAnimation, {
      duration: 300,
      toValue: open ? 1 : 0,
      useNativeDriver: false,
    }).start()

    setIsOpen(open)
  }, [open, titleAnimation])

  const smallMargin = titleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 10],
  })

  const titleText = titleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [16, 24],
  })

  const titleContainerStyles = {
    marginTop: smallMargin,
    marginLeft: smallMargin,
    marginBottom: titleAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 20],
    }),
  }

  const titleStyles = {
    fontSize: titleText,
    lineHeight: titleText,
  }

  return (
    <View style={[styles.container, { flex: isOpen ? 1 : 0 }]}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Animated.View style={[styles.titleContainer, titleContainerStyles]}>
          <Animated.Text style={titleStyles}>{title}</Animated.Text>
          <Animated.View style={[{ opacity: titleAnimation }]}>
            <Animated.Text style={titleStyles}>{titleEnd}</Animated.Text>
          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>
      <View style={styles.childContainer}>{children}</View>
      {showButtons && isOpen && (
        <View style={styles.navigator}>
          <TouchableOpacity style={styles.backButton} onPress={onNext}>
            <Text style={styles.back}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={onNext}>
            <Text color="#fff">Next</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    marginHorizontal: -10,

    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',

    overflow: 'hidden',
  },
  navigator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  childContainer: {
    position: 'relative',
    flex: 1,
  },
  bigTitle: {
    fontSize: 22,
    lineHeight: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 10,
  },
  titleContainer: {
    flexDirection: 'row',
  },
})

export default SearchTypePicker
