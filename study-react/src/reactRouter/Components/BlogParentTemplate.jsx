import React from 'react'
import { Outlet } from 'react-router-dom'

export default function BlogParentTemplate() {
  return (
    <>
        <Outlet />
        <header>
        heaing etc
        </header>
        <div>BlogParentTemplate</div>
        
    </>
  )
}
