import { UserContext } from '@src/context/UserContext'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import LoadingSpinner from '../Loading/LoadingSpinner'

const LoginCallback = () => {
  const { fetchUser } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    fetchUser()
    navigate('/')
  }, [])

  return <LoadingSpinner />
}

export default LoginCallback
