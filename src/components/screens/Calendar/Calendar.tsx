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
import { View, StyleSheet } from 'react-native'
import { Toggle } from '#/components/base'
import { SafeAreaView } from 'react-native-safe-area-context'

const Calendar = () => {
  return (
    <SafeAreaView style={styles.background}>
      <Toggle values={['Calendar', "I'm flexible"]} onToggle={() => {}} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFF1D2',
  },
})

export default Calendar
