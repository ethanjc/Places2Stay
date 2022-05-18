/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import { View, StyleSheet, ScrollView, Image, SafeAreaView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Stay = () => {
  const safeArea = useSafeAreaInsets()

  return (
    <View style={styles.background}>
      <View style={[styles.phoneHeader, { height: safeArea.top }]} />
      <ScrollView>
        <Image
          source={require('#/static/img/placeholder.jpg')}
          style={[styles.img, { height: safeArea.top + 220 }]}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFF1D2',
  },
  phoneHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    width: '100%',
    height: 20,
    backgroundColor: '#FFF1D2',
    opacity: 0.8, // TODO: add gradient dependancy
  },
  img: {
    width: '100%',
  },
})

export default Stay
