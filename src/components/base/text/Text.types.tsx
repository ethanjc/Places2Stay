import {TextProps, TextStyle} from 'react-native';

export type Props = TextProps & {
  style?: TextStyle;
  variant?: 'heading' | 'body';
  color?: string;
};
