/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { Card, Text } from '#/components/base'
import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import data from '#/static/stayMockData'
import { SharedElement } from 'react-navigation-shared-element'
import LinearGradient from 'react-native-linear-gradient'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Stay = ({ route }) => {
  const safeArea = useSafeAreaInsets()

  const { title, location, dates, image, details } = data
  const { id } = route.params

  return (
    <View style={styles.background}>
      <SharedElement id={`place-${id}`}>
        <Image source={image} style={styles.img} />
      </SharedElement>
      <View style={styles.content}>
        <Text variant="heading">{title}</Text>
        <Text color="#858585" style={styles.details}>
          {location}
        </Text>
        <Text color="#858585" style={styles.details}>
          {dates}
        </Text>
        {details.map(({ title: cardTitle, items }) => (
          <Card
            title={cardTitle}
            items={items}
            style={styles.card}
            key={cardTitle}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFF1D2',
  },
  img: {
    width: '100%',
    height: 220,
  },
  content: {
    marginHorizontal: 29,
    marginTop: 15,
  },
  details: {
    marginTop: 7,
  },
  card: {
    marginTop: 24,
  },
  phoneHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    width: '100%',
    height: 20,
  },
})

Stay.sharedElements = route => {
  const { id } = route.params

  return [
    {
      id: `place-${id}`,
      animation: 'move',
      resize: 'clip',
    },
  ]
}

export default Stay
