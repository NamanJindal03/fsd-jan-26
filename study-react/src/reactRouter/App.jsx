import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Blogs from './Components/Blogs'
import BlogParentTemplate from './Components/BlogParentTemplate'
import SearchPage from './page/SearchPage'

function About(){
    return (
        <>
            <h1>About Us</h1>
            <p>we are a leadning marketing agency categorig to one of the biggest cleints in the world</p>
            <Link to={'/home'}>Home page</Link>
        </>
    )
}

export default function App() {
  return (
    <>
        <Routes>
            <Route path='/home' element={<div>I am on home page</div>}/>
            <Route path='/about' element={<About />}/>
            <Route path='/blogs' element={<BlogParentTemplate />}>    
                <Route index element={<div>BLog list </div>}/>
                <Route path=':id' element={<Blogs />}/>
                <Route path='archive/:id' element={<div>ewfewfewfwf </div>} />
            </Route>
            <Route path="search" element={<SearchPage/>}/>
            
            <Route path='*' element={<div>Not found, please visit homepage</div>}/>
        </Routes>
    </>
  )
}
