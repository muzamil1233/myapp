import React from 'react'
import {Routes ,Route, BrowserRouter as Router} from "react-router-dom"
import Header from './components/Header'
import "./style/App.scss"
import "./style/header.scss"
import "./style/Home.scss"
import "./style/Footer.scss"

import "./style/contact.scss"
import "./style/mediaquery.scss"











import Home from './components/Home'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Services from './components/Services'



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route  path = "/" element = {<Home />}/>
        <Route  path = "/contact" element = {<Contact />}/>
        <Route  path = "/services" element = {<Services />}/>
      </Routes>
    <Footer />
    <Contact />
    <Services />
    </Router>
    
  )
}

export default App
