import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './Pages/About'
import Services from './Pages/Services'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import { services, introduction } from './datas/datas'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <Header />
    <Routes>
    <Route exact path='/' element={<Home datas={services} dataHome={introduction}/>}/>
    <Route exact path='/services/:name' element={<Services />}/>
    <Route exact path='/a-propos' element={<About />}/>
    </Routes>
    <Footer />
    </Router>
  </React.StrictMode>,
)
