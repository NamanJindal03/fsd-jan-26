import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { Link } from 'react-router-dom'

export default function Login() {
    const { isLoggedIn, login} = useContext(AuthContext)

    const handleLogin = () => {
        login();
    }
  return (
    <div>
            {isLoggedIn ? (
                <p>You are already logged in</p>
            ): (
                <button onClick={handleLogin}>Login</button>
            )}

            <button> <Link to={'/'}>Home page</Link> </button>
    </div>
  )
}