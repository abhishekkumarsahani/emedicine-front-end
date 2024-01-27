import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import Dashboard from './users/Dashboard';
import Orders from './users/Orders';
import Profile from './users/Profile';
import Cart from './users/Cart';
import AdminDashboard from './admin/AdminDashboard';
export default function RouterPage(){
    return(
        <Router>
            <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/' element={<Registration/>} />
            <Route path='/' element={<Dashboard/>} />
            <Route path='/' element={<Orders/>} />
            <Route path='/' element={<Profile/>} />
            <Route path='/' element={<Cart/>} />

            <Route path='/' element={<AdminDashboard/>} />
            <Route path='/' element={<Admin/>} />
            <Route path='/' element={</>} />
            </Routes>
        </Router>
    )
}