import * as React from 'react'
import { SvgXml } from 'react-native-svg'

import LocationSVG from '#/static/img/icons/location.svg'
import BackSVG from '#/static/img/icons/back.svg'
import HomeSVG from '#/static/img/icons/home.svg'
import CalendarSVG from '#/static/img/icons/calendar.svg'

export const LocationIcon = props => <SvgXml xml={LocationSVG} {...props} />

export const BackIcon = props => <SvgXml xml={BackSVG} {...props} />

export const HomeIcon = props => <SvgXml xml={HomeSVG} {...props} />

export const CalendarIcon = props => <SvgXml xml={CalendarSVG} {...props} />
