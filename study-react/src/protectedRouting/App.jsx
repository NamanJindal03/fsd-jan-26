import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { AuthProvider } from './AuthContext'
import PrivateRoutes from './PrivateRoutes'

import Login from './Login'

export default function App() {
  return (
    <>
        <AuthProvider>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path="/" element={<>
                        <div>Home</div>
                        <Link to="/login">Login</Link>
                    </>} />
                    <Route path="/products" element={<div>Products</div>} />
                </Route>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </AuthProvider>
    </>
  )
}
