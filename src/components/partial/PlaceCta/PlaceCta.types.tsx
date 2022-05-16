import {ImageSourcePropType, ViewStyle} from 'react-native';

export type Props = {
  style?: ViewStyle;
  img: ImageSourcePropType;
  imgLabel: string;
  description: string;
  location: string;
};
