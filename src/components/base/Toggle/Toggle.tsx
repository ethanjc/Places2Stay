import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Text from '../Text'
import _ from 'lodash'

import { Props } from './Toggle.types'

const Card = ({ onToggle, values, selected = 0, style }: Props) => {
  const [widths, setWidths] = useState([0, 0])
  const [currentIndex, setCurrentIndex] = useState(0)

  const toggleAnimationWidth = useRef(new Animated.Value(widths[0])).current
  const toggleAnimationLeft = useRef(new Animated.Value(5)).current

  const onLayout = (event, index) => {
    const { width } = event.nativeEvent.layout
    let newWidths = widths
    newWidths[index] = width

    if (!_.isEqual(newWidths, width)) {
      setValues(newWidths)
      setWidths(newWidths)
    }
  }

  const onPress = useCallback(
    index => {
      setCurrentIndex(index)

      Animated.spring(toggleAnimationLeft, {
        toValue: index === 0 ? 5 : widths[0] + 10,
        useNativeDriver: false,
      }).start()

      Animated.spring(toggleAnimationWidth, {
        toValue: widths[index],
        useNativeDriver: false,
      }).start()

      onToggle(index)
    },
    [onToggle, toggleAnimationLeft, toggleAnimationWidth, widths],
  )

  const setValues = useCallback(
    newWidths => {
      toggleAnimationWidth.setValue(newWidths[currentIndex])
      toggleAnimationLeft.setValue(newWidths[currentIndex])
      toggleAnimationLeft.setValue(5)
    },
    [currentIndex, toggleAnimationLeft, toggleAnimationWidth],
  )

  useEffect(() => {
    onPress(selected)
  }, [selected, onPress])

  return (
    <View style={[styles.toggle, style]}>
      <Animated.View
        style={[
          styles.thumb,
          {
            width: toggleAnimationWidth,
            left: toggleAnimationLeft,
          },
        ]}
      />

      <TouchableWithoutFeedback
        style={styles.option}
        onLayout={e => onLayout(e, 0)}
        onPress={() => onPress(0)}
      >
        <Text>{values[0]}</Text>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        style={[styles.option, styles.last]}
        onLayout={e => onLayout(e, 1)}
        onPress={() => onPress(1)}
      >
        <Text>{values[1]}</Text>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  toggle: {
    backgroundColor: '#E3E3E3',
    flexDirection: 'row',
    height: 47,
    borderRadius: 47,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  option: {
    margin: 5,
    height: 37,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  last: {
    marginLeft: 0,
  },
  thumb: {
    position: 'absolute',
    top: 5,
    left: 5,
    height: 37,
    width: 59,
    borderRadius: 37,
    backgroundColor: '#fff',
  },
})

export default Card
