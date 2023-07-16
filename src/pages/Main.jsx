import React from 'react';
import Home from './Home/Home';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import Products from './Product/Products';
import ProductDetails from '../components/Product/ProductDetails';
import { useSelector } from 'react-redux';
import Cart from './Orders/Cart';


const Main = () => {

    const { isAuthenticated, user } = useSelector(state => state.user)


    return (
        <div>
            <Router >
                <Header isAuthenticated={isAuthenticated} user={user} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/productDetails/:id' element={<ProductDetails />} />
                    <Route path='/me/cart' element={<Cart />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default Main