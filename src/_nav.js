import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilAudio, cilPuzzle, cilSpeedometer, cilStar } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Home',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Booking',
  },
  {
    component: CNavItem,
    name: 'Booking',
    to: '/bookingTable',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'User',
  },
  {
    component: CNavGroup,
    name: 'User',
    to: '/userTable',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Customer',
        to: '/userTable/Customer',
      },
      {
        component: CNavItem,
        name: 'Owner',
        to: '/userTable/Owner',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Campaign and Voucher',
  },
  {
    component: CNavItem,
    name: 'Voucher',
    to: '/voucherTable',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Area',
  },
  {
    component: CNavItem,
    name: 'Area',
    to: '/areaTable',
    icon: <CIcon icon={cilAudio} customClassName="nav-icon" />,
  },
]

export default _nav
