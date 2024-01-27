import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import Dashboard from './users/Dashboard';
import Orders from './users/Orders';
import Profile from './users/Profile';
import Cart from './users/Cart';
import AdminDashboard from './admin/AdminDashboard';
import AdminOrders from './admin/AdminOrders';
import CustomerList from './admin/CustomerList';
import Medicine from './admin/Medicine';
import MedicineDisplay from './users/MedicineDisplay';
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
            <Route path='/' element={<MedicineDisplay/>} />

            <Route path='/' element={<AdminDashboard/>} />
            <Route path='/' element={<AdminOrders/>} />
            <Route path='/' element={<CustomerList/>} />
            <Route path='/' element={<Medicine/>} />
            </Routes>
        </Router>
    )
}