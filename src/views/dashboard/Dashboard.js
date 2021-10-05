import React, { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const WidgetsDropdown = lazy(() => import('../components/widgets/WidgetsDropdown.js'))

const Dashboard = (authorized) => {
  if (!authorized) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <WidgetsDropdown />
    </>
  )
}

export default Dashboard
