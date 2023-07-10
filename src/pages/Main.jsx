import React from 'react'
import Home from './Home/Home'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const Main = () => {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default Main