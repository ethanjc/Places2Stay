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
import { Home, Stay, Search, Calendar } from '#/components/screens'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import {
  CardStyleInterpolators,
  TransitionPresets,
  TransitionSpecs,
} from '@react-navigation/stack'
import { CalendarIcon, HomeIcon } from '#/components/base/Icon'
import { Animated, Dimensions, Easing } from 'react-native'

const TabNavigator = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#FFF8E8' },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Main"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon style={{ opacity: focused ? 1 : 0.7 }} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Calendar}
        options={{
          tabBarIcon: ({ focused }) => (
            <CalendarIcon style={{ opacity: focused ? 1 : 0.7 }} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const config = {
  animation: 'timing' as 'timing',
  config: {
    duration: 0,
  },
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
            ...TransitionPresets.ModalSlideFromBottomIOS,
            presentation: 'transparentModal',
            gestureResponseDistance: 280,
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            ...TransitionPresets.ModalSlideFromBottomIOS,
            presentation: 'transparentModal',
            transitionSpec: {
              open: config,
              close: TransitionSpecs.TransitionIOSSpec,
            },
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
