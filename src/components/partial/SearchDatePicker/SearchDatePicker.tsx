import { Toggle } from '#/components/base'
import React, { useMemo, useState } from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'
import CalendarPicker from 'react-native-calendar-picker'
import FlexiblePicker from './FlexiblePicker'

const SearchDatePicker = () => {
  const minDate = useMemo(() => new Date(), [])
  const width = Dimensions.get('window').width
  const [selected, setSelected] = useState(0)

  const onToggle = (index: number) => {
    setSelected(index)
  }

  return (
    <View style={styles.container}>
      <Toggle
        values={['Calendar', "I'm flexible"]}
        style={styles.toggle}
        onToggle={onToggle}
        selected={selected}
      />

      {selected === 0 ? (
        <CalendarPicker
          minDate={minDate}
          allowRangeSelection
          todayBackgroundColor="rgb(182, 215, 228)"
          selectedDayColor="rgb(182, 215, 228)"
          selectedRangeStartStyle={styles.rangeEnds}
          selectedRangeStartTextStyle={styles.rangeEndsText}
          selectedRangeEndTextStyle={styles.rangeEndsText}
          selectedRangeEndStyle={styles.rangeEnds}
          width={width - 40}
        />
      ) : (
        <FlexiblePicker />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'center',
  },
  toggle: {
    marginBottom: 20,
  },
  rangeEnds: {
    backgroundColor: '#4169E1',
  },
  rangeEndsText: {
    color: '#fff',
  },
})

export default SearchDatePicker
