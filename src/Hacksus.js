import React from 'react'
import Header from './components/Header'
import Jumbotron from './components/Jumbotron'
import About from './components/About';
import Prizes from './components/Prizes'
import Themes from './components/Themes'
import Schedule from './components/Schedule'
import Partners from './components/Partners'
import FAQs from './components/FAQs'
import Register from './components/Register'
import Footer from './components/Footer'
 
function Hacksus() {
    return (
        <div>
            <Header />
            <Jumbotron />
            <About />
            <Prizes />
            <Themes />
            <Schedule />
            <Partners />
            <FAQs />
            <Register />
            <Footer />
        </div>
    )
}

export default Hacksus
