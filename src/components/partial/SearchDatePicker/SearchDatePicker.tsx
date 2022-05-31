import { Toggle } from '#/components/base'
import React, { useMemo, useState } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { CalendarList } from 'react-native-calendars'
import FlexiblePicker from './FlexiblePicker'

const SearchDatePicker = ({ onDatePicked }: { onDatePicked: ([]) => void }) => {
  const minDate = useMemo(() => new Date().toISOString(), [])
  const width = Dimensions.get('window').width
  const [selected, setSelected] = useState(0)

  const [markedDates, setMarkedDates] = useState({})

  const onToggle = (index: number) => {
    setSelected(index)
  }

  const onDateSelect = ({ dateString }) => {
    const dates = Object.keys(markedDates)

    if (dates.length !== 1) {
      setMarkedDates({
        [dateString]: {
          startingDay: true,
          endingDay: true,
          color: '#4169E1',
          textColor: 'white',
        },
      })
    } else {
      const firstDate = new Date(dates[0])
      const secondDate = new Date(dateString)

      const [startDate, endDate] =
        firstDate < secondDate
          ? [firstDate, secondDate]
          : [secondDate, firstDate]

      onDatePicked([startDate, endDate])

      let newMarkedDates = {}

      for (
        let date = new Date(startDate);
        date <= endDate;
        date.setDate(date.getDate() + 1)
      ) {
        const currentDateString = date.toISOString().substring(0, 10)
        const isStartDay = date.getDate() === startDate.getDate()
        const isEndDay = date.getDate() === endDate.getDate()

        newMarkedDates[currentDateString] = {
          startingDay: isStartDay,
          endingDay: isEndDay,
          color: isStartDay || isEndDay ? '#4169E1' : 'rgb(173, 216, 230)',
          textColor: isStartDay || isEndDay ? '#fff' : '#000',
        }
      }

      setMarkedDates(newMarkedDates)
    }
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
        <CalendarList
          style={{ width: width - 70 }}
          onDayPress={onDateSelect}
          minDate={minDate}
          markingType={'period'}
          markedDates={markedDates}
          pastScrollRange={0}
        />
      ) : (
        <FlexiblePicker />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    overflow: 'hidden',
    flex: 1,
    marginBottom: 20,
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
