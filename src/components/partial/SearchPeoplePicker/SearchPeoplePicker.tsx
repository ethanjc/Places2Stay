import { Text } from '#/components/base'
import React, { useReducer } from 'react'
import { StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

type idTypes = 'adults' | 'children' | 'infants' | 'pets'

const Picker = ({
  id,
  title,
  description,
  value = 0,
  onChange,
}: {
  id: idTypes
  title: string
  description: string
  value: number
  onChange: (id: idTypes, add: boolean) => void
}) => (
  <View style={styles.picker}>
    <View>
      <Text variant="body2">{title}</Text>
      <Text color="#8C8C8C">{description}</Text>
    </View>
    <View style={styles.counter}>
      <TouchableOpacity
        onPress={() => onChange(id, false)}
        disabled={value < 1}
      >
        <Text style={[styles.button, value < 1 && styles.disabled]}>-</Text>
      </TouchableOpacity>
      <Text style={styles.counterResult} variant="body2">
        {value}
      </Text>
      <TouchableOpacity onPress={() => onChange(id, true)}>
        <Text style={styles.button}>+</Text>
      </TouchableOpacity>
    </View>
  </View>
)

const initialState = {
  adults: 1,
  children: 0,
  infants: 0,
  pets: 0,
} as const

const reducer = (state, action) => {
  const id = action.payload
  switch (action.type) {
    case 'increment':
      return { ...state, [id]: state[id] + 1 }
    case 'decrement':
      return { ...state, [id]: state[id] - 1 }
  }
}

const SearchPeoplePicker = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChange = (id: idTypes, add: boolean) => {
    dispatch({ type: add ? 'increment' : 'decrement', payload: id })
  }

  return (
    <View>
      <Picker
        id="adults"
        title="Adults"
        description="description"
        value={state.adults}
        onChange={handleChange}
      />
      <Picker
        id="children"
        title="Children"
        description="description"
        value={state.children}
        onChange={handleChange}
      />
      <Picker
        id="infants"
        title="Infants"
        description="description"
        value={state.infants}
        onChange={handleChange}
      />
      <Picker
        id="pets"
        title="Pets"
        description="description"
        value={state.pets}
        onChange={handleChange}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  picker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 11,

    borderTopWidth: 1,
    borderColor: '#C1BBBB',
    paddingTop: 20,
    marginBottom: 20,
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    fontSize: 32,
    lineHeight: 32,
    width: 32,
    height: 32,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 1,
    borderRadius: 16,
    paddingLeft: 1.5,
  },
  counterResult: {
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  disabled: {
    opacity: 0.5,
  },
})

export default SearchPeoplePicker
