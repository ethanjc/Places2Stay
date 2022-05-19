import * as React from 'react'
import { View, Image, StyleSheet } from 'react-native'

import { Text } from '#/components/base'
import { Props } from './PlaceCta.types'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { SharedElement } from 'react-navigation-shared-element'

const PlaceCta = ({
  style,
  image,
  imageLabel,
  title,
  location,
  id,
  onPress,
}: Props) => (
  <View style={style}>
    <View style={styles.imgContainer}>
      <View style={styles.label}>
        <Text>{imageLabel}</Text>
      </View>
      <TouchableHighlight
        onPress={onPress}
        underlayColor="rgba(255,255,255,0.5)"
      >
        <SharedElement id={`place-${id}`}>
          <Image source={image} style={styles.img} />
        </SharedElement>
      </TouchableHighlight>
    </View>
    <Text style={styles.description}>{title}</Text>
    <Text color="#858585">{location}</Text>
  </View>
)

const styles = StyleSheet.create({
  imgContainer: {
    height: 105,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 20,
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  label: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#FFA500',
    overflow: 'hidden',
    borderBottomLeftRadius: 8,
  },
  description: {
    marginBottom: 7,
  },
})

export default PlaceCta
