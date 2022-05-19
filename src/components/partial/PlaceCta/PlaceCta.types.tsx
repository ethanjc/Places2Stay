import { ImageSourcePropType, ViewStyle } from 'react-native'

export type Props = {
  style?: ViewStyle
  image: ImageSourcePropType
  imageLabel: string
  title: string
  location: string
  id: string
  onPress: () => void
}
