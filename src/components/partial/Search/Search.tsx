import React from 'react'
import { ViewStyle, StyleSheet, TextInput } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const Search = ({
  style,
  onPress,
}: {
  style?: ViewStyle
  onPress: () => void
}) => {
  return (
    <TouchableWithoutFeedback
      style={[styles.search, style]}
      onPress={onPress}
      underlayColor="rgba(255, 255, 255, 0.8)"
    >
      <TextInput
        placeholder="Try 'Boston'"
        style={styles.input}
        placeholderTextColor="#858585"
        pointerEvents="none"
      />
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  search: {
    alignSelf: 'center',
    paddingHorizontal: 30,
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
    paddingTop: 17,
    paddingBottom: 15,
    borderRadius: 100,
    justifyContent: 'center',
  },
  placeholder: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 1,
  },
  input: {
    fontSize: 16,
    color: '#fff',
  },
})

export default Search
