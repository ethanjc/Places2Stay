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
import { Home, Stay, Search } from '#/components/screens'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { View } from 'react-native'
import {
  CardStyleInterpolators,
  TransitionSpecs,
  TransitionPresets,
} from '@react-navigation/stack'

const Cal = () => <View />

const TabNavigator = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Main" component={Home} />
      <Tab.Screen name="Settings" component={Cal} />
    </Tab.Navigator>
  )
}

const App = () => {
  const Stack = createSharedElementStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen
          name="Stay"
          component={Stay}
          options={{
            ...TransitionPresets.ModalPresentationIOS,
            presentation: 'transparentModal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

/*
        <Stack.Group
          screenOptions={{
            presentation: 'modal',
            headerShown: false,
          }}
        >
          <Stack.Screen name="Search" component={Search} />
        </Stack.Group>
 */
