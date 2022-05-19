import React, { useState } from 'react'
import { StyleSheet, Touchable, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import Text from '../Text'

import { Props } from './Toggle.types'

const Card = ({ onToggle, values, selected = 0 }: Props) => {
  const [widths, setWidths] = useState([0, 0])
  const [ready, setReady] = useState(false)

  const onLayout = (event, index) => {
    const { width } = event.nativeEvent.layout
    let newWidths = widths
    newWidths[index] = width
    setWidths(newWidths)

    if (!ready) {
      setReady(true)
    }
  }

  return (
    <View style={styles.toggle}>
      {ready && (
        <View
          style={[
            styles.thumb,
            { width: widths[selected + 1], left: widths[selected] + 10 },
          ]}
        />
      )}

      <TouchableHighlight style={styles.option} onLayout={e => onLayout(e, 0)}>
        <Text>{values[0]}</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={[styles.option, styles.last]}
        onLayout={e => onLayout(e, 1)}
      >
        <Text>{values[1]}</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  toggle: {
    backgroundColor: '#E3E3E3',
    flexDirection: 'row',
    height: 48,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    position: 'relative',
  },
  option: {
    margin: 5,
    height: 37,
    justifyContent: 'center',
    paddingHorizontal: 15,
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
