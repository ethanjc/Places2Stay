import * as React from 'react'
import { SvgXml } from 'react-native-svg'

import LocationSVG from '#/static/img/icons/location.svg'
import BackSVG from '#/static/img/icons/back.svg'
import HomeSVG from '#/static/img/icons/home.svg'
import CalendarSVG from '#/static/img/icons/calendar.svg'
import DrinksSVG from '#/static/img/icons/drinks.svg'
import HouseSVG from '#/static/img/icons/house.svg'
import MapSVG from '#/static/img/icons/map.svg'

export const LocationIcon = props => <SvgXml xml={LocationSVG} {...props} />
export const BackIcon = props => <SvgXml xml={BackSVG} {...props} />
export const HomeIcon = props => <SvgXml xml={HomeSVG} {...props} />
export const CalendarIcon = props => <SvgXml xml={CalendarSVG} {...props} />
export const DrinksIcon = props => <SvgXml xml={DrinksSVG} {...props} />
export const HouseIcon = props => <SvgXml xml={HouseSVG} {...props} />
export const MapIcon = props => <SvgXml xml={MapSVG} {...props} />
