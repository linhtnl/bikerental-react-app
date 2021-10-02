import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilPuzzle, cilSpeedometer, cilStar } from '@coreui/icons'
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
    name: 'Event',
  },
  {
    component: CNavItem,
    name: 'Event',
    to: '/eventTable',
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
]

export default _nav
