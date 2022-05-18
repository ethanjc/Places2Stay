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
import { View, StyleSheet, ScrollView, Image } from 'react-native'
import data from '#/static/stayMockData'

const Stay = () => {
  const { title, location, dates, image, details } = data

  return (
    <View style={styles.background}>
      <Image source={image} style={styles.img} />
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
})

export default Stay
