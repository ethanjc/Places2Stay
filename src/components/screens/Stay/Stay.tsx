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
import React, { useEffect, useRef } from 'react'
import { View, StyleSheet, Image, Animated } from 'react-native'
import data from '#/static/stayMockData'
import { SharedElement } from 'react-navigation-shared-element'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Stay = ({ route }) => {
  const safeArea = useSafeAreaInsets()

  const { title, location, dates, image, details } = data
  const { id } = route.params

  const contentfadeIn = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(contentfadeIn, {
      toValue: 1,
      duration: 200,
      delay: 200,
      useNativeDriver: true,
    }).start()
  })

  return (
    <View style={[styles.root, { marginTop: safeArea.top }]}>
      <SharedElement id={`place-${id}`}>
        <Image source={image} style={styles.img} />
      </SharedElement>

      <Animated.View style={[styles.content, { opacity: contentfadeIn }]}>
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
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    flex: 1,
  },
  img: {
    width: '100%',
    height: 230,
    resizeMode: 'cover',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  content: {
    backgroundColor: '#FFF1D2',
    paddingHorizontal: 29,
    paddingTop: 15,
    flex: 1,
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
  imgContainer: {
    overflow: 'hidden',
  },
})

Stay.sharedElements = route => {
  const { id } = route.params

  return [
    {
      id: `place-${id}`,
      animation: 'move',
      resize: 'auto',
      align: 'auto',
    },
  ]
}

export default Stay
