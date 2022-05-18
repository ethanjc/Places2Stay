import * as React from 'react'
import { View, StyleSheet } from 'react-native'

import { Text } from '#/components/base'
import { Props } from './SectionHeader.types'
const SectionHeader = ({ style, title, description }: Props) => (
  <View style={style}>
    <Text variant="heading" style={styles.title}>
      {title}
    </Text>
    {description && <Text>{description}</Text>}
  </View>
)

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
  },
})

export default SectionHeader
