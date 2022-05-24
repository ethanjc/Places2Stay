import { Text } from '#/components/base'
import { CalendarIcon } from '#/components/base/Icon'
import moment from 'moment'
import React, { useMemo, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const lengths = ['Weekend', 'Week', 'Month']

const FlexiblePicker = () => {
  const [selectedLength, setSelectedLength] = useState(0)
  const [months, setMonths] = useState([])

  const comingMonths = useMemo(() => {
    const months = []
    const dateStart = moment()
    const dateEnd = moment().add(12, 'month')
    while (dateEnd.diff(dateStart, 'months') >= 0) {
      months.push({
        month: dateStart.format('MMMM'),
        year: dateStart.format('YYYY'),
      })
      dateStart.add(1, 'month')
    }
    return months
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.textContaienr}>
        <Text variant="body2">Stay for a </Text>
        <Text style={styles.bold} variant="body2">
          {lengths[selectedLength].toLocaleLowerCase()}
        </Text>
      </View>
      <View style={styles.lengths}>
        {lengths.map((length, index) => (
          <TouchableOpacity
            onPress={() => setSelectedLength(index)}
            style={styles.length}
          >
            <Text>{length}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.textContaienr}>
        <Text variant="body2">Go in </Text>
        <Text style={styles.bold} variant="body2">
          {months.join(', ')}
        </Text>
      </View>
      <ScrollView horizontal style={styles.months}>
        {comingMonths.map(({ month, year }) => (
          <TouchableOpacity
            style={styles.month}
            onPress={() => setMonths([...months, month])}
          >
            <CalendarIcon />
            <Text variant="body2" style={styles.monthText}>
              {month}
            </Text>
            <Text color="#8C8C8C" style={styles.yearText}>
              {year}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  textContaienr: {
    flexDirection: 'row',
    marginTop: 30,
  },
  bold: {
    fontWeight: 'bold',
  },
  month: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 7,
    marginRight: 10,
    backgroundColor: '#eee',
    height: 100,
    minWidth: 80,

    flex: 0,
    flexGrow: 0,

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
  monthText: {
    marginTop: 7,
    marginBottom: 4,
  },
  months: {
    overflow: 'visible',
    marginTop: 15,
  },
  length: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: '#eee',
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 1,
  },
  lengths: {
    flexDirection: 'row',
    marginTop: 15,
  },
})

export default FlexiblePicker
