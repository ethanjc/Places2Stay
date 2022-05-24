import { TextProps, TextStyle } from 'react-native'

export type Props = TextProps & {
  style?: TextStyle
  variant?: 'heading' | 'body' | 'body2'
  color?: string
}
