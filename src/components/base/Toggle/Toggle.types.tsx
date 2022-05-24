import { TextProps, ViewStyle } from 'react-native'

export type Props = TextProps & {
  onToggle: (index: number) => null
  values: [string, string]
  selected: 0 | 1
  style: ViewStyle
}
