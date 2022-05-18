import { Text } from '#/components/base'
import * as React from 'react'
import { View, ViewStyle, StyleSheet } from 'react-native'

const Search = ({ style }: { style?: ViewStyle }) => (
  <View style={[styles.search, style]}>
    <Text>AHHHHHH</Text>
  </View>
)

const styles = StyleSheet.create({
  search: {
    borderColor: 'rgba(0, 0, 0, 0.19)',
    borderStyle: 'solid',
    backgroundColor: '#fff',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    paddingVertical: 18,
    borderRadius: 100,
  },
})

export default Search
