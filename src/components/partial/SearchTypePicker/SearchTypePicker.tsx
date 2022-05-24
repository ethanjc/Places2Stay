import { Text } from '#/components/base'
import { DrinksIcon, HouseIcon, MapIcon } from '#/components/base/Icon'
import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native-animatable'

const SearchTypePicker = () => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <View>
          <Text variant="body2" style={styles.title}>
            Find a place to stay
          </Text>
          <Text color="#8C8C8C">Description</Text>
        </View>
        <View style={styles.iconContainer}>
          <MapIcon />
        </View>
      </View>
      <View style={styles.button}>
        <View>
          <Text variant="body2" style={styles.title}>
            Find a monthly stay
          </Text>
          <Text color="#8C8C8C">Description</Text>
        </View>
        <View style={styles.iconContainer}>
          <HouseIcon />
        </View>
      </View>
      <View style={styles.button}>
        <View>
          <Text variant="body2" style={styles.title}>
            Find an experience
          </Text>
          <Text color="#8C8C8C">Description</Text>
        </View>
        <View style={styles.iconContainer}>
          <DrinksIcon />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 17,
    paddingRight: 20,
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 8,
    marginBottom: 25,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 1,
  },
  iconContainer: {
    backgroundColor: '#4169E180',
    padding: 8,
    borderRadius: 8,
  },
  title: {
    marginBottom: 5,
  },
})

export default SearchTypePicker
