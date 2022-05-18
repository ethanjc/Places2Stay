import * as React from 'react'
import { SvgXml } from 'react-native-svg'

import LocationSVG from '#/static/img/icons/location.svg'
import BackSVG from '#/static/img/icons/back.svg'

export const LocationIcon = props => <SvgXml xml={LocationSVG} {...props} />

export const BackIcon = props => <SvgXml xml={BackSVG} {...props} />
