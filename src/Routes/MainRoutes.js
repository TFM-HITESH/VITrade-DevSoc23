import React from 'react'
import { Routes , Route } from 'react-router-dom'
//import { Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import CreatePost from '../Pages/CreatePost'
import ViewPost from '../Pages/ViewPost'
import ViewMore from '../Pages/ViewMore'




function MainRoutes() {
    return (
       <Routes>
           <Route path="/" element={<Home />} /> 
           <Route path="/signup" element={<Signup/>} />
           <Route path="/login" element={<Login/>} />
           <Route path="/create" element={<CreatePost/>} />
           <Route path="/view" element={<ViewPost/>} />
           <Route path="/viewmore" element={<ViewMore/>} />   
       </Routes>
    )
}

export default MainRoutes
