import { TextProps, TextStyle } from 'react-native'

export type Props = TextProps & {
  style?: TextStyle
  title: string
  items?: [{ itemLabel: string; itemDetail: string }]
}
