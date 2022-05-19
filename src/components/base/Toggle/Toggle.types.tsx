import { TextProps } from 'react-native'

export type Props = TextProps & {
  onToggle: (index: number) => {}
  values: [string, string]
  selected: 0 | 1
}
