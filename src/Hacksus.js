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
import Rules from './components/Rules'
import ContactUs from './components/ContactUs';
import './App.css';
import PrblmStatements from './components/PrblmStatements';


 
function Hacksus() {
    return (
        <div className="App">
            <Header />
            <Jumbotron />
            <About />
            {/* <Prizes /> */}
            
            <PrblmStatements />
            <Themes />
            <Schedule />
            {/* <Partners /> */}
            <Rules />
            {/* <FAQs /> */}
            <ContactUs />
            {/* <Register /> */}
            <Footer />
        </div>
    )
}

export default Hacksus
