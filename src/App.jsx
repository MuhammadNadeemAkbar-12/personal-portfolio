import React from 'react'
import Header from './componets/header/Header.jsx'
import Nav from './componets/nav/Nav.jsx'
import Experience from './componets/experience/Experience.jsx'
import Services from './componets/services/Services.jsx'
import Portfolio from './componets/portfolio/Portfolio.jsx'
import Testimonials from './componets/testimonials/Testimonials.jsx'
import Contact from './componets/contact/Contact.jsx'
import Footer from './componets/footer/Footer.jsx'
import About from './componets/about/About.jsx'

const App = () => {
    return (
        <>
           <Header/>
           <Nav/>
           <About/>
           <Experience/>
           <Services/>
           <Portfolio/>
           <Testimonials/>
           <Contact/>
           <Footer/>

        </>
    )
}

export default App