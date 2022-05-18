import { Text } from '#/components/base'
import * as React from 'react'
import { View, ViewStyle, StyleSheet } from 'react-native'
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler'
import searchMockData from '#/static/searchMockData'
import { LocationIcon, BackIcon } from '#/components/base/Icon'

const Search = ({ style, navigation }: { style?: ViewStyle }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          onPress={navigation.goBack}
          style={styles.back}
          underlayColor="rgba(0, 0, 0, 0.2)"
        >
          <BackIcon />
        </TouchableHighlight>
        <View style={[styles.search, style]}>
          <TextInput placeholder='Try "Boston"' />
        </View>
      </View>

      {searchMockData.cities.map(city => (
        <View key={city} style={styles.city}>
          <LocationIcon style={styles.icon} />
          <Text>{city}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF1D2',
    paddingHorizontal: 50,
    paddingTop: 30,
  },
  search: {
    flexGrow: 1,
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
    paddingHorizontal: 20,
    marginLeft: 13,
  },
  city: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    marginRight: 7,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  back: {
    borderRadius: 100,
  },
})

export default Search
