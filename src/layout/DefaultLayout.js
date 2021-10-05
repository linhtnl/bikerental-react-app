import React from 'react'
import { AppContent, AppSidebar, AppHeader } from '../components/index'
import { Redirect } from 'react-router-dom'

const DefaultLayout = (authorized) => {
  if (!authorized) {
    return <Redirect to="/login" />
  }
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
