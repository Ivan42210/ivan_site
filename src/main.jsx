import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home'
import './index.css'
import Header from './components/Header'
import About from './Pages/About'
import Services from './Pages/Services'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <Header />
    <Routes>
    <Route exact path='/' element={<Home />}/>
    <Route exact path='/services' element={<Services />}/>
    <Route exact path='/a-propos' element={<About />}/>
    </Routes>
    </Router>
  </React.StrictMode>,
)
