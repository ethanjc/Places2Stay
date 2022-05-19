import { TextProps, TextStyle } from 'react-native'

export type Props = TextProps & {
  onToggle: () => {}
  values: [string, string]
}
