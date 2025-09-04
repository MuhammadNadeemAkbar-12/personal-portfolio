import React from 'react'
import Cv from '../../assets/M.Nadeem Akbar CV.pdf'
const CTA = () => {
    return (
        <div className="container">
            <a href={Cv} download className="btn">Download Cv</a>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
    )
}

export default CTA  