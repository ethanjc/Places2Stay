import * as React from 'react';
import {Text as StockText, TextProps, TextStyle} from 'react-native';

type Props = TextProps & {style?: TextStyle};

const Text = ({children, style}: Props) => (
  <StockText style={style}>{children}</StockText>
);

export default Text;
