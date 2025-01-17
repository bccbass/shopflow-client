import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router'
import { UserContext } from './UserContext'

const PrivateRoute = ({children}) => {
    const { user, isLoading } = useContext(UserContext)
    if (isLoading) return <p>Loading user...</p>
    return (
    user ? children : < Navigate to="/login" />
  )
}

export default PrivateRoute