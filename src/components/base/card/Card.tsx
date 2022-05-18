import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import Text from '../text'

import { Props } from './Card.types'

const Card = ({ children, title, items, style }: Props) => (
  <View style={[styles.card, style]}>
    <View style={styles.title}>
      <Text color="#FFF">{title}</Text>
    </View>

    {items?.map(({ itemLabel, itemDetail }) => (
      <View style={styles.row} key={itemLabel}>
        <Text>{itemLabel}</Text>
        <Text>{itemDetail}</Text>
      </View>
    ))}

    {children}
  </View>
)

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    paddingHorizontal: 40,
    paddingTop: 42,
    paddingBottom: 16,
    backgroundColor: '#FFF',
    borderRadius: 8,
    overflow: 'hidden',
  },
  title: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 9,
    backgroundColor: '#4169E1',
    borderBottomRightRadius: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
})

export default Card
