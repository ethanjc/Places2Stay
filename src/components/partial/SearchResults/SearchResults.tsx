import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import { LocationIcon } from '#/components/base/Icon'
import { View } from 'react-native-animatable'

const SearchResults = ({
  results,
  onCityPress,
}): { results: [{ city: string }] } => (
  <View>
    {results.length > 0 ? (
      results.map((city, index) => (
        <TouchableWithoutFeedback
          key={city}
          style={[
            styles.city,
            {
              marginBottom: index === results.length - 1 ? 0 : 10,
            },
          ]}
          onPress={() => onCityPress(index)}
        >
          <LocationIcon style={styles.icon} />
          <Text>{city}</Text>
        </TouchableWithoutFeedback>
      ))
    ) : (
      <Text>No places here yet :(</Text>
    )}
  </View>
)

const styles = StyleSheet.create({
  city: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 7,
  },
})

export default SearchResults
