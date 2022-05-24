import * as React from 'react'
import { Text as StockText, StyleSheet } from 'react-native'

import { Props } from './Text.types'

const Text = ({ children, style, variant = 'body', color = '#000' }: Props) => (
  <StockText style={[styles[variant], { color }, style]}>{children}</StockText>
)

const styles = StyleSheet.create({
  body: {
    fontSize: 12,
    lineHeight: 15,
    fontFamily: 'Encodesans-Regular',
  },
  heading: {
    fontSize: 24,
    fontFamily: 'Bitter',
  },
  body2: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Encodesans-Regular',
  },
})

export default Text
