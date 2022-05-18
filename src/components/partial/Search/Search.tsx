import { Text } from '#/components/base'
import React from 'react'
import { ViewStyle, StyleSheet } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'

const Search = ({
  style,
  onPress,
}: {
  style?: ViewStyle
  onPress: () => void
}) => {
  return (
    <TouchableHighlight
      style={[styles.search, style]}
      onPress={onPress}
      underlayColor="rgba(255, 255, 255, 0.8)"
    >
      <Text style={styles.placeholder} color="#858585">
        Try 'Boston'
      </Text>
    </TouchableHighlight>
  )
}

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
  placeholder: {
    flex: 1,
    textAlign: 'center',
  },
})

export default Search
